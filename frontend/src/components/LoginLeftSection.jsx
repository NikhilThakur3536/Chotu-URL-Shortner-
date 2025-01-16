import { FeatureBoardListCOmponent } from "./FeatureBoardListComponent";

export const LoginLeftSection = () =>{
    const featureList=["Url Shortner", "Url Analytics"," Qr Code Generator" ];
    const comingFeatureList=["Custom Domain To Shorten Url"]
    return (
        <div className='absolute flex flex-col z-10 ml-32 mt-28'>
            <h1 className='font-poppins text-4xl font-bold text-black'>What We Offer</h1>
            {featureList.map((feature,index)=>(<FeatureBoardListCOmponent key={index} text={feature}/>))}
            <h1 className='font-poppins text-4xl font-bold text-rose-400 mt-4'>Features Coming Soon</h1>
            {comingFeatureList.map((feature,index)=>(<FeatureBoardListCOmponent key={index} text={feature}/>))}
        </div>
    )
}