import { mgr } from "../base";
import * as THREE from "three";
export const name = "box";
export function init() {
    console.log("now start init box");
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const boxG = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshPhongMaterial({
        color: 0x44aa88
    });
    const cube = new THREE.Mesh(boxG, material);
    mgr.addChild(cube);

    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    mgr.addChild(light);

    mgr.addAnimationFrameCb(() => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });
}

