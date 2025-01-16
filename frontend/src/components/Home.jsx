import {NavBar}  from "./NavBar";
import { MainSection } from "./MainSection";
 export function Home(){
return(
    <div>
        <div className='h-screen w-screen bg-[#020617] overflow-hidden flex flex-col gap-36'>
            <div><NavBar/></div>
            <div><MainSection/></div>
        </div>
    </div>
)}