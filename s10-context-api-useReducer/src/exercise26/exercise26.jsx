import Page from "./Page";
import ThemeContextProvider from "./ThemeContextProvider";
import './exercise26.css'


function Exercise26()
{
    return (
        <ThemeContextProvider>
            <Page />
        </ThemeContextProvider>
    )
}

export default Exercise26;
