
// import * as THREE from "three"
// 
import "../css/index.css"
import { mgr } from "./base";

import { init as initBox } from "./basic-box/basic-box";
import { init as initText } from "./basic-text/basic-text";

function start() {

    // initBox();
    initText();

    mgr.render();
}

start();