import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.footer__text}>&#169; 2021 CrytoLab. All Right Reserved.</span>
            <span className={styles.footer__text}>Powered By CoinGecko API</span>
        </footer>
    )
};

export default Footer;
