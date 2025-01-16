import { FeatureBoardListComponent } from "./FeatureBoardListComponent";
import { AiOutlineLink } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { MdQrCode } from "react-icons/md";
import { BiWrench } from "react-icons/bi";

export const LoginLeftSection = () => {
    const featureList = [
        { text: "Url Shortner", icon: AiOutlineLink },
        { text: "Url Analytics", icon: FaChartLine },
        { text: "Qr Code Generator", icon: MdQrCode },
    ];

    const comingFeatureList = [
        { text: "Custom Domain To Shorten Url", icon: BiWrench },
    ];

    return (
        <div className="absolute flex flex-col z-10 ml-32 mt-28">
            <h1 className="font-poppins text-4xl font-bold text-rose-500">What We Offer</h1>
            {featureList.map((feature, index) => (
                <FeatureBoardListComponent
                    key={index}
                    text={feature.text}
                    Icon={feature.icon}
                />
            ))}
            <h1 className="font-poppins text-4xl font-bold text-rose-500 mt-4">
                Features Coming Soon
            </h1>
            {comingFeatureList.map((feature, index) => (
                <FeatureBoardListComponent
                    key={index}
                    text={feature.text}
                    Icon={feature.icon}
                />
            ))}
        </div>
    );
};
