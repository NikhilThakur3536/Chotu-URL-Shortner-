import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { NavBarTabs } from "./NavBarTabs";
import { DropDownMenu } from "./DropDownMenu";

export function ProfileIcon(){
    const [isVisilbe, setIsVisible]= useState(false);
    return(
        <div >
            <button onClick={()=>{setIsVisible((prev)=>!prev)}} className="relative flex items-center space-x-2">
                <NavBarTabs tittle="Account" textColor={"text-white"}/>
                <CgProfile size={30} color="white" className="transform -translate-y-1.5"/>
            </button>
        {isVisilbe&&(
            <DropDownMenu/>
        )}
        </div>
)}  