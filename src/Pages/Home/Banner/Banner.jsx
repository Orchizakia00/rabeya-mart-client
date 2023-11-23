import { motion } from "framer-motion";


const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-70px)]" style={{ backgroundImage: 'url(https://i.ibb.co/8MNvXDh/banner.jpg)' }}>
            <div className="hero-overlay  bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <motion.h1
                        initial={{ x: -1500 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: "2",
                            delay: "1"
                        }}

                        className="mb-5 text-4xl font-bold">
                        Fresh Picks: Quality Groceries Delivered
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