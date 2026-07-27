import backImage from "../assets/images/heroBanner.png";
import arrow from "../assets/images/arrow.png";
import logo from '../assets/images/adidasLogo.jpg';

export default function Hero() {
  return (
    <section
      className="relative  bg-cover bg-center"
      style={{ backgroundImage: `url(${backImage})` }}
    >

      <div className="relative z-10 h-full flex items-center px-8 md:px-20">
        <div className="max-w-lg">
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}>
            <h1 className="uppercase font-extrabold leading-[0.9] tracking-tight">
              <span className="block text-red-500 text-3xl md:text-7xl mt-30"
                style={{
                  background: "linear-gradient(to left, rgba(214, 59, 44, 1), #781313ff, #400707ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ADICLUB
              </span>

              <span className=" text-3xl md:text-5xl mt-1"
                style={{
                  background: "linear-gradient(to left, #360a0aff, #5a1111ff, #271313ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                IS SHOWING OFF.
              </span>
            </h1>

            <p className="text-white text-lg md:text-xl mt-6 leading-8">
              Exclusive releases for our members and more ways
              <br />
              to unlock those things that you love.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-8 mb-10">

            <button className="flex items-center gap-5  text-2xl md:text-3xl 
            hover-black-blue text-white text-2xl font-bold">
              <img src={arrow} alt="arrow" className="w-12 " />
              SEE MORE
            </button>

            <button className="flex items-center gap-5  text-2xl md:text-3xl 
            hover-black-blue text-white text-2xl font-bold">
              <img src={arrow} alt="arrow" className="w-12" />
              BUY NOW
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}