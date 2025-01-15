import BgAnalytics from '../assets/BgAnalytics.png';
import BgUrl from '../assets/BgUrl.png';
import { motion } from 'framer-motion';

export const LeftBgSection = () => {
    return (
        <div className='flex justify-center items-center content-center'>
            {/* Animated inner div */}
            <div className='absolute left-52 blur-xl h-96 w-96 rounded-full bg-[#f8fafc] opacity-20 z-0'/>
            <motion.div className='absolute left-0 pl-8 pb-4'
            initial={{ y: '0px' }}  // Start from 20% down
            animate={{ y: ['0px', '-30px', '0px'] }}  // Move up and then back down
            transition={{
                duration: 5,        // Duration for the animation
                ease: 'easeInOut',  // Easing function
                repeat: Infinity   // Loop the animation infinitely
            }}>
                <img src={BgAnalytics} />
            </motion.div>
            <motion.div className='absolute z-10 pl-8 pb-4 left-0'
            initial={{ y: '0px' }}  // Start from 20% down
            animate={{ y: ['0px', '-30px', '0px'] }}  // Move up and then back down
            transition={{
                duration: 5,        // Duration for the animation
                ease: 'easeInOut',  // Easing function
                repeat: Infinity   // Loop the animation infinitely
            }}>
                <img src={BgUrl} />
            </motion.div>
        </div>
    );
};
