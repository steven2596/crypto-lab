import styles from './CoinItem.module.scss';

import Link from 'next/link';

const CoinItem = ({ coin }) => {
    const {
        market_cap_rank,
        image,
        name,
        symbol,
        current_price,
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h,
        price_change_percentage_7d_in_currency,
        total_volume,
        market_cap,
        id
    } = coin;
    return (
        <Link href='/coins/[id]' as={`/coins/${id}`}  >

            <div className={styles.coin} >
                <span className={styles.coin__rank}>{market_cap_rank}</span>
                <img className={styles.coin__image} src={image} alt="coin-image" />
                <span className={styles.coin__name}>{name}</span>
                <span className={styles.coin__symbol}>{symbol}</span>
                <span className={styles.coin__price}>${current_price.toFixed(2)}</span>
                <span className={`
                ${styles.coin__percent_1h}
                ${price_change_percentage_1h_in_currency > 0 ? styles.coin__percent_positive : styles.coin__percent_negative}  
                `}
                >
                    {price_change_percentage_1h_in_currency?.toFixed(2)}%
                </span>
                <span className={`
                ${styles.coin__percent_24h}
                ${price_change_percentage_24h > 0 ? styles.coin__percent_positive : styles.coin__percent_negative}  
                `}
                >
                    {price_change_percentage_7d_in_currency?.toFixed(2)}%
                </span>
                <span className={`
                ${styles.coin__percent_7d}
                ${price_change_percentage_7d_in_currency > 0 ? styles.coin__percent_positive : styles.coin__percent_negative}  
                `}
                >
                    {price_change_percentage_7d_in_currency?.toFixed(2)}%
                </span>
                <span className={styles.coin__volume}>$ {total_volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                <span className={styles.coin__marketCap}>$ {market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>

        </Link>
    );
}

export default CoinItem;