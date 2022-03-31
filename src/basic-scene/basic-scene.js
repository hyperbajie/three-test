import * as THREE from "three";
import { mgr } from "../base";

export const name = "scene";

export function init() {
    const objects = [];
    const radius = 1;
    const widthSegments = 6;
    const heightSegments = 6;
    const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    {
        const sunMaterial = new THREE.MeshPhongMaterial({
            emissive: 0xffff08
        });
        const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
        sunMesh.scale.set(5, 5, 5);
        mgr.addChild(sunMesh);
        objects.push(sunMesh);
    }

    {
        const color = 0xffffff;
        const intensity = 3;
        const light = new THREE.PointLight(color, intensity);
        mgr.addChild(light);
    }

    mgr.camera.position.set(0, 50, 0);
    mgr.camera.up.set(0, 0, 1);
    mgr.camera.lookAt(0, 0, 0);

    {
        const earthMaterial = new THREE.MeshPhongMaterial({
            color: 0x2233ff,
            emissive: 0x112244,
          });
        const earthMesh = new THREE.Mesh(sphereGeometry,earthMaterial);
        earthMesh.position.x = 10;
        mgr.addChild(earthMesh);
        objects.push(earthMesh);
    }

    mgr.addAnimationFrameCb(() => {
        objects.forEach(item => {
            item.rotation.y += 0.01;
        });
    });
}