import * as THREE from "three";

let scene, camera, renderer, cube, sphere, cone;
let ADD = 0.02;

let createGeometry = function () {
	/*
	let material = new THREE.MeshLambertMaterial({
		side: THREE.DoubleSide,
		color: 0x7fc5f9,
		emissive: 0x25673d,
		emissiveIntensity: 0.5,
	});
  */
	/*
	let material = new THREE.MeshPhongMaterial({
		side: THREE.DoubleSide,
		color: 0x7fc5f9,
		emissive: 0x25673d,
		emissiveIntensity: 0.5,
		shininess: 100,
	});
  */
	let material = new THREE.MeshStandardMaterial({
		side: THREE.DoubleSide,
		color: 0x7fc5f9,
		emissive: 0x25673d,
		emissiveIntensity: 0.5,
		metalness: 1,
		roughness: 1,
	});
	let geometry = new THREE.BoxGeometry(3, 3, 3);
	cube = new THREE.Mesh(geometry, material);
	cube.position.x = -6;

	geometry = new THREE.SphereGeometry(3, 30, 30);
	sphere = new THREE.Mesh(geometry, material);

	geometry = new THREE.ConeGeometry(3, 4, 20, 1, true);
	cone = new THREE.Mesh(geometry, material);
	cone.position.x = 7;

	scene.add(cube);
	scene.add(sphere);
	scene.add(cone);
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
	camera.position.z = 20;
	let directionalLigntUp = new THREE.DirectionalLight(0xffffff);
	scene.add(directionalLigntUp);
	createGeometry();

	renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
	sphere.rotation.x += ADD;
	sphere.rotation.y += ADD;
	cube.rotation.x += ADD;
	cube.rotation.y += ADD;
	cone.rotation.x += ADD;
	cone.rotation.y += ADD;
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();

export default mainLoop;
