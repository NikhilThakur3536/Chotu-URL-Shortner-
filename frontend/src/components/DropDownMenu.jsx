import {motion} from "framer-motion";
import { CiLogin } from "react-icons/ci";
import { IoLinkSharp } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";

export function DropDownMenu(){ 
    return(
        <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                className="absolute border rounded-md overflow-hidden w-32 text-white pl-1  transform -translate-y-3.5 -translate-x-4">
                   <ul className="space-y-2 p-2">
                        <li className="flex items-center space-x-2" >
                            <MdOutlineDashboardCustomize size={16} color="white"/>
                            <Link to="/account">
                               <span>DashBoard</span>
                            </Link>
                        </li>
                        <li className="flex items-center space-x-2">
                            <IoLinkSharp size={16} color="white" />
                            <Link to="/login">
                               <span>LogIn</span>
                            </Link> 
                        </li>
                        <li className="flex items-center space-x-2">
                            <CiLogin size={16} color="white"/>
                            <span>LogOut</span>
                        </li>                     
                    </ul>
            </motion.div>
)}