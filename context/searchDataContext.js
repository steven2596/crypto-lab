import { useState, useEffect, createContext } from "react";
import { coinGecko } from "../components/coinGecko";

export const SearchDataContext = createContext();

export const SearchDataContextProvider = props => {
    const [searchData, setSearchData] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(false);

    useEffect(() => {
        const fetchSearchData = async () => {
            setIsDataLoading(true);
            const response = await coinGecko.get("coins/markets", {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 150,
                    sparkline: false
                }
            });
            setSearchData(response.data);
            setIsDataLoading(false);
        };

        fetchSearchData();
    }, [])

    return (
        <SearchDataContext.Provider value={{ searchData, isDataLoading }} >
            {props.children}
        </SearchDataContext.Provider>
    )
};