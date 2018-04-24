var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 3;
var controls = new THREE.OrbitControls( camera );



var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.Geometry();


var maxPts = 1000000;
for (i = 0; i < maxPts; i ++) 
{ 
  var vertex = new THREE.Vector3();
  vertex.x = 0.1;
  vertex.y = 0;
  vertex.z = 0;
  vertex.a= 0.95;
  vertex.b = 0.7;
  vertex.c = 0.6;
  vertex.d = 3.5;
  vertex.e = 0.25;
  vertex.f = 0.1;

  vertex.dt = Math.random()*0.5 + 0.01;
  geometry.vertices.push( vertex );
}


var material = new THREE.PointsMaterial( { 
  transparent : true,
  opacity:0.5,
  size: 0.01,
  color: 0x00FFFF
});

var pts = new THREE.Points( geometry, material );
	       
scene.add( pts ); 

var animate = function () {
  requestAnimationFrame( animate );
  //particles.forEach( p => {p.draw()})

  Rx.Observable.from(geometry.vertices).subscribe( v => {
    let dx = (v.z - v.b) * v.x - v.d * v.y;
	  let dy = v.d * v.x + (v.z - v.b) * v.y;
	  let dz = v.c + v.a * v.z - (Math.pow(v.z, 3) / 3) - (Math.pow(v.x, 2) + Math.pow(v.y, 2)) *	(1 + v.e * v.z) + v.f * v.z * (Math.pow(v.x, 3));
    
    dx *= v.dt;
    dy *= v.dt;
    dz *= v.dt;
    
    v.x += dx;
    v.y += dy;
    v.z += dz;
  });


  geometry.verticesNeedUpdate = true;
  
  controls.update();
  renderer.render(scene, camera);
};

animate();