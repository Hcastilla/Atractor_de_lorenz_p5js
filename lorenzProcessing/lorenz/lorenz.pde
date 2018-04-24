
ArrayList<Particle> particles = new ArrayList<Particle>();

void setup() {
  size(800, 600, P3D);
  colorMode(HSB);
  
  
  frameRate(120);
  
  for(int i = 0; i< 50000; i++){
    particles.add(new Particle());
  }
  
}

void draw() {
  background(0);
  translate(width/2, height/2);
  scale(6);
  rotateX(-frameCount * 0.0001);
  rotateY(frameCount * 0.0001);
  rotateZ(frameCount * 0.0001);
  noStroke(); 
  for (Particle p : particles) {
    
    p.draw();
  }
 



  //println(x,y,z);
}