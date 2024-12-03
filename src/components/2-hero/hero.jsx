import { useRef } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import devvAnimation from "../../../public/animation/devv.json";
import "./hero.css"
const Hero = () => {
    const lottieRef = useRef();
    return (
        <section className="hero flex">
            <div className="left-section ">
                <div className="parent-avatar flex">
                    <motion.img
                    initial={{transform:"scale(0)"}}
                    animate={{transform:"scale(1)"}}
                    transition={{damping:6, type:"spring", stiffness:100}}
                     src="pic1.png" className="avatar " alt="" />
                    <div className="icon-verified"></div>
                </div>


                <motion.h1

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}

                    className="title">
                    Software designer,founder,andamateur.
                </motion.h1>
                <p className="sub-title">
                    I'm ahmed mhadhbi, a software designer and entrepreneur based in New York City. I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
                </p>
                <div className="all-icons flex">
                    <div className="icon icon-twitter pos" ></div>
                    <div className="icon icon-instagram pos"></div>
                    <div className="icon icon-github pos"></div>
                    <div className="icon icon-linkedin pos"></div>
                </div>



            </div>



            <div className="right-section  animation ">
                <Lottie lottieRef={lottieRef}
                    className=""
                    onLoadedImages={() => {
                        lottieRef.current.setSpeed(1);
                    }}
                    animationData={devvAnimation}
                />

            </div>


        </section>
    )
};

export default Hero;