import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesktopLayout1 from './components/Desktop/DesktopLayout1.jsx';
import HomePage from './Pages/HomePage.jsx';
import Account from './components/Account Login/Account.jsx';
import ProductsPage from './components/Products/ProductsPage.jsx';
import WhiteChocolatePeanutButter from './components/Product Details/WhiteChocolatePeanutButter.jsx'
import CookieFudgePeanutButter from './components/Product Details/CookieFudgePeanutButter.jsx'
import Butterscotch from './components/Product Details/Butterscotch.jsx'
import CreamOnion from './components/Product Details/Cream&Onion.jsx'
import ChipsPeriPeri from './components/Product Details/ChipsPeriPeri.jsx'
import ChocolateFlavour from './components/Product Details/ChocolateFlavour.jsx'
import MalaiKulfiFlavour from './components/Product Details/MalaiKulfiFlavour.jsx'
import ProteinBars from './components/Product Details/ProteinBars'
import MobWCPB from './components/Mobile Product Details/MobWCPB.jsx'
import MobCookieFudgePeanutButter from './components/Mobile Product Details/MobCookieFudgePeanutButter'
import MobButterscotch from './components/Mobile Product Details/MobButterscotch.jsx'
import MobCreamOnion from './components/Mobile Product Details/MobCream&Onion.jsx'
import MobChipsPeriPeri from './components/Mobile Product Details/MobChipsPeriPeri.jsx'
import MobChocolateFlavour from './components/Mobile Product Details/MobChocolateFlavour.jsx'
import MobMalaiKulfiFlavour from './components/Mobile Product Details/MobMalaiKulfiFlavour.jsx'
import MobProteinBars from './components/Mobile Product Details/MobProteinBars.jsx'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={<DesktopLayout1 />} />

        <Route path="/product1" element={<WhiteChocolatePeanutButter />} />
        <Route path="/product2" element={<CookieFudgePeanutButter />} />
        <Route path="/product3" element={<Butterscotch />} />
        <Route path="/product4" element={<CreamOnion />} />
        <Route path="/product5" element={<ChipsPeriPeri />} />
        <Route path="/product6" element={<ChocolateFlavour />} />
        <Route path="/product7" element={<MalaiKulfiFlavour />} />
        <Route path="/product8" element={<ProteinBars />} />

        <Route path="/m-product1" element={<MobWCPB />} />
        <Route path="/m-product2" element={<MobCookieFudgePeanutButter />} />
        <Route path="/m-product3" element={<MobButterscotch />} />
        <Route path="/m-product4" element={<MobCreamOnion />} />
        <Route path="/m-product5" element={<MobChipsPeriPeri />} />
        <Route path="/m-product6" element={<MobChocolateFlavour />} />
        <Route path="/m-product7" element={<MobMalaiKulfiFlavour />} />
        <Route path="/m-product8" element={<MobProteinBars />} />
      </Routes>
    </Router>
  );
}

export default App;
