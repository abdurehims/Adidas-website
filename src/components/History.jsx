import sitPerson from '../assets/images/sitPerson.png';

const History = () => {
  return (
    <section className="relative w-full overflow-hidden bg-orange-500">

    
      <h1 className="relative z-0 text-center text-white font-black uppercase leading-none tracking-tight text-[clamp(3rem,9vw,7rem)] px-2 pt-10 pb-0">
        HISTORY AND GRACE
      </h1>

  
      <div className="relative w-full h-[500px]">

        <img
          src={sitPerson}
          alt="Adidas Person"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[460px] object-contain object-bottom z-20"
        />

        
        <div className="absolute inset-0 z-30 flex px-6 pt-5 pl-15">

         
          <div className="w-[49%] flex flex-col justify-between">
            <p className="text-white text-[22px] leading-[1.6] pr-2">
              At adidas, we believe that sports have the power to transform lives.
              It's not just about keeping your body and mind fit; it's about
              bringing people together and creating a community of individuals who
              share the same passion for excellence.
            </p>
            <p className="text-white text-[25px] leading-[1.6] pr-2 pb-20 pt-7">
              We draw inspiration from the athletes who push themselves to their
              limits every day, and from the technology we develop to help them
              achieve their goals.
            </p>
          </div>

          
          <div className="w-[44%] flex items-end justify-center pb-3">
            <p className="text-white text-[17px] font-bold text-center leading-snug">
              To improve performances. Improve lives<br />
              and change the world.
            </p>
          </div>

        
          <div className="w-[49%] flex flex-col justify-between pr-10">
            <p className="text-white text-[25px] leading-[1.6] text-center pl-2 pb-20">
              Whether you're a runner, a basketball player,
              a soccer player, or someone who loves to
              train, you'll find a home with us. Our
              products are designed to meet your needs,
              no matter what your preferred form of
              exercise may be.
            </p>
            <p className="text-white text-[22px] leading-[1.6] text-center pl-2 pb-40">
              We're not just present on the playing field,
              either. You'll find the three stripes at music
              festivals, on stages, and in the city streets.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default History;
