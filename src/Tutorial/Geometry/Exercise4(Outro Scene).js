import * as THREE from "three";
import helvetiker_regular from "three/examples/fonts/helvetiker_regular.typeface.json";

let scene, camera, renderer, text;
let ADD = 0.06;
let titles = `At night, alone, the animals came and shone.\n
The darkness whirled but silent shone the animals:  \n 
The lion the man the calf the eagle saying   \n
Sanctus which was and is and is to come.\n

The sleeper watched the people at the waterless wilderness’ edge\n;   
The wilderness was made of granite, of thorn, of death\n,   
It was the goat which lightened the people praying\n.
The goat went out with sin on its sunken head\n.
\n
On the sleeper’s midnight and the smaller after hours  \n 
From above below elsewhere there shone the animals   \n
Through the circular dark; the cock appeared in light   \n
Crying three times, for tears for tears for tears.\n
\n
High in the frozen tree the sparrow sat. At three o’clock   \n
The luminous thunder of its fall fractured the earth.   \n
The somber serpent looped its coils to write\n
In scales the slow snake-music of the red ripe globe.\n
\n
To the sleeper, alone, the animals came and shone,   \n
The darkness whirled but silent shone the animals.   \n
Just before dawn the dove flew out of the dark\n
Flying with green in her beak; the dove also had come.`;

let createOutro = function () {
	let loader = new THREE.FontLoader();
	let font = loader.parse(helvetiker_regular);
	let geometry = new THREE.TextGeometry(titles, {
		font: font,
		size: 1,
		height: 0.1,
	});
	let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
	text = new THREE.Mesh(geometry, material);
	text.position.x = -15;
	text.rotation.x = -0.9;
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

	camera.position.z = 40;

	createOutro();

	renderer = new THREE.WebGL1Renderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
	text.position.z -= ADD;
	text.position.y += ADD / 2;
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();

export default mainLoop;
