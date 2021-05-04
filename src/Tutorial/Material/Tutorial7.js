import * as THREE from "three";

// let scene, camera, renderer, cube1, cube2, plane;
let ADD = 0.1;

/*
let createGeometryBasicColor = function () {
  let geometry = new THREE.BoxGeometry(5, 5, 5);
	let material = new THREE.MeshBasicMaterial({ color: 0xc9b92b });
  
	cube1 = new THREE.Mesh(geometry, material);
	cube1.position.z = -6;
	cube1.position.y = -5;
  
	geometry = new THREE.BoxGeometry(5, 5, 5);
	material = new THREE.MeshBasicMaterial({
    color: 0xff0040,
		transparent: true,
		opacity: 0.2,
	});
  
	cube2 = new THREE.Mesh(geometry, material);
	cube2.position.z = 6;
	cube2.position.y = -5;
  
	geometry = new THREE.PlaneGeometry(1000, 1000, 50, 50);
	material = new THREE.MeshBasicMaterial({
    color: 0xa6f995,
		wireframe: true,
	});
  
	plane = new THREE.Mesh(geometry, material);
	plane.rotation.x = Math.PI / 2;
	plane.position.y = -100;
  
	scene.add(cube1);
	scene.add(cube2);
	scene.add(plane);
};
*/
let scene, camera, renderer, normals, sphere, torus;

let createGeometryNormalMaterial = function () {
	let geometry = new THREE.SphereGeometry(5, 30, 30);
	geometry = new THREE.TorusGeometry(5, 2, 10, 12);

	let material = new THREE.MeshNormalMaterial();

	sphere = new THREE.Mesh(geometry, material);
	torus = new THREE.Mesh(geometry, material);

	scene.add(sphere);
	scene.add(torus);
	scene.add(normals);
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

	// createGeometryBasicColor();
	createGeometryNormalMaterial();

	renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
	/*
	cube1.position.x += ADD;
	cube2.position.x -= ADD;
	if (cube1.position.x > 6 || cube1.position.x < -6) ADD *= -1;
  */
	torus.rotation.x += ADD;
	torus.rotation.y += ADD;
	sphere.rotation.x += ADD - 0.09;
	sphere.rotation.y += ADD - 0.09;
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();

export default mainLoop;
