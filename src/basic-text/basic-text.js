import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { mgr } from "../base";
import * as THREE from "three";
export const name = "text";
export function init() {
    const loader = new FontLoader();
    loader.load("gentilis_bold.typeface.json", (font) => {
        const geometry = new TextGeometry('three.js', {
            font: font,
            size: 3.0,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.15,
            bevelSize: .3,
            bevelSegments: 5,
        });
        const mesh = new THREE.Mesh(geometry, mgr.createMaterial({
            side: THREE.DoubleSide
        }))
        geometry.computeBoundingBox();
        geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);
        mgr.addChild(mesh);

        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        mgr.addChild(light);
    })
}