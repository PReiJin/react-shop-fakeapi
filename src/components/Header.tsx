import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import Sidebar from "./Sidebar";
import { BsBag } from "react-icons/bs";

export default function Header() {
  const { isClose, setIsOpen } = useContext(SidebarContext);
  return (
    <div>
      <header>Header</header>
      <div className='cursor-pointer' onClick={() => setIsOpen(!isClose)}>
        <BsBag className='text-2xl' />
      </div>
      <Sidebar />
    </div>
  );
}
