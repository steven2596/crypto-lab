import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <figure className={styles.spinner} />
        </div>
    )
};

export default Loader;