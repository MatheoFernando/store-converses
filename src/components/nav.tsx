import { NavLinks } from "../constants";
import { Menu } from 'lucide-react';
export  function NavBar() {
  return (
   <nav className="flex items-center  justify-between mb-20 ">
 <img src="./images/header-logo.svg" alt="logo"  className="w-52 h-16"/>
 <ul className="hidden md:flex  md:gap-24 lg:gap-28">
        {NavLinks.map((item) => (
              <li key={item.id}>
                <a href={item.path} className="hover:text-btn hover:font-semibold transition duration-150 ease-out ">{item.label_Ref}</a>
              </li>
        ))}      
 </ul>
<div  className="md:hidden block ">
<Menu />
</div>

   </nav>
  )
}
