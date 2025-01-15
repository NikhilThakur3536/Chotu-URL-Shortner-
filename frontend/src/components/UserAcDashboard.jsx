import { DashboardNavBar } from "./DashboardNavBar";
import {LinksTable} from "./LinkTable";
import { NavBar } from "./NavBar";

export const UserAcDashboard=()=>{
    const tabs=["S_NO", "Url", "ShortUrl","Total Number Of Clicks"]
    return(
        <div className="flex flex-col items-center bg-gradient-to-r from-slate-900 to-slate-800 h-screen w-screen overflow-hidden">
            <div><NavBar/></div>
            <div className="w-[90%] h-[90%] ml-4"><LinksTable/></div>
        </div>
)}

