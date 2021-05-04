///////////////// Rain of Donuts
import * as THREE from "three";

let scene, camera, renderer;
let donuts = [];
let ADD = 0.01;

let randomInRange = function (from, to) {
	let x = Math.random() * (to - from);
	return x + from;
};

let createDonut = function () {
	let geometry = new THREE.TorusGeometry(1, 0.5, 5, 30);
	let material = new THREE.MeshBasicMaterial({
		color: Math.random() * 0xffffff,
	});

	let d = new THREE.Mesh(geometry, material);

	d.position.x = randomInRange(-15, 15);
	d.position.z = randomInRange(-15, 15);
	d.position.y = 15;
	scene.add(d);
	donuts.push(d);
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

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
	let x = Math.random();
	if (x < 0.01) createDonut();
	donuts.forEach((d) => (d.position.y -= ADD));
	renderer.render(scene, camera);
	donuts.forEach((d) => {
		d.rotation.x += ADD;
		d.rotation.y -= ADD;
	});
	requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();

export default mainLoop;
