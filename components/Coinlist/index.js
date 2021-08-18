import CoinItem from '../Coin-item';
import Loader from '../Loader';
import styles from './Coinlist.module.scss';


const CoinList = ({ coins, isLoading }) => {

    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <div className={styles.coinlist}>
            <div className={styles.coinlist__title}>
                <span className={styles.coinlist__rank}>Rank</span>
                <span className={styles.coinlist__image}>Coin</span>
                <span className={styles.coinlist__name}></span>
                <span className={styles.coinlist__symbol}>Symbol</span>
                <span className={styles.coinlist__price}>Price</span>
                <span className={styles.coinlist__percent_1h}>% 1h</span>
                <span className={styles.coinlist__percent_24h}>% 24h</span>
                <span className={styles.coinlist__percent_7d}>% 7d</span>
                <span className={styles.coinlist__volume}>Volume(24h)</span>
                <span className={styles.coinlist__marketCap}>Market Cap</span>
            </div>
            {
                coins?.map(coin => <CoinItem key={coin.id} coin={coin} />)
            }
        </div>

    );
}

export default CoinList;

