
class Particle { 
  float x, y, z, a, b, c, dt;
  
  Particle(){
    x = 0.01;
    y = 0;
    z = 0;
    
    a = 10;
    b = 28;
    c = 8.0/3.0;
    
    dt = random(0.001, 0.02);  
 
  } 
  
  void draw() { 
   
    float dx = (a * (y - x))*dt;
    float dy = (x * (b - z) - y)*dt;
    float dz = (x * y - c * z)*dt;
    x = x + dx;
    y = y + dy;
    z = z + dz; 
    
    stroke(215, 110, 255, 255);
    strokeWeight(0.1);
    point(x,y,z);
    
    
  } 
} 

ArrayList<Particle> particles = new ArrayList<Particle>();

void setup() {
  size(800, 600, P3D);
  colorMode(HSB);
  
  
  frameRate(120);
  
  for(int i = 0; i< 20000; i++){
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