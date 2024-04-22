import logo from '../assets/images/logoimg.png'

export const Navbar = () => {
  return (
    <div className="navcontainer flex justify-between px-20 bg-gray-300 align-middle h-20  ">
    <div className="logo">
    <img className='w-36 mt-5' src={logo} alt="" />
    </div>

    <div className="list space-x-10 mt-6">
    <a  className='text-2xl  font-semibold text-purple-700' href="/home">Home</a>
    <a className='text-2xl font-semibold' href="/en">EN</a>
    <a className='text-2xl font-semibold' href="/hotels">Hotels</a>
    <a className='text-2xl font-semibold' href="/deals">Deals</a>
    <a  className='text-2xl font-semibold' href="/features">Features</a>
    <a className='text-2xl font-semibold' href="/contact us">Contact Us</a>
    <a className='px-12 py-4 bg-purple-700 text-1xl font-semibold text-white rounded-xl' href="/login">Login</a>
    </div>
    </div>
  )
}
