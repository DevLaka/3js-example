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
// const mesh = new THREE.Mesh(geometry, material);

// Step 10 - All objects inhertis from Object3D contains
// postion, scale, properties.
// Moving a Mesh using position.
// mesh.position.y = 1;
// mesh.position.x = 1;
// mesh.position.z = -0.7;

// Step 14 - Scale.
// Scaling a Mesh.
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
// mesh.scale.set(2, 0.5, 0.5);

// Step 16 - Rotation order
// mesh.rotation.reorder("yxz");

// Step 15 - Rotation.
// mesh.rotation.y = 0.5;
// Half a rotation. Set the value PI.
// mesh.rotation.y = Math.PI;
// Qater totation.
// mesh.rotation.y = Math.PI * 0.5;
// mesh.rotation.x = Math.PI * 0.25;

// Step 13 - Part I - Set x, y, z at once.
// mesh.position.set(1, 1, -0.7);

// Step 05 - Add mesh to the scene.
// scene.add(mesh);

// Step 18 - Scene graph. Creating a group.
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xf24c4c })
);
group.add(cube1);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xf7d716 })
);
cube2.position.x = -2;
group.add(cube2);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xec9b3b })
);
cube3.position.x = 2;
group.add(cube3);

// Step 13 - Add axis helper.
const axesHelper = new THREE.AxesHelper(1.5);
scene.add(axesHelper);

// Step 12 - postion nomarlize takes the mesh and makes the length = 1.
// mesh.position.normalize();
// console.log(mesh.position.length()); // Output: length = 1

// Step 11 - part I - position is inherited from Vector3.
// Few Vector3 methods.
// Distance from center of the scene to the mesh.
// console.log(mesh.position.length());

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

// Step 17 - look at
// camera.lookAt(new THREE.Vector3(2,0,0))
// camera.lookAt(mesh.position);

// Step 11 - part II
// Distance from object to the camera.
// console.log(mesh.position.distanceTo(camera.position));
// console.log(mesh.position.distanceTo(new THREE.Vector2(0, 1, 2)))

// Step 09 - Add renderer.
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
