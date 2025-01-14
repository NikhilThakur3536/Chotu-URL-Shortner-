import { NavBarTabs } from "./NavBarTabs";

export const DashboardNavBar = ({ tabs }) => {
    return (
        <div className="flex bg-gradient-to-b from-slate-800 to-gray-800 justify-around h-16 w-full border border-gray-300 rounded-t-lg hover:shadow-md hover:shadow-[#d1fae5]">
            {tabs.map((tab, index) => (
                <div className=" w-auto" key={index}>
                    <NavBarTabs  tittle={tab} textColor={"text-white"}/>
                </div>
            ))}
        </div>
    );
};
