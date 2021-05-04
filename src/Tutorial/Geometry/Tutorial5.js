////////////////// Custom Geometry

import * as THREE from "three";

let scene, camera, renderer, mygeometry;
let ADD = 0.02;

let createGeometry = function () {
	let geometry = new THREE.Geometry();

	geometry.vertices.push(new THREE.Vector3(3, 0, 0));
	geometry.vertices.push(new THREE.Vector3(0, 5, 0));
	geometry.vertices.push(new THREE.Vector3(0, 0, 2));
	geometry.vertices.push(new THREE.Vector3(1, 2, -2));

	geometry.faces.push(new THREE.Face3(0, 1, 2));
	geometry.faces.push(new THREE.Face3(1, 2, 3));
	geometry.faces.push(new THREE.Face3(0, 2, 3));

	let material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		side: THREE.DoubleSide,
		wireframe: true,
	});
	mygeometry = new THREE.Mesh(geometry, material);
	scene.add(mygeometry);
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

	createGeometry();

	// create the renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

// main animation loop - calls 50-60 times per second.
let mainLoop = function () {
	// mygeometry.geometry.vertices[1].y -= 0.02;
	// mygeometry.geometry.verticesNeedUpdate = true;
	mygeometry.rotation.x += ADD;
	mygeometry.rotation.y += ADD;

	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();

export default mainLoop;
