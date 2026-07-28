
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Outfit from './components/Outfit';
import History from './components/History';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products title={"adiWeek"} />
      <Outfit />
      <History />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
