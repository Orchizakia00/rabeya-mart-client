import { motion } from "framer-motion";
import banner from "../../../assets/banner/banner.png"

const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-70px)] w-full" style={{ backgroundImage: `url(${banner})` }}>
            {/* <div className="hero-overlay  bg-opacity-50"></div> */}
            <div className="-mr-[500px] text-right text-white">
                <div className="">
                    <motion.h1
                        initial={{ x: -1500 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: "2",
                            delay: "1"
                        }}

                        className="mb-5 text-4xl font-bold">
                        From Our Aisles to Your Door
                    </motion.h1>
                    <motion.p
                        initial={{ x: -1500 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: "2",
                            delay: "1"
                        }}
                        className="mb-5 text-lg">
                        Discover freshness at Fresh Picks Market – your destination <br /> for quality groceries, from farm to table!
                    </motion.p>
                    <motion.button
                        initial={{ y: 1500 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: "2",
                            delay: "1"
                        }}
                        className="btn btn-secondary text-white">Get Started</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner;