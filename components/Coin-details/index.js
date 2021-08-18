import styles from './CoinDetails.module.scss';

import ArrowUp from '../../assets/icons/arrow_up.svg';
import ArrowDown from '../../assets/icons/arrow_down.svg';

const CoinDetails = ({ coin }) => {
    const {
        image,
        name,
        symbol,
        current_price,
        current_price_btc,
        price_change_percentage_24h,
        price_change_percentage_24h_btc,
        market_cap,
        market_cap_rank,
        total_volume,
        circulating_supply,
        total_supply
    } = coin;

    return (
        <div className={styles.coin} >
            <div className={styles.coin__header} >
                <div className={styles.coin__header_left}>
                    <img className={styles.image} src={image} alt="coin" />
                    <div className={styles.group}>
                        <span className={styles.rank}>Rank #{market_cap_rank}</span>
                        <span className={styles.name}>
                            {name}
                            <span>{symbol}</span>
                        </span>

                    </div>
                </div>
                <div className={styles.coin__header_right}>
                    <div className={styles.price_usd}>
                        <span className={styles.price}>$ {current_price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        <div
                            className={`
                            ${styles.percentage}
                            ${price_change_percentage_24h > 0 ? styles.positive : styles.negative}
                        `}>
                            {
                                price_change_percentage_24h > 0 ?
                                    <ArrowUp className={styles.arrow_icon} />
                                    : <ArrowDown className={styles.arrow_icon} />

                            }
                            <span className={styles.number}>{price_change_percentage_24h?.toFixed(2)}%</span>
                        </div>
                    </div>

                    <div className={styles.price_btc}>
                        <span className={styles.price}>{current_price_btc} BTC</span>
                        <div
                            className={`
                            ${styles.percentage}
                            ${price_change_percentage_24h_btc > 0 ? styles.positive_btc : styles.negative_btc}
                        `}>
                            <span className={styles.number}>{price_change_percentage_24h_btc?.toFixed(2)}%</span>
                            {
                                price_change_percentage_24h_btc > 0 ?
                                    <ArrowUp className={`${price_change_percentage_24h_btc > 0 ? styles.arrow_positive : styles.arrow_negative}`} />
                                    : <ArrowDown className={`${price_change_percentage_24h_btc > 0 ? styles.arrow_positive : styles.arrow_negative}`} />

                            }
                        </div>
                    </div>


                </div>
            </div>

            <div className={styles.coin__content}>
                <div className={styles.content_box}>
                    <span className={styles.number}>${market_cap?.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span>USD</span></span>
                    <span className={styles.title}>Market Cap</span>
                </div>
                <div className={styles.content_box}>
                    <span className={styles.number}>${total_volume?.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span>USD</span></span>
                    <span className={styles.title}>Total Volume</span>
                </div>
                <div className={styles.content_box}>
                    <span className={styles.number}>${circulating_supply?.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span>USD</span></span>
                    <span className={styles.title}>Circulating Supply</span>
                </div>
                <div className={styles.content_box}>
                    <span className={styles.number}>${total_supply?.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span>USD</span></span>
                    <span className={styles.title}>Total Supply</span>
                </div>
            </div>
        </div>
    )
};

export default CoinDetails;