////////////////// Making a Basic Scene

import * as THREE from "three";

let scene, camera, renderer;

// Set up the environment
// Initiallize scene, Camera, Objects and renderer

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

	// Create the renderer
	renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
};

// Main animation loop - calls 50 - 60 in a second
let mainLoop = function () {
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

// Run
init();

export default mainLoop;
