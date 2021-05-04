import * as THREE from "three";

let scene, camera, renderer, cube, sphere;
let ADD = 0.02;

let createGeometry = function () {
	let material = new THREE.MeshDepthMaterial();
	let geometry = new THREE.BoxGeometry(3, 2, 4);
	cube = new THREE.Mesh(geometry, material);
	cube.position.z = -20;
	cube.position.x = 5;

	geometry = new THREE.SphereGeometry(2, 30, 30);
	sphere = new THREE.Mesh(geometry, material);
	sphere.position.z = 0;
	sphere.position.x = -2;

	scene.add(cube);
	scene.add(sphere);
};

let init = function () {
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);

	camera = new THREE.PerspectiveCamera(
		30,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);
	camera.position.z = 15;
	createGeometry();

	renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
	cube.position.z += ADD;
	sphere.position.z -= ADD;
	// if (cube.position.z >= 6 || cube.position.z <= -16) ADD *= -1;
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();

export default mainLoop;
