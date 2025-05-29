import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import CartContextProvider from './store/shopping-cart-context.jsx';
import ThemeContextProvider from './exercise26/ThemeContextProvider.jsx';
import Page from './exercise26/Page.jsx';
import './exercise26/exercise26.css'

function App()
{

  return (
    <>
      <CartContextProvider>
        <Header />
        {/* Using the shop Component into a wrapper component */}
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </CartContextProvider>
      <ThemeContextProvider>
        <Page />
      </ThemeContextProvider>
    </>
  );
}

export default App;
