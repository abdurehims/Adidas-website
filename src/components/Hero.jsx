import backImage from '../assets/images/heroBanner.png';
import arrow from '../assets/images/arrow.png';

export default function Hero() {
  return (
    <div className="
    bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backImage})` }}>
      <div className='relative z-10 flex items-center h-full px-10 md:px-20 '>

        <div max-w-xl>
          <h1 className="text-black text-5xl md:text-7xl font-extrabold leading-tight"> ADICLUB IS SHOWING OFF.</h1>
          <p className="text-white text-lg mt-6 leading-8">
            Exclusive releases for our members and more ways
            to unlock those things that you love</p>

          <div className='flex items-center gap-6 mt-10 space-y-3'>
            <button className="flex items-center gap-4 text-white text-3xl font-bold hover:text-gray-300 transition">
              <img src={arrow} alt="" className="w-10" />
              SEE MORE
            </button>

            <button className="flex items-center gap-4 text-white text-3xl font-bold hover:text-gray-300 transition">
              <img src={arrow} alt="" className="w-10" />
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}