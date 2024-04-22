import React from 'react'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import simg1 from "../assets/simg1.png"
import simg2 from "../assets/simg2.png"
import simg3 from "../assets/simg3.png"
const Card=[
  
  {
img:`${img1}`,
img1:`${simg1}`,
para:"8 Days    ",
para1:" 1,556 Reviews",
title:"Switzerland",
para3:"Europe",
title1:"1,000 $    ",
title2:"1,200 $",
para2:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
button:"Book Now",
button1:"See More",

},
{
  img:`${img2}`,
  img1:`${simg2}`,
  para:"8 Days     ",
  para1:"1,556 Reviews",
  title:"Landy Space",
  para3:"Europe",
  title1:"1,000 $   ",
  title2:" 1,200 $",
  para2:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
  button:"Book Now",
  button1:"See More",
  
  },
  {
    img:`${img3}`,
    img1:`${simg3}`,
    para:"8 Days  ",
    para1:"1,556 Reviews",
    title:"Dream Hotel",
    icons:"",
    para3:"Europe",
    title1:"1,000 $    ",
    title2:"1,200 $",
    para2:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    button:"Book Now",
    button1:"See More",
    
    },


]
export const Cards = () => {
  return (
   <div className="cardcontainer mt-10">
<div className="left text-center space-y-4 w-full mb-16 ">
<h1 className='text-4xl font-bold'>Find Your Best Destenation</h1>
<p>Experience unparalleled luxury and impeccable service at our upcoming hotel destination, where indulgence and <br />relaxation seamlessly blend to create a truly memorable stay.</p>
</div>
   <div className="cards flex space-x-8 px-24">
   {
    Card.map((item,ind)=>(
      <div className="card1 relative" key={ind}>
      <div className='relative'>
      <img src={item.img} className='cardimg relative'/>
       <img className='w-28 absolute bottom-[-65px]  left-26   ' src={item.img1} alt="simg" />
      </div>
      <div className='flex space-x-6 text-gray-500 mt-8'>
      <p > <i class="fa-solid fa-bag-shopping"></i>  {item.para}  </p>
      <p> <i class="fa-regular fa-address-book"></i>{item.para1}</p>
      </div>
      <div className='flex space-x-24  '>
      <h1 className="cardtitle text-2xl font-bold ">{item.title} </h1>
     <div className="icons text-gray-500 pt-3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
      </div>


      <p className='carddesc text-gray-500'>{item.para3} <i class="fa-solid fa-location-dot"></i></p>


      <div className='flex space-x-4'>
      <h1 className='cardtitle1 font-semibold text-3xl text-orange-400'>{item.title1}</h1>
      <h1 className='cardtitle2 text-2xl font-semibold  text-gray-500'>{item.title2}</h1>
      </div>
      <p className=' font-semibold space-y-3'>{item.para2}</p>
      <div className='flex space-x-10 mt-10  '>
      <button className=' cardbtn px-8 py-3 border rounded-lg bg-gray-500 text-white  font-semibold '>{item.button}  </button>

      <button1 className='cardbtn1 px-4 py-3  text-gray-500'>{item.button1} <i className="activebtn fa-solid fa-greater-than"></i></button1>
      </div>
      </div>

    ))
    }
  
   
   </div>
   <div className="icons mt-16 space-x-24 flex justify-center ">
   <button className=' border w-8 h-8 text-orange-500 border-orange-500'>
   <i class="fa-solid fa-less-than  "></i>  
   </button>
   <button className='border w-8 h-8 bg-orange-500 text-white  '>
   <i class="fa-solid fa-greater-than"></i>  </button>
    </div>
   </div>
  )
}
 