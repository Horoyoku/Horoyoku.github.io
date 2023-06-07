import React from "react";
import Introduction from "../components/Introduction";
import ScrollTop from "../components/ScrollTop";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <Introduction />
    </motion.div>
  );
};

export default Home;
