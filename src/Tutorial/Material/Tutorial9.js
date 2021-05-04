import * as THREE from "three";

let scene, camera, renderer, cylinder, sphere;
let ADD = 0.02;

let createGeometry = function () {
	// let material = new THREE.LineBasicMaterial({
	// 	color: 0xffffff,
	// 	linewidth: 1,
	// });
	let material = new THREE.LineDashedMaterial({
		color: new THREE.Color("rgb(234, 124, 222"),
		linewidth: 1,
		scale: 1,
		dashSize: 3,
		gapSize: 1,
	});
	// let material = new THREE.PointsMaterial({ color: 0xffffff });

	let geometry = new THREE.CylinderGeometry(3, 2, 4);
	cylinder = new THREE.Line(geometry, material);
	cylinder.position.z = -10;
	cylinder.position.x = -5;
	cylinder.computeLineDistances();

	geometry = new THREE.SphereGeometry(2, 30, 30);
	sphere = new THREE.Line(geometry, material);

	sphere.position.z = 0;
	sphere.position.x = 5;
	sphere.computeLineDistances();

	scene.add(cylinder);
	scene.add(sphere);
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

	createGeometry();

	renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
	cylinder.rotation.x += ADD;
	sphere.rotation.x += ADD;

	cylinder.rotation.y += ADD;
	sphere.rotation.y += ADD;

	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();

export default mainLoop;
