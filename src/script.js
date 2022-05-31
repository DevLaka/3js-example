import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector(".webgl");

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xf24c4c })
);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera.
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer.
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Clock.
const clock = new THREE.Clock();

// Animations.
const tick = () => {
  // Clock
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  mesh.rotation.y = elapsedTime;

  // Render.
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
