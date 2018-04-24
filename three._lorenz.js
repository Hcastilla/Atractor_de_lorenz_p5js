var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 100;

var controls = new THREE.OrbitControls( camera );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.Geometry();

var maxPts = 1000000;

for (i = 0; i < maxPts; i ++) 
{ 
  var vertex = new THREE.Vector3();
  vertex.x = 1;
  vertex.y = 1;
  vertex.z = 1;
  vertex.a= 10;
  vertex.b = 28;
  vertex.c = 8/3;

  vertex.dt = Math.random()*0.01 + 0.001;

  geometry.vertices.push( vertex );

}


var material = new THREE.PointsMaterial( { 
  transparent : true,
  opacity:0.3,
  size: 0.1,
  color: 0x00FFFF 
});

var pts = new THREE.Points( geometry, material );
	       
scene.add( pts ); 

var animate = function () {
  requestAnimationFrame( animate );

  Rx.Observable.from(geometry.vertices).subscribe(v => {
    let dx = (v.a * (v.y - v.x)) * v.dt;
    let dy = (v.x * (v.b - v.z) - v.y) *v.dt;
    let dz = (v.x * v.y - v.c * v.z)* v.dt;
    v.x += dx;
    v.y += dy;
    v.z += dz;
  })


  geometry.verticesNeedUpdate = true;
  
  controls.update();
  renderer.render(scene, camera);
};

animate();