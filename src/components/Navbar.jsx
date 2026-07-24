import Logo from "../assets/images/adidasLogo.jpg";
import search from "../assets/images/searchh.png";
import user from "../assets/images/user.png";
import favorite from "../assets/images/favorite.jpg";
import cart from "../assets/images/cart.jpg";
// import menu from "../assets/images/menu.png"; // Hamburger icon

export default function Navbar() {
  return (
    <>
      {/* Top Black Bar */}
      {/* <div className="w-full h-8 bg-black"></div> */}

      <nav className="w-full bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto h-20 px-8 flex items-center justify-between">

          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-14 cursor-pointer"
            />
          </div>

          <ul className="hidden lg:flex items-center gap-10 text-[15px] font-semibold uppercase tracking-wide">
            <li className="cursor-pointer hover:text-gray-500 transition duration-300">
              WOMAN
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition duration-300">
              MEN
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition duration-300">
              KIDS
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition duration-300">
              NEWS
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition duration-300">
              SPORTS
            </li>

            <li className="cursor-pointer hover:text-gray-500 transition duration-300">
              ADIDAS WORLD
            </li>
          </ul>

         
          <div className="flex items-center gap-6">


            <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-sm">
              <input
                type="text"
                placeholder="Forum Mid Parley"
                className="bg-transparent outline-none text-sm w-40"
              />

              <img
                src={search}
                alt="Search"
                className="w-8 ml-2 cursor-pointer"
              />
            </div>

            <img
              src={user}
              alt="User"
              className="w-10 cursor-pointer hover:scale-110 duration-300"
            />

            <img
              src={favorite}
              alt="Favorite"
              className="w-6 cursor-pointer hover:scale-110 duration-300"
            />

            <img
              src={cart}
              alt="Cart"
              className="w-6 mr-10 cursor-pointer hover:scale-110 duration-300"
            />

          </div>

        </div>
      </nav>
    </>
  );
}