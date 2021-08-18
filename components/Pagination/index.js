import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, setCurrentPage }) => {

    const pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    };

    return (
        <ul className={styles.pages}>
            {
                pages.map(page => (

                    <li key={page} className={styles.page} onClick={() => setCurrentPage(page)} >
                        <a
                            href='#'
                            onClick={() => setCurrentPage(page)}
                            className={`
                            ${styles.link}
                            ${currentPage === page ? styles.current_page : ''}
                            `}>
                            {page}
                        </a>
                    </li>
                ))
            }

        </ul>
    )
};

export default Pagination;