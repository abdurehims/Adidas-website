import outfitImage from "../assets/images/girl-image.png";
import arrow from "../assets/images/arrow.png";
import Products from "./Products";

export default function Outfit() {
  return (
    <section className="py-11 px-4 md:px-9">
      <div className="relative mx-auto max-w-[1390px] overflow-hidden rounded-[70px]">

        
        <div className="flex h-[650px]">

          <div className="w-[32%]">
            <img
              src={outfitImage}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-[68%] bg-[#252021] px-24 pt-[260px] pb-20">

            <p className="text-[30px] text-white leading-relaxed">
              <span className="text-[#F5EC31]">
                60% OFF + free shipping:
              </span>{" "}
              only for adiClub members.
            </p>

            <p className="mt-10 text-[30px] text-white leading-relaxed">
              Check your account and start buying for benefits on
              <span className="text-[#F5EC31]"> adiWeek.</span>
            </p>

           
            <div className="mt-24 flex flex-wrap gap-20">

              <button className="group flex items-center gap-6 text-3xl font-black uppercase text-white transition duration-300 hover:text-[#F6EB2F]">
                <img
                  src={arrow}
                  alt=""
                  className="w-12 transition-transform duration-300 group-hover:translate-x-2"
                />
                BUY NOW
              </button>

              <button className="group flex items-center gap-6 text-3xl font-black uppercase text-white transition duration-300 hover:text-[#F6EB2F]">
                <img
                  src={arrow}
                  alt=""
                  className="w-12 rotate-90 transition-transform duration-300 group-hover:translate-y-2"
                />
                WHAT IS ADIDAS?
              </button>

            </div>

          </div>

        </div>

        <div className="absolute top-20 left-[190px] z-20">

          <h2 className="leading-[0.85] uppercase font-black">
            <span className="block text-[96px] text-white">
              OUTFITS FOR
            </span>

            <span className="block text-[96px] text-[#F5EC31]">
              BENEFITS
            </span>
          </h2>

        </div>

      </div>
      <>
       <Products title={"Do you still like this products?"}/>
      </>
    </section>
  );
}