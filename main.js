import * as THREE from 'three';

//Setup Scene
const scene = new THREE.Scene()

// Camera setup
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.OrthographicCamera(
  -aspectRatio, // left
  aspectRatio, // right
  1, // top
  -1, // bottom
  0.1, // near
  1000 // far
);
camera.position.set(-1,-0.1,1.7)

//Setup Renderer
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'), alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

function getWidth() {
  return parseInt(window.getComputedStyle(canvas).width);
}

function getHeight() {
  return parseInt(window.getComputedStyle(canvas).height);
}

addEventListener("resize",() => {
  camera.aspect = getWidth() / getHeight();
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  cube.scale.set(0.5,0.5,0.5);
},false);

// Create Cube
const geometry = new THREE.BoxGeometry( 1, 1.2, 1 );
//const geometry = new THREE.CylinderGeometry( 0.73, 0.73, 1.4, 8 ); 

const material = new THREE.MeshStandardMaterial( { color: 0xb02c2c } );
const cube = new THREE.Mesh( geometry, material );
if ( document.URL.includes("About") ) {
  cube.material.color.setHex( 0x2c38ab );
}
scene.add( cube );

//setup point and ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0,0,1);
scene.add(ambientLight,pointLight);

//cube movement
cube.rotation.x +=0.2;
function animate() {
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );

}

