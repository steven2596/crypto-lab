import { useState, useEffect, useContext } from 'react';
import styles from './Navbar.module.scss';
import LabIcon from '../../assets/icons/lab.svg';
import SearchIcon from '../../assets/icons/search.svg';
import SearchItem from '../Search-item';
import { SearchDataContext } from '../../context/searchDataContext';

const Navbar = () => {
    const { searchData, isDataLoading } = useContext(SearchDataContext);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [searchbox, setSearchbox] = useState(false);

    // Search function
    useEffect(() => {
        setResults(searchData?.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())));
    }, [search])

    return (
        <nav className={styles.navbar}>
            <a href='/' className={styles.navbar__logo}>
                <LabIcon className={styles.navbar__logo_icon} />
                <h1 className={styles.navbar__logo_text}>CryptoLab</h1>
            </a>
            <div className={`
                ${styles.navbar__search_container}
                ${searchbox ? styles.searchMode : ''}
                `}>
                <div className={styles.navbar__icon_container} onClick={() => setSearchbox(true)}><SearchIcon className={styles.navbar__search_icon} /></div>

                <input
                    className={styles.navbar__search_input}
                    onChange={e => setSearch(e.target.value)}
                    onClick={() => setSearchbox(true)}
                    value={search}
                    type="text"
                    placeholder='Search Currencies...'
                />
                <span className={styles.navbar__exitIcon} onClick={() => setSearchbox(false)}>&#10006;</span>
                <div className={styles.navbar__searchbox}
                >
                    {
                        results?.map(result => (
                            <SearchItem key={result.id} result={result} setSearchbox={setSearchbox} />
                        ))
                    }
                </div>

            </div>

        </nav>
    )
};

export default Navbar;