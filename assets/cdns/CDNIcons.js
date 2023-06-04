/**
 *
 *  This holds the urls/srcs for the icons
 *
 */

import { CDNIconReturn } from "./CDNReturns";

const FAVICON = CDNIconReturn("tab-icons", "favicon", "ico");
const FAVICON_32 = CDNIconReturn("tab-icons", "favicon-32x32", "png");
const FAVICON_16 = CDNIconReturn("tab-icons", "favicon-16x16", "png");
const ATI = CDNIconReturn("tab-icons", "apple-touch-icon", "png");

const PYQT = CDNIconReturn("programming-languages", "pyqt", "webp");
const PYTHON = CDNIconReturn("programming-languages", "python", "webp");
const SQL = CDNIconReturn("programming-languages", "sql", "webp");
const SASS = CDNIconReturn("programming-languages", "sass", "webp");
const NEXTJS = CDNIconReturn("programming-languages", "nextjs", "webp");
const REACT = CDNIconReturn("programming-languages", "react", "webp");

export { FAVICON, FAVICON_16, FAVICON_32, ATI };
export { PYQT, PYTHON, SQL, SASS, NEXTJS, REACT };
