import * as THREE from "three";

let scene, camera, renderer, saturn;
let rings = [];
let ADD = 0.1;

let createSaturn = function () {
	let geometry = new THREE.SphereGeometry(4, 30, 30);
	let material = new THREE.MeshBasicMaterial({ color: 0x8d5524 });
	saturn = new THREE.Mesh(geometry, material);
	scene.add(saturn);

	geometry = new THREE.TorusGeometry(5.1, 0.7, 2, 50);
	material = new THREE.MeshBasicMaterial({ color: 0xffe39f });
	let ring = new THREE.Mesh(geometry, material);
	rings.push(ring);
	scene.add(ring);

	geometry = new THREE.TorusGeometry(6.9, 0.7, 2, 50);
	material = new THREE.MeshBasicMaterial({ color: 0xffad60 });
	ring = new THREE.Mesh(geometry, material);
	rings.push(ring);
	scene.add(ring);

	geometry = new THREE.TorusGeometry(8.5, 0.7, 2, 50);
	material = new THREE.MeshBasicMaterial({ color: 0xffac086 });
	ring = new THREE.Mesh(geometry, material);
	rings.push(ring);
	scene.add(ring);

	rings.forEach((ring) => {
		ring.rotation.x = 1.7;
		ring.rotation.y = 0.5;
		scene.add(ring);
	});
};

let init = function () {
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);

	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);
	camera.position.z = 20;

	createSaturn();

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
	camera.position.y += ADD;
	if (camera.position.y >= 5 || camera.position.y <= -5) {
		ADD *= -1;
	}
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();

export default mainLoop;
