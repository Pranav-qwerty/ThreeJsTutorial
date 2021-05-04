import * as THREE from "three";

let scene, camera, renderer, light1;
let spheres = [];
let ADD = 0.01,
	theta = 0;
const RADIUS = 5,
	BASE_X = -20,
	BASE_Y = -20;

let createGeometry = function () {
	let material = new THREE.MeshPhongMaterial({
		color: 0x0450fb,
		shininess: 100,
		side: THREE.DoubleSide,
	});
	for (let i = 0; i < 4; i++)
		for (let j = 0; j < 4; j++) {
			let geometry = new THREE.SphereGeometry(RADIUS, 30, 30);
			let sphere = new THREE.Mesh(geometry, material);
			sphere.position.x = BASE_X + j * 2 * (RADIUS + 0.5);
			sphere.position.z = -2 * RADIUS * i;
			sphere.position.y = BASE_Y + i * RADIUS;
			scene.add(sphere);
		}
};

// set up the environment -
// initiallize scene, camera, objects and renderer
let init = function () {
	// create the scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);

	// create an locate the camera

	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);

	camera.position.set(0, 0, 40);

	light1 = new THREE.DirectionalLight(0xffffff, 1);

	scene.add(light1);

	createGeometry();

	// create the renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

let switchCamera = function () {
	if (camera instanceof THREE.PerspectiveCamera) {
		camera = new THREE.OrthographicCamera(-300, 300, 400, -400, 1, 1000);
		camera.zoom = 5;
		camera.updateProjectionMatrix();
	} else {
		camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			1,
			1000
		);
		camera.position.set(0, 0, 40);
	}
};

// main animation loop - calls 50-60 times per second.
let mainLoop = function () {
	camera.lookAt(new THREE.Vector3(0, 0, 0));
	camera.position.x = 40 * Math.sin(theta);
	camera.position.z = 40 * Math.cos(theta);
	theta += ADD;

	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();

export default mainLoop;
