
// import * as THREE from "three"
// 
import "../css/index.css"
import { mgr } from "./base";

let clickEvents = {};
let curTab = "";
function init() {
    let ulEle = document.createElement("ul");
    // const requireFiles = require.context('/src/', true, /(^basic-)*(\.js$)/)
    const requireFiles = require.context('/src/', true, /(basic-)+/)
    requireFiles.keys().forEach(fileName => {
        if (/.js$/.test(fileName)) {
            let file = requireFiles(fileName);
            // console.log(file);
            let liEle = document.createElement("li");
            liEle.innerText = file.name;
            // 收集
            clickEvents[file.name] = file.init;
            // 设置属性
            liEle.setAttribute("onclick", `handleClick('${file.name}')`)
            ulEle.appendChild(liEle);
        }
    });
    const canvas = document.querySelector("canvas");
    document.body.insertBefore(ulEle, canvas);
}

function handleClick(eve) {
    if (curTab == eve) {
        return;
    }
    curTab = eve;
    clickEvents[eve]();
    mgr.render();
}
// 抛出去
window.handleClick = handleClick;

init();