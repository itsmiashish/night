import './App.css';
import image from './photo/png.webp';
import photo from './photo/plash.jpg';
import logo from './photo/Vectr.png';
import jacket from './photo/new-removebg-preview.png';
import icon from './photo/cart-removebg-preview.png'
import ama from './photo/Amazon-removebg-preview.png'
import flip from './photo/flip-removebg-preview.png'
import h from './H';
function App() {
  return (
    <div className="main">
      
    {/* <div className="upper">
  <div ><img className="image_logo"  src={image } alt="h"/> <div className="text">HOME 
   DESIGEN </div>
   </div> 
    </div>
    <div className="lower">
    <div className="left"> <div className="inter"> INTERIOR <br /> <span>DESIGEN</span>
    </div>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, vitae. Eos sit velit magnam aperiam hic. Illo illum, veniam ullam libero nam laborum placeat quia id porro iure laudantium voluptate</p>  
    <div className="join">JOIN US TODAY </div> </div>
    <div className="right">
    <div className="nav">
     <div className="home">Home</div>
     <div className="home">Contact</div>
     <div className="home">Design</div>
     <div className="home">About</div>

    </div>
   <div ><img className="right-image" src= {photo} alt="" /> </div>
    <div> <div className="right_text"> HOME </div>
    <div className="color"></div>
    <div className=""><p id ="letter" >NEW ARRIVALS</p> </div>
    <div> <img className ="icon" src={logo} alt="" /> </div>

 </div>
 <div className="size"></div>
    </div>
  
    </div> */}
<div className="img"><img src={icon} alt="" height="90px" /> </div>
 <div className="head"> 
 
 <div className="home">Home</div>
 <div className="home">New</div>
 <div className="home">All</div>
 <div className="home">About</div>
  </div>


<div className="text-me"> Select This Item and <br /> Enjouy Your Life.    </div>
<div className="lwtex">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit.  <br /> tempore officiis voluptatem! Ipsam, ducimus, sit a nulla </div>
<div><button id='shop' > Shop</button></div> 
<div><button id='cart' >  Add to Cart </button></div>
 <div className='also'> Also  available </div>
<div className='ama' ><img  src={ama} height="100px"  alt="" /></div>
<div className='flip'><img  src={flip}  height="80px"  alt="" /></div>
<div className='wow'><img   src={jacket} alt="" /></div>



<div> hello ashish kuch aur change kr rhe hai dekkhlo  </div>








    </div> 
  );
}

export default App;
