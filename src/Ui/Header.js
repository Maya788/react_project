import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,

} from "@material-tailwind/react";
import { NavLink } from "react-router";
import logo from './images/logo.jpeg'
import nflag from'./images/nflag.jpeg'
 
const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
   const [staffdetailsDropdownOpen, setStaffDetailsDropdownOpen]= useState(false);
   const [aboutusDropdownOpen, setaboutusDropdownOpen]=useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="flex gap-12 size-20xl sticky top-0 ml-96">
       <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Home" className="hover:text-light-blue-400  transition duration-300">Home</NavLink>
      </Typography>
         {/* Programs Dropdown */}
      <div
        className="relative group list-none"
        onMouseEnter={() => setProgramsDropdownOpen(true)}
        onMouseLeave={() => setProgramsDropdownOpen(false)}
      >
        <Typography
          as="li"
          variant="medium"
          className="p-1 font-bold text-xl text-white cursor-pointer group-hover:text-light-blue-400  transition duration-300"
        > Programs
        </Typography>
        {programsDropdownOpen && (
          <ul className="absolute left-0 top-full  hidden group-hover:block bg-white text-black shadow-lg rounded-md z-50 min-w-[250px]">
            <li className="px-4 py-2 hover:bg-blue-100">
              <NavLink to="/Programs/Animal">Diploma in Animal Science</NavLink>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
             <NavLink to="/Programs/Plant">Diploma in Plant Science</NavLink>
            </li>
             <li className="px-4 py-2 hover:bg-blue-100">
               <NavLink to="/Programs/Dit">Diploma in Information Technology</NavLink>
            </li>
            
          </ul>
        )}
      </div>
      
 {/* staffdetails Dropdown  */}
      <div 
        className="relative group list-none"
        onMouseEnter={() => setStaffDetailsDropdownOpen(true)}
        onMouseLeave={() => setStaffDetailsDropdownOpen(false)}
 >
   <Typography
      as="li"
      variant="medium"
      className="p-1 font-bold text-xl text-white cursor-pointer group-hover:text-light-blue-400  transition duration-300"
    > Staff Details
    </Typography>
    {staffdetailsDropdownOpen &&(
      <ul className="absolute left-0 top-full  hidden group-hover:block bg-white text-black shadow-lg rounded-md z-50 min-w-[200px]">
         <li className="px-4 py-2 hover:bg-blue-100">
          <NavLink to="/staffdetails/administrative"> Administrative</NavLink>
        </li>
        <li className="px-4 py-2 hover:bg-blue-100">
          <NavLink to="/staffdetails/instructor"> Instructor</NavLink>
        </li>
        </ul>
    )}
  </div>
   
     
      <Typography
        as="li"
        variant="medium"
       color="white"
         className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Admissionform"  className="hover:text-light-blue-400   transition duration-300">Admission Form</NavLink>
      </Typography>
       <Typography
        as="li"
        variant="medium"
       color="white"
         className="p-1 font-bold text-xl"
      >
      <NavLink to = "/Notice"  className="hover:text-light-blue-400  transition duration-300">Notice</NavLink>
      </Typography>
       <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Syllabus"  className="hover:text-light-blue-400 transition duration-300">Syllabus</NavLink>
      </Typography>
      {/* about us  */}
        <div 
        className="relative group list-none"
        onMouseEnter={() => setaboutusDropdownOpen(true)}
        onMouseLeave={() => setaboutusDropdownOpen(false)}
 >
   <Typography
      as="li"
      variant="medium"
      className="p-1 font-bold text-xl text-white cursor-pointer group-hover:text-light-blue-400  transition duration-300"
    > About us
    </Typography>
    {aboutusDropdownOpen &&(
      <ul className="absolute left-0 top-full  hidden group-hover:block bg-white text-black shadow-lg rounded-md z-50 min-w-[200px]">
         <li className="px-4 py-2 hover:bg-blue-100">
          <NavLink to="/aboutus/msg"> Principal Msg</NavLink>
        </li>
        <li className="px-4 py-2 hover:bg-blue-100">
          <NavLink to="/aboutus/aaa"> About</NavLink>
        </li>
        </ul>
    )}
  </div>
    </ul>
  );
 
  return (
    <div>
     
      <div className="flex ">
    <div>
       <img src = {logo} alt="" className="h-36 w-36 mt-7 ml-60"/>
    </div>
    <div className="text-center mt-4 ml-40 font-bold"> 
      <h1 className="  text-red-600 "> 'सिप हुन्छ हातमा, रोजगारि साथमा'</h1>
    <h2 className='  text-light-blue-400'>प्राविधिक शिक्षा तथा व्यवसायिक तालिम परिषद्</h2>
    <h1 className=" text-light-blue-400 text-4xl m-1" > रोल्पा बहुप्राविधिक शिक्षालय</h1>
    <h2 className=" text-light-blue-400">रोल्पा न.पा.१- मेवाङ्, रोल्पा</h2>
     </div>
     <div>
      <img src={nflag} alt="" className="h-36 w-36 ml-36 mt-6"/>
     </div>
     </div>
    <marquee
  behavior="scroll"
  direction="left"
  scrollamount="5"
  className="font-bold bg-red-50 text-black mt-4 py-1 "
>
  ROLPA POLYTECHNIC INSTITUTE ROLPA RURAL MUNICIPALITY-1
</marquee>  <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none bg-blue-900 mt-6 ">
        
          
        
            <div className="mr-4 hidden lg:block">{navList}</div>
           
          
       
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
          </div>
        </MobileNav>
      </Navbar>
    </div>
   </div>
  );
}
export default Header