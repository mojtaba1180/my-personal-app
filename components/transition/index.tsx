import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
  children: any  
}
const Transition = ({children}:Props) => {
  const {asPath} = useRouter();
  const variants = {
     hidden: { opacity: 0, x: 0, y: -100,filter:"blur(30px)"  },
    enter: { opacity: 1, x: 0, y: 0, filter:"blur(0px)" },
    exit: { opacity: 0, x: 0, y: 100, filter:"blur(30px)" },
  }
  return (
    <AnimatePresence
	      initial={false}
	      exitBeforeEnter
	    >
        <motion.main
            key={asPath}
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
            style={{height:"100%", width:"100%"}}
        >

          {children}
        </motion.main>
    </AnimatePresence>
  )
}

export default Transition