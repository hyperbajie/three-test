
import * as THREE from "three"

window.onload = function () {
    start();
}

let cube, renderer, scene, camera;

function start() {
    const canvas = document.querySelector("canvas");
    renderer = new THREE.WebGLRenderer({
        canvas
    });
    scene = new THREE.Scene();

    {
        const fov = 75;
        const aspect = 1;
        const near = 0.1;
        const far = 5;
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);;
        camera.position.z = 2;
    }

    {
        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;

        const boxG = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const material = new THREE.MeshPhongMaterial({
            color: 0x44aa88
        });
        cube = new THREE.Mesh(boxG, material);
        scene.add(cube);
    }

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    var axesHelper = new THREE.AxesHelper(20);
    scene.add(axesHelper);

    renderer.render(scene, camera);
    render();
}

function render() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
