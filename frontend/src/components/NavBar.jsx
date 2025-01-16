import { NavBarTabs } from "./NavBarTabs";
import { ProfileIcon } from "./ProfileIcon";

export function NavBar(){
    return(
      <div className="flex w-screen h-16 ">
        <div className=" flex content-left w-[40%]">
            <h1 className="felx justify-center content-center text-white text-2xl font-medium pl-16 font-serif">CHOTU</h1>
        </div>
        <div className=" mr-16 flex w-[70%] justify-around ml-16 ">
        <div className="flex items-center"><NavBarTabs tittle="Home" textColor={"text-white"}/></div>
            <div className="flex items-center"><NavBarTabs tittle="QR Code Generator & URL Shortner" textColor={"text-white"}/></div>
            <div className="flex items-center"><NavBarTabs  tittle="About" textColor={"text-white"}/></div>
            <div className="flex items-center space-x-2">
             {/* <NavBarTabs  tittle="Account"/> */}
             <ProfileIcon/>
            </div>
        </div>
      </div>
)}