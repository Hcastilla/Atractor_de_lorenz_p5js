
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
    
    stroke(190, 255, 255, 40);
    strokeWeight(0.1);
    point(x,y,z);
    
    
  } 
} 