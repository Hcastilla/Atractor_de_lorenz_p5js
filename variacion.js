class Particle{
  constructor()
  {
    /**
    * Inicializamos las variables
    */
    this.x = 1;
    this.y = 1;
    this.z = 1;
    /**
     * Definimos las constantes
     */
    this.a= 10;
    this.b = 28;
    this.c = 8/3;

    this.dt = random(0.01, 0.0001);  
    
  }

  draw(){
    /**
     * calculamos de las derivadas
     */

    
    let dx = (this.a * (this.y - this.x)) * this.dt;
    let dy = (this.x * (this.b - this.z) - this.y) *this.dt;
    let dz = (this.x * this.y - this.c * this.z)* this.dt;
    
    /**
     * Actualizamos valores
     */
    this.x += dx;
    this.y += dy;
    this.z += dz;

     //translate(this.x, this.y, this.z);
     noStroke();
     fill(180, 360, 360)
     ellipse(this.x, this.y, 0.1);
  }
}

let particles = [];
function setup()
{
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360);

  for(let i = 0; i < 200; i++)
  {
    particles.push(new Particle());
    
  }
  background('black')
  frameRate(120)
}

function draw(){
  background('rgba(0,0,0,.1)');
  translate(width/2, height/2);
  rotate(1.13);
  scale(8)
  particles.forEach(p => { p.draw()});
}