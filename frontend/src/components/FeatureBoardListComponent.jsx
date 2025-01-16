import { BiChevronRight } from "react-icons/bi";

export const FeatureBoardListCOmponent = ({text}) => {
    return (
        <div className="flex">
            < BiChevronRight size={20} className="transform translate-y-1/2"/>
            <span>
                <h3 className='font-poppins text-lg text-black mt-2'> {text}</h3>
            </span>
        </div>
    )
}