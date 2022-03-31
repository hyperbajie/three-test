import * as THREE from "three"
import config from "./config.json";

class Mgr {
    constructor() {
        const canvas = document.querySelector("canvas");
        // 渲染器
        this.renderer = new THREE.WebGLRenderer({
            canvas
        });
        // 场景
        this.scene = new THREE.Scene();
        // 摄像机
        this.camera = new THREE.PerspectiveCamera(
            config.camera.fov, config.camera.aspect, config.camera.near, config.camera.far
        );
        this.camera.position.z = 10;

        // 辅助线
        if (config.axesShow) {
            let axesHelper = new THREE.AxesHelper(20);
            this.scene.add(axesHelper);
        }
        this.animationFrameCb = [];
    }

    // 获取一个材质
    createMaterial(config) {
        const material = new THREE.MeshPhongMaterial(config);

        const hue = Math.random();
        const saturation = 1;
        const luminance = .5;
        material.color.setHSL(hue, saturation, luminance);

        return material;
    }

    addChild(m) {
        this.scene.add(m);
    }

    addAnimationFrameCb(cb) {
        this.animationFrameCb.push(cb);
    }

    render() {
        requestAnimationFrame(() => {
            this.render();
        });
        this.animationFrameCb.forEach(cb => {
            cb();
        });
        if (this.resizeRendererToDisplaySize()) {
            const canvas = this.renderer.domElement;
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix();
        }
        this.renderer.render(this.scene, this.camera);
    }

    resizeRendererToDisplaySize() {
        const canvas = this.renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            this.renderer.setSize(width, height, false);
        }

        return needResize;
    }
}

export const mgr = new Mgr();