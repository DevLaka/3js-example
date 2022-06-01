import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Canvas
const canvas = document.querySelector(".webgl");

// Scene
const scene = new THREE.Scene();

// Object
// const mesh = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1, 2, 2, 2),
//   new THREE.MeshBasicMaterial({ color: 0xf24c4c, wireframe: true })
// );
// scene.add(mesh);

const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 2, 2, 2);
// const vertex1 = new THREE.Vector3(0, 0, 0);
// geometry.vertices.push(vertex1);

// const vertex2 = new THREE.Vector3(0, 1, 0);
// geometry.vertices.push(vertex2);

// const vertex3 = new THREE.Vector3(1, 0, 0);
// geometry.vertices.push(vertex3);

// const face = new THREE.Face3(0, 1, 2);
// geometry.faces.push(face);

// for (let i = 0; i < 50; i++) {
//   for (let j = 0; j < 3; j++) {
//     geometry.vertices.push(
//       new THREE.Vector3(
//         (Math.random() - 0.5) * 4,
//         (Math.random() - 0.5) * 4,
//         (Math.random() - 0.5) * 4
//       )
//     );
//   }
//   const verticesIndex = i * 3;
//   geometry.faces.push(
//     new THREE.Face3(verticesIndex, verticesIndex + 1, verticesIndex + 2)
//   );
// }

const material = new THREE.MeshBasicMaterial({
  color: 0xf24c4c,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullScreenElement;
  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullScreen) {
      canvas.webkitRequestFullScreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullScreen) {
      document.webkitExitFullScreen();
    }
  }
});

// Perspective camera.
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer.
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Clock.
const clock = new THREE.Clock();

// Animations.
const tick = () => {
  // Update controls
  controls.update();

  // Render.
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
