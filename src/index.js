
import * as THREE from "three"

window.onload = function () {
    start();
}

function start() {
    const canvas = document.querySelector("canvas");
    const renderer = new THREE.WebGLRenderer({
        canvas
    });
}