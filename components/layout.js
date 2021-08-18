import { SearchDataContextProvider } from "../context/searchDataContext";
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {

    return (
        <div>
            <SearchDataContextProvider>
                <Navbar />
            </SearchDataContextProvider>
            {children}
            <Footer />
        </div>

    );
}

export default Layout;