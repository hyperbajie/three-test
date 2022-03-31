import * as THREE from "three";
import { mgr } from "../base";

export const name = "scene";

export function init() {
    const objects = [];
    const radius = 1;
    const widthSegments = 6;
    const heightSegments = 6;
    const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    const color = 0xffffff;
    const intensity = 3;
    const light = new THREE.PointLight(color, intensity);
    mgr.addChild(light);

    mgr.camera.position.set(0, 50, 0);
    mgr.camera.up.set(0, 0, 1);
    mgr.camera.lookAt(0, 0, 0);

    const solarSystem = new THREE.Object3D();
    mgr.addChild(solarSystem);
    objects.push(solarSystem);

    const sunMaterial = new THREE.MeshPhongMaterial({
        emissive: 0xffff08
    });
    const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
    sunMesh.scale.set(5, 5, 5);
    solarSystem.add(sunMesh);
    objects.push(sunMesh);

    const earthSystem = new THREE.Object3D();
    solarSystem.add(earthSystem);
    earthSystem.position.x = 10;
    objects.push(earthSystem);

    const earthMaterial = new THREE.MeshPhongMaterial({
        color: 0x2233ff,
        emissive: 0x112244,
    });
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    earthSystem.add(earthMesh);
    objects.push(earthMesh);

    const moonOrbit = new THREE.Object3D();
    moonOrbit.position.x = 2;
    earthSystem.add(moonOrbit);

    const moonMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, emissive: 0x222222 });
    const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
    moonMesh.scale.set(0.5,0.5,0.5);
    moonOrbit.add(moonMesh);
    objects.push(moonMesh);

    mgr.addAnimationFrameCb(() => {
        objects.forEach(item => {
            item.rotation.y += 0.01;
        });
    });
}