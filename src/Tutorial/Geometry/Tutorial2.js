///////////////// Adding a Cube
import * as THREE from "three";

// Set up the environment
// Initiallize scene, Camera, Objects and renderer
let scene, camera, renderer, cube;

// Animation Speed
let speed = 0.01;

// Creating a Cube

let createCube = function () {
	let geometry = new THREE.BoxGeometry(1, 1, 1); // Setting the scale
	let material = new THREE.MeshBasicMaterial({ color: 0x00a1cb }); // Creating a Material
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
};

let init = function () {
	// Create the scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xababab);

	// Create and locate the camera

	camera = new THREE.PerspectiveCamera(
		30,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);
	camera.position.z = 5;

	// Running thr create Cube function
	createCube();
	// Create the renderer
	renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
};

// Main animation loop - calls 50 - 60 in a second
let mainLoop = function () {
	cube.position.x += speed;
	cube.rotation.z -= speed;
	cube.rotation.y -= speed;
	if (cube.position.x <= -2 || cube.position.x >= 2) {
		cube.position.x = 0;
		speed = -speed;
	}
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

// Run
init();

export default mainLoop;
