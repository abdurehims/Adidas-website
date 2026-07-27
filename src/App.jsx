
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Outfit from './components/Outfit';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products title={"adiWeek"} />
      <Outfit />
    </>
  )
}

export default App
