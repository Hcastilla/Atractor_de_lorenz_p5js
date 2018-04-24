var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 5;
var controls = new THREE.OrbitControls( camera );

var renderer = new THREE.WebGLRenderer();

renderer.setClearColor( 0x0000, 1 ); 
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.Geometry();


var maxPts = 100000;

let x = 0.1;
let y = 0;
let z = 0;
let a= 0.95;
let b = 0.7;
let c = 0.6;
let d = 3.5;
let e = 0.25;
let f = 0.1;
let dt = 0.01;

let colors = [];
let vertices = [];
let color = 0;
let i = 0;
let cont = 0;


geometry.colors = colors;
var material = new THREE.LineBasicMaterial( { 
  vertexColors: true,
  opacity: 0.6
});

var pts = new THREE.Line( geometry, material );
	       
scene.add( pts ); 


var animate = function () {
  requestAnimationFrame( animate );
  
  if( i < maxPts)
  {
    for( let j = 0; j< 10; j++)
    {
      addPoint();
    }
  }
  

  renderer.render(scene, camera);
};

animate();


function addPoint(){
  let dx = (z - b) * x - d * y;
  let dy = d * x + (z - b) * y;
  let dz = c + a * z - (Math.pow(z, 3) / 3) - (Math.pow(x, 2) + Math.pow(y, 2)) *	(1 + e * z) + f * z * (Math.pow(x, 3));

  dx *= dt;
  dy *= dt;
  dz *= dt;

  x += dx;
  y += dy;
  z += dz;

  vertices = geometry.vertices;
  colors = geometry.colors;

  vertices.push(
    new THREE.Vector3( x, y, z ),
  );

  colors.push(new THREE.Color());
  colors[i].setHSL( 0.15 + color, 1.0, 0.5 );

  
  if (cont > 1000){
    color += 0.01;
    cont = 0;
  }

  i++;
  cont++;

  geometry = new THREE.Geometry();
  geometry.vertices = vertices;
  geometry.colors = colors;

  scene.remove(pts);
  pts = new THREE.Line( geometry, material);
  scene.add(pts);

}