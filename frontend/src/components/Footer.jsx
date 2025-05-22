import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-300">
            Inspired by genius, crafted for elegance. At Davinci, we blend innovation with timeless style to bring you collections that redefine everyday living. Discover products that speak of art, precision, and bold individuality — because you deserve nothing less than a masterpiece.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5"> COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 8072058274</li>
            <li>davinciapparelz@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ store-davinci.vercel.app - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
