import * as THREE from "three";
import { mgr } from "@/base";

export const name = "material";

export function init() {
    mgr.camera.position.set(0, 25, 0);
    mgr.camera.up.set(0, 0, 1);
    mgr.camera.lookAt(0, 0, 0);

    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.PointLight(color, intensity);
    light.position.set(0, 50,0);
    mgr.addChild(light);

    const objArr = [];

    // const geo = new THREE.BoxGeometry(3, 3, 3);
    const geo = new THREE.SphereGeometry(5,32,32);

    const material1 = new THREE.MeshBasicMaterial({
        color: "pink"
    })
    const mesh1 = new THREE.Mesh(geo, material1);
    objArr.push(mesh1);
    mgr.addChild(mesh1);

    const material2 = new THREE.MeshLambertMaterial({
        color: "pink"
    })
    const mesh2 = new THREE.Mesh(geo, material2);
    mesh2.position.x = 10;
    objArr.push(mesh2);
    mgr.addChild(mesh2);

    const material3 = new THREE.MeshPhongMaterial({
        color: "pink",
        shininess: 0
    });
    const mesh3 = new THREE.Mesh(geo, material3);
    mesh3.position.x = -10;
    objArr.push(mesh3);
    mgr.addChild(mesh3);

    const material4 = new THREE.MeshToonMaterial({
        color: "pink"
    });
    const mesh4 = new THREE.Mesh(geo, material4);
    mesh4.position.z = 10;
    objArr.push(mesh4);
    mgr.addChild(mesh4);

    

    

    mgr.addAnimationFrameCb(()=>{
        objArr.forEach(item=>{
            item.rotation.y += 0.01;
        });
    })
}