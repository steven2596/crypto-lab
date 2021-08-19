import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './Coin.module.scss';
import { coinGecko } from '../../components/coinGecko';
import CoinDetails from '../../components/Coin-details';
import CoinChart from '../../components/Coin-chart';
import Loader from '../../components/Loader';

const Coin = () => {
    const router = useRouter();
    const { id } = router.query;

    const [currentCoin, setCurrentCoin] = useState({});
    const [isCoinLoading, setIsCoinLoading] = useState(false);

    const formatData = data => {
        return data.map(el => {
            return {
                x: el[0],
                y: el[1].toFixed(2)
            }
        })
    }

    useEffect(() => {
        const fetchCurrentCoinData = async () => {
            setIsCoinLoading(true);
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
                    day: formatData(day.data.prices),
                    week: formatData(week.data.prices),
                    month: formatData(month.data.prices)
                };

                setCurrentCoin(currentCoinData);
            }
            setIsCoinLoading(false);
        };
        fetchCurrentCoinData();
    }, [id])

    if (isCoinLoading) {
        return (
            <Loader />
        )
    }

    return (
        <div className={styles.coin} >
            {
                currentCoin.coinData ? <CoinDetails coin={currentCoin.coinData} /> : null
            }
            <CoinChart coin={currentCoin} />
        </div>

    );

};

export default Coin;
