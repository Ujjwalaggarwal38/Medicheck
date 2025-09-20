
'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toggleMessengerForm } from "@/Redux/modalSlice";


// Navbar 1
const Navbar1 = () => {
    const router = useRouter();
    const dispatch = useDispatch();
  
  
    const handleClick= ()=>{
        router.push("/aboutMedicheck");
    }
  
    const telphoneNumber = [
      {
        label: "+91-8010800100",
        href:"tel:+918010800100",
        target: true,
      },    
      { label: "+91-8010800200",href:"tel:+918010800200"},
    ];
  
    const navLink =
      "nav-link text-black no-underline font-medium py-2 px-3 block hover:text-sky-700";
  
    return (
      <div className="bg-white">
        <div className="max-w-[1280px] mx-auto flex justify-end">
          <ul
            className="flex list-none m-0 p-0 relative rounded-bl-[5rem] after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-full after:w-screen"
            style={{ backgroundColor: "#01BAA2" }}
          >
            <style jsx>{`
              ul::after {
                background-color: #01baa2;
              }
            `}</style>
  
            <li className="nav-item ml-4 ">
            <button className={`${navLink} cursor-pointer`} onClick={handleClick}>
              About Medicheck
            </button>
            </li>
  
           <li className="nav-item ml-4">
              <Link className={navLink} href="/#contact">
                Health Check-Ups
              </Link>
               
            </li>
  
            <li className="nav-item ml-4">
              <Link className={navLink} href="#" onClick={()=> dispatch(toggleMessengerForm(true))}>
                Contact Us
              </Link>
               
            </li>
  
            <li className="relative group ml-4">
              <a className={`${navLink} cursor-pointer`}>Telephone Number</a>
              <ul className="dropdown-menu absolute top-full  left-0 bg-white shadow-lg border border-gray-200  opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
                {telphoneNumber.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href || "#"}
                      target={item.target ? "_blank" : "_self"}
                      rel={item.target ? "noopener noreferrer" : ""}
                      className="drop-nav-link block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-sky-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  };


// Desktop Drop Down
const MenuDropdown = ({ title, items, href }) => {
  return (
    <li className="relative group font-poppins">
      <Link href={href || "#"} className="cursor-pointer px-4 py-2 text-base text-black hover:text-[#004282] transition-colors duration-300">
        {title}
      </Link>

      <ul className="absolute top-full left-0 mt-3 w-64 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-800 hover:bg-[#f0f8ff] transition-colors duration-300 border-b border-gray-100 last:border-none"
          >
            {item.icon && (
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="min-w-[20px]"
              />
            )}
            <Link
              href={item.href || "#"}
              className="font-medium hover:text-[#004282] transition-colors duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};


// Mobile View Menu Bar

const ResponsiveMenuDropdown = ({ menuData }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (label) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  return (
    <ul className="flex flex-col lg:flex-row gap-4 font-poppins">
      {menuData.map((menu) => (
        <li
          key={menu.label}
          className="relative group lg:static"
        >
         {menu.label === "Home" ? (
            <Link
              href="/"
              className="cursor-pointer px-4 py-2 text-base text-black hover:text-[#004282] transition-colors duration-300 flex justify-between items-center lg:block"
            >
              {menu.label}
            </Link>
          ) : (
            <div
              className="cursor-pointer px-4 py-2 text-base text-black hover:text-[#004282] transition-colors duration-300 flex justify-between items-center lg:block"
              onClick={() => toggleMenu(menu.label)}
            >
              {menu.label}
              <span className="lg:hidden ml-2">
                {activeMenu === menu.label ? "▲" : "▼"}
              </span>
            </div>
          )}
          {/* Dropdown Panel */}
          <ul
            className={`
              mt-2 bg-white border border-gray-200 rounded-xl shadow-lg w-full max-h-[300px] overflow-y-auto scrollbar-hide z-50
              transition-all duration-300 ease-in-out
              ${activeMenu === menu.label ? "block" : "hidden"} 
              lg:absolute lg:w-64 lg:top-full lg:left-0 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
            `}
          >
            {menu.items.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 px-2 py-3 text-sm text-gray-800 hover:bg-[#f0f8ff] hover:text-[#004282] transition-colors duration-300 border-b border-gray-100 last:border-none"
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="min-w-[20px]"
                  />
                )}
                <Link href={item.href || "#"} className="font-medium w-full">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export { MenuDropdown, ResponsiveMenuDropdown, Navbar1 };
