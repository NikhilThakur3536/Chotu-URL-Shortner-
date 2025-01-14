import {NavBar}  from "./NavBar";
import { MainSection } from "./MainSection";
 export function Home(){
return(
    <div>
        <div className='h-screen w-screen bg-gradient-to-r from-[#0f172a]  to-[#334155] overflow-hidden flex flex-col gap-36'>
            <div><NavBar/></div>
            <div><MainSection/></div>
        </div>
    </div>
)}