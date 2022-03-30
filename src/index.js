
import * as THREE from "three"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import "../css/index.css"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

let cube, renderer, scene, camera;

function start() {
    const canvas = document.querySelector("canvas");
    renderer = new THREE.WebGLRenderer({
        canvas
    });
    scene = new THREE.Scene();

    {
        const fov = 75;
        const aspect = 2;
        const near = 0.1;
        const far = 1000;
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);;
        camera.position.z = 10;
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

    {
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
            const mesh = new THREE.Mesh(geometry, createMaterial())
            geometry.computeBoundingBox();
            geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);
            scene.add(mesh)
        })

    }

    var axesHelper = new THREE.AxesHelper(20);
    scene.add(axesHelper);

    renderer.render(scene, camera);
    render();
}
function createMaterial() {
    const material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
    });

    const hue = Math.random();
    const saturation = 1;
    const luminance = .5;
    material.color.setHSL(hue, saturation, luminance);

    return material;
}

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }

    return needResize;
}

function render() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

start();