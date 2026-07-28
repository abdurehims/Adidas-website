import ball from '../assets/images/ball.png';
import redShoes from '../assets/images/redShoes.png';
import shoes2 from '../assets/images/shoes2.png';
import shoes3 from '../assets/images/shoes3.png';

function Gallery(){
  return(
    <section>
      <div className='mt-18'>
        <h3 className='pl-10 font-bold text-3xl pb-5'>MOST INTERESTING</h3>
        <div className='flex gap-10 pl-10 pr-10 h-full'>
          <img src={ball} className="flex-1" />
          <img src={redShoes} className="flex-1" />
          <img src={shoes2} className="flex-1" />
          <img src={shoes3} className="flex-1" />
        </div>
      </div>
    </section>

  );
}

export default Gallery;