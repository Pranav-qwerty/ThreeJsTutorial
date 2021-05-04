///////////////// Adding a Sphere
import * as THREE from "three";

// Set up the environment
// Initiallize scene, Camera, Objects and renderer
let scene, camera, renderer, sphere;
let ADD = 0.01;

let createSphere = function () {
	let geometry = new THREE.SphereGeometry(
		5,
		30,
		30,
		0,
		Math.PI,
		0,
		Math.PI / 2
	);

	let material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		wireframe: true,
	});

	sphere = new THREE.Mesh(geometry, material);
	scene.add(sphere);
};

// set up the environment -
// initiallize scene, camera, objects and renderer
let init = function () {
	// create the scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);

	// create an locate the camera
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);
	camera.position.z = 20;

	createSphere();

	// create the renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

// main animation loop - calls every 50-60 ms.
let mainLoop = function () {
	sphere.rotation.x += ADD;
	// sphere.rotation.y += ADD;
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();

export default mainLoop;
