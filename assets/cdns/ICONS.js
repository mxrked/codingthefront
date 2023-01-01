/**
 *
 *  This will hold all the icon urls from the cdn
 *
 */

import ReturnCDNItem from "../functions/data/returns/ReturnCDNItem";

const BITMOJI = ReturnCDNItem("imgs", "global", "bitmoji", "png");
const ATI = ReturnCDNItem("icons", "tab-icons", "apple-touch-icon", "png");
const FAVICON = ReturnCDNItem("icons", "tab-icons", "favicon", "ico");
const F32 = ReturnCDNItem("icons", "tab-icons", "favicon-32x32", "png");
const F16 = ReturnCDNItem("icons", "tab-icons", "favicon-16x16", "png");

export { BITMOJI, ATI, FAVICON, F16, F32 };
