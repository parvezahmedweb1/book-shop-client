import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      {/* hamburger menu start */}
      <div onClick={() => setIsOpen(!isOpen)} className="block lg:hidden">
        {isOpen ? (
          <XMarkIcon
            onClick={() => setSidebar(false)}
            className="text-white h-7 w-7 cursor-pointer lg:hidden"
          />
        ) : (
          <Bars3CenterLeftIcon
            onClick={() => setSidebar(true)}
            className="text-white h-7 w-7 cursor-pointer lg:hidden"
          />
        )}
      </div>
      {/* hamburger menu end */}
      {/* sidebar start */}
      <Sidebar sidebarState={sidebar} setSidebar={setSidebar} />
      {/* sidebar end */}
    </>
  );
};

export default NavMobile;
