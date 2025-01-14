import { DashboardNavBar } from "./DashboardNavBar";
import {LinksTable} from "./LinkTable";
import { NavBar } from "./NavBar";

export const UserAcDashboard=()=>{
    const tabs=["S_NO", "Url", "ShortUrl","Total Number Of Clicks"]
    return(
        <div className="flex flex-col bg-gradient-to-r from-slate-900 to-slate-800 h-screen w-screen overflow-hidden">
            <div><NavBar/></div>
            <div className=" flex flex-col h-[90%] w-[90%] ml-20 mt-2 mb-2 border border-white-200  rounded-xl overflow-hidden">
                <DashboardNavBar tabs={tabs}/>
            </div>
            <LinksTable/>
        </div>
)}

