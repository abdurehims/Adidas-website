import logo from '../assets/images/vector.png';

function Footer() {
  return (
    <section className="mt-20 bg-[#1d1d1d] text-white py-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 flex justify-center gap-12 md:gap-20 text-center items-start">
        
       
        <div className="flex flex-col gap-3">
          <h2 className="font-extrabold text-2xl mb-2 tracking-wide">INFO</h2>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms and Conditions</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookies</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Politics</a>
        </div>


        <div className="flex flex-col gap-3">
          <h2 className="font-extrabold text-2xl mb-2 tracking-wide">COLLECTIONS</h2>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Ultraboost</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Confirmed</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">NMD</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Originals</a>
        </div>

       
        <div className="flex flex-col items-center gap-3 -mt-14">
          <img src={logo} alt="Adidas Logo" className="w-16 h-auto mb-2" />
          <h2 className="font-extrabold text-2xl mb-2 tracking-wide">SPORTS</h2>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Football</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Basketball</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Running</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Training</a>
        </div>

        
        <div className="flex flex-col gap-3">
          <h2 className="font-extrabold text-2xl mb-2 tracking-wide">SUPPORT</h2>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Customer</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">F.A.Q.</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Shipping</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">adiClub</a>
        </div>

      
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-extrabold text-2xl mb-2 tracking-wide">FOLLOW US</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-3xl mt-1">
            <a href="#" className="text-white hover:text-gray-400 transition-colors"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors"><i className="fa-brands fa-youtube"></i></a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center gap-6 mt-16 text-4xl text-white">
        <i className="fa-brands fa-cc-amex"></i>
        <i className="fa-brands fa-cc-mastercard"></i>
        <i className="fa-brands fa-cc-visa"></i>
      </div>
    </section>
  );
}

export default Footer;