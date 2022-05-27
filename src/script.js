import "./style.css";
import * as THREE from "three";

// Task: Add a red cube.

// Step 01 - Add the scene.
const scene = new THREE.Scene();

// Step 02 - Add Geometry.
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Step 03 - Add Meterial.
const material = new THREE.MeshBasicMaterial({ color: 0xf24c4c });

// Step 04 - Add Mesh.
const mesh = new THREE.Mesh(geometry, material);

// Step 05 - Add mesh to the scene.
scene.add(mesh);

// Step 06 - Define sizes.
const sizes = {
  width: 800,
  height: 600,
};

// Step 07 - Add Camera.
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// Step 08 - Move the camera back.
camera.position.z = 3;
scene.add(camera);

// Step 09 - Add renderer.
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
