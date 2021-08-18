import axios from 'axios';

export const coinGecko = axios.create({
    baseURL: "https://api.coingecko.com/api/v3"
});


//Fetch coin data and chart data by coin id
//Modify those datas as needed and return currentCoinData object
export const fetchCurrentCoinData = async (id) => {
    if (id) {
        const [data_usd, data_btc, day, week, month] = await Promise.all([
            coinGecko.get("coins/markets", {
                params: {
                    vs_currency: 'usd',
                    ids: id,
                    price_change_percentage: '1h,24h,7d'
                }
            }),
            coinGecko.get("coins/markets", {
                params: {
                    vs_currency: 'btc',
                    ids: id,
                    price_change_percentage: '1h,24h,7d'
                }
            }),
            coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: 'usd',
                    days: '1',
                }
            }),
            coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: 'usd',
                    days: '7',
                }
            }),
            coinGecko.get(`/coins/${id}/market_chart/`, {
                params: {
                    vs_currency: 'usd',
                    days: '30',
                }
            })
        ]);

        //Modify coin data as needed
        let coinData;

        if (data_usd && data_btc) {
            const { current_price, price_change_percentage_24h } = data_btc.data[0];

            coinData = data_usd.data[0];
            coinData['current_price_btc'] = current_price;
            coinData['price_change_percentage_24h_btc'] = price_change_percentage_24h;
        }

        const currentCoinData = {
            coinData: coinData,
            day: day.data.prices,
            week: week.data.prices,
            month: month.data.prices
        };

        return currentCoinData;
    }
}