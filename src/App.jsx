
import Card from './components/Card'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import Marquees from './components/Marquees'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Products from './components/Products'
import Stripe from './components/Stripe'
import Stripes from './components/Stripes'
import Work from './components/Work'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full bg-zinc-900 font-["Satoshi_Complete"] style={{ fontFamily: "font" }} text-white'>
      <Navbar />
      <Work />
      <Stripes />
      <Stripe />
      <Products />
      <Product />
      <Marquees />
      <Marquee />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
