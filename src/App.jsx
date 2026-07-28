
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Outfit from './components/Outfit';
import History from './components/History';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products title={"adiWeek"} />
      <Outfit />
      <History />
      <Gallery />
    </>
  )
}

export default App
