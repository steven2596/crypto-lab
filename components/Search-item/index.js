import styles from './SearchItem.module.scss';
import Link from 'next/link';


const SearchItem = ({ result, setSearchbox }) => {
    return (
        <Link href='/coins/[id]' as={`/coins/${result.id}`} >
            <div className={styles.searchItem} onClick={() => setSearchbox(false)}>
                <img src={result.image} alt="result" className={styles.searchItem__image} />
                <span className={styles.searchItem__name}>{result.name}</span>
                <span className={styles.searchItem__rank}>#{result.market_cap_rank}</span>
            </div>
        </Link>
    )
};

export default SearchItem;