import {motion} from 'framer-motion';

export function ResultSection({ shortenedUrl, qrCode }) {
    return (
      <div className="flex  w-full h-72 pl-80 text-white mt-4">
        <motion.div key={shortenedUrl} className='flex flex-col mt-4 ml-36 w-[30%]   '
        initial={{
          scale:0,
          opacity:0
        }}
        animate={{
          scale:1,
          opacity:1
          
        }}
        transition={{
          duration:1
          
        }}>
          <p className='font-poppins text-xl text-blue-300 pl-12 font-bold'>
            Shortened URL
          </p>
            <p className='font-md font-poppins text-orange-200'>
              <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                {shortenedUrl}
              </a>
            </p>
          
        </motion.div>
        <div className='w-[50%]'>
          {qrCode && (
            <motion.div key={qrCode} className="mt-4"
            initial={{
              scale:0,
              rotate:180,
              opacity:0
            }}
            animate={{
              scale:1,
              rotate:0,
              opacity:1
            }}
            transition={{
              duration:3,
              type:"spring"
            }}>
              <p className='text-blue-300 text-xl font-poppins font-bold '>Scan QR Code</p>
              <img src={qrCode} alt="QR Code" className="mt-2 w-32 h-32 pl-3" />
            </motion.div>
          )}
        </div>
      </div>
    );
  }
  