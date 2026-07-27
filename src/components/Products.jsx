import sneaker from '../assets/images/Sneaker.png';
import like from '../assets/images/Like.png';

const products = [
  {
    id: 1,
    name: "Sneaker X", 
    style: "Sneaker Style", 
    price: "U$170.00"
  },
  {
    id: 2, 
    name: "Sneaker X",
    style: "Sneaker Style", 
    price: "U$170.00"
  },
  {
    id: 3, 
    name: "Sneaker X", 
    style: "Sneaker Style", 
    price: "U$170.00"
  },
  { id: 4, 
    name: "Sneaker X", 
    style: "Sneaker Style", 
    price: "U$170.00"
   },
  { id: 5, 
    name: "Sneaker X", 
    style: "Sneaker Style", 
    price: "U$170.00"
   },
    { id: 6, 
    name: "Sneaker X", 
    style: "Sneaker Style", 
    price: "U$170.00"
   }
];

export default function AdiWeek({ title }) {
  return (
    <section className="px-6 md:px-12 py-8 bg-white">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100">
            &#8249;
          </button>
          <button className="w-8 h-8 border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100">
            &#8250;
          </button>
        </div>
      </div>

      <div className="flex gap-7 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((product) => (
          <div key={product.id} className="min-w-[220px] flex-shrink-0">
            <div className="relative bg-[#f0f0eb] p-4 flex flex-col items-center">
              <button className="absolute top-3 right-3">
                <img src={like} alt="like" className="w-5 h-5" />
              </button>
              <img
                src={sneaker}
                alt={product.name}
                className="w-56 h-38 object-contain"
              />
              <div className="w-full mt-3">
                <p className="text-sm font-semibold text-black">{product.price}</p>
                <p className="text-xs text-gray-500">free shipping</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm font-bold text-black">{product.name}</p>
              <p className="text-xs text-gray-500">{product.style}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
