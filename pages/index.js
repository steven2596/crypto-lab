import { useEffect, useState } from 'react';
import Head from 'next/head';

import CoinList from '../components/Coinlist';
import styles from '../styles/Home.module.scss';
import { coinGecko } from '../components/coinGecko';
import Pagination from '../components/Pagination';
import axios from 'axios';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    //Fetching data for only one page when requested
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await coinGecko.get("coins/markets", {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 15,
            page: currentPage,
            sparkline: false,
            price_change_percentage: '1h,24h,7d'
          }
        });
        setCoins(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error)
      }

    };

    fetchData();
  }, [currentPage])

  return (
    <>
      <Head>
        <title>CryptoLAB</title>
        <meta name="keywords" content="coins" />
      </Head>

      <div className={styles.container}>
        <CoinList isLoading={isLoading} coins={coins} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  )
};

export default Home;


