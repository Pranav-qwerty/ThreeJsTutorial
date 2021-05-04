import * as THREE from "three";

let scene, camera, renderer, light, cube, sphere, plane;
let ADD = 0.01;

let createGeometry = function () {
	let geometry = new THREE.BoxGeometry(5, 5, 5);
	let material = new THREE.MeshPhongMaterial({
		color: 0xdff913,
		shininess: 100,
		side: THREE.DoubleSide,
	});
	cube = new THREE.Mesh(geometry, material);
	cube.position.set(5, 0, 0);

	geometry = new THREE.SphereGeometry(5, 30, 30);
	material = new THREE.MeshPhongMaterial({
		color: 0x66cdaa,
		shininess: 100,
		side: THREE.DoubleSide,
	});
	sphere = new THREE.Mesh(geometry, material);
	sphere.position.set(-5, 5, -5);

	geometry = new THREE.BoxGeometry(2000, 1, 2000);
	material = new THREE.MeshPhongMaterial({
		color: 0x693421,
		side: THREE.DoubleSide,
	});
	plane = new THREE.Mesh(geometry, material);

	scene.add(plane);
	scene.add(sphere);
	scene.add(cube);
};

let init = function () {
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xababab);

	camera = new THREE.PerspectiveCamera(
		30,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);
	camera.position.set(0, 10, 60);

	// light = new THREE.AmbientLight(0x63b8ff);
	light = new THREE.HemisphereLight(0xffffff, 0x000000);
	scene.add(light);
	createGeometry();

	renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();

export default mainLoop;
