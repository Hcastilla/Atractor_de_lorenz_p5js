class Particle
{
  constructor(){  
    /**
      * Inicializamos las variables
      */
      this.x = 1;
      this.y = 1;
      this.z = 1;
    /**
      * Definimos las constantes
      */
      this.a = 10;
      this.b = 28;
      this.c = 8/3

      this.dt = random(0.01, 0.001); 
  }

  update(){
    /**
     * calculamos de las derivadas
     */
    
    let dx = (this.a * (this.y - this.x)) * this.dt;
    let dy = (this.x * (this.b - this.z) - this.y) * this.dt;
    let dz = (this.x * this.y - this.c * this.z)* this.dt;
    
    /**
     * Actualizamos valores
     */
    this.x = this.x + dx;
    this.y = this.y + dy;
    this.z = this.z + dz;

    ellipse(this.x, this.y, 0.1, 0.1);
  }
}

/**
* Arreglo para almacenar todos los puntos
*/
let puntos = [];

/**
 * configuración inicial cargada a p5js
 */
function setup()
{
  /**
   * Creamos el canvas para 3d pantalla completa
   */
  createCanvas(windowWidth, windowHeight);

  background('black');

  for( let i = 0; i < 500; i++)
  {
    puntos.push(new Particle());
  }
}

/**
 * funcion para dibujar cada x tiempo
 */
function draw()
{
  background('rgba(0,0,0,.1)');

  translate(width/2, height/2);

  /**
   * escalamos el dibujo 
   */
  scale(8);

  noStroke();
  fill(255, 215, 0);
  
 
  puntos.forEach( p => {
    p.update();
  });

}