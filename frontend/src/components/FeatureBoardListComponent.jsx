import { BiChevronRight } from  "react-icons/bi";

export const FeatureBoardListComponent = ({ text, Icon }) => {
    return (
        <div className="flex items-center space-x-2">
            <BiChevronRight size={20} className="transform translate-y-1/2" />
            <span className="flex items-center">
                <h3 className="font-poppins text-lg text-black mt-2">{text}</h3>
                {Icon && <Icon size={20} color={"black"} className="ml-2 text-gray-500 transform translate-y-1" />}
            </span>
        </div>
    );
};
