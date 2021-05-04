import * as THREE from "three";

let scene, camera, renderer, cube, cone, plane, light;
let ADD = 0.02;

let createGeometry = function () {
	let geometry = new THREE.BoxGeometry(5, 5, 5);
	let material = new THREE.MeshPhongMaterial({
		color: 0x0f1d89,
		shininess: 100,
		side: THREE.DoubleSide,
	});
	cube = new THREE.Mesh(geometry, material);
	cube.position.z = 10;
	cube.position.y = -5;
	cube.position.x = -6;

	geometry = new THREE.ConeGeometry(3, 4, 20, 1, true);
	cone = new THREE.Mesh(geometry, material);
	cone.position.x = 7;
	cone.position.y = -5;
	cone.position.z = 10;
	geometry = new THREE.PlaneGeometry(1000, 1000, 50, 50);
	material = new THREE.MeshPhongMaterial({
		color: 0x693421,
		side: THREE.DoubleSide,
	});
	plane = new THREE.Mesh(geometry, material);
	plane.rotation.x = Math.PI / 2;
	plane.position.y = -100;

	scene.add(cube);
	scene.add(cone);
	scene.add(plane);
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
	camera.position.z = 40;

	light = new THREE.AmbientLight(0xffffff);
	scene.add(light);

	createGeometry();
	renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
	light.intensity += ADD;
	if (light.intensity >= 8 || light.intensity <= 1) ADD *= -1;
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();

export default mainLoop;
