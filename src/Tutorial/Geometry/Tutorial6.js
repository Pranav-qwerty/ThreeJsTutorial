import * as THREE from "three";
import gentilis_bold from "three/examples/fonts/gentilis_bold.typeface.json";

let scene, camera, renderer, text;
let ADD = 0.2;

let createText = function () {
	let loader = new THREE.FontLoader();
	let font = loader.parse(gentilis_bold);
	let geometry = new THREE.TextGeometry("Hello World", {
		font: font,
		size: 2,
		height: 1,
	});
	let material = new THREE.MeshBasicMaterial({
		color: new THREE.Color("rgb(212, 234, 121"),
	});
	text = new THREE.Mesh(geometry, material);
	text.position.x = -5;
	scene.add(text);
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

	createText();

	renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.position.z = 40;

	document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
	text.rotation.x += ADD;
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();

export default mainLoop;
