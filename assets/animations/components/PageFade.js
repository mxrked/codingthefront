/**
 *
 *  This is the Page Fade
 *
 */

import { motion } from "framer-motion";

import { PAGE_FADE } from "../objects/FADES";

export const PageFade = ({ children }) => {
  return <motion.div {...PAGE_FADE}>{children}</motion.div>;
};
