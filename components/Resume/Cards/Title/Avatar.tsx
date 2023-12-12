import Image from 'next/image';
import resume from "@/data/resume.json";
import { motion } from "framer-motion";

const className = "rounded-full border border-white-600 "+
                  "max-w-full max-h-full min-w-[80px] min-h-[80px]";

export default function Avatar(){
    return(
        <motion.div
            whileHover={{
                rotate: [0, 5, -5, 5, -5, 0],
                }}
            whileTap={{ }}
            >
            <Image src={resume.basics.picture}
                        alt={resume.basics.name}
                        width={110}
                        height={110}
                        priority={true}
                        className={className} />
        </motion.div>
    )
}