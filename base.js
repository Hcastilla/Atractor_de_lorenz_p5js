/**
 * Inicializamos las variables
 */
let x = 1;
let y = 1;
let z = 1;
/**
 * Definimos las constantes
 */
const a = 10;
const b = 28;
const c = 8/3;

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
  createCanvas(windowWidth, windowHeight, WEBGL);
}

/**
 * funcion para dibujar cada x tiempo
 */
function draw()
{
  background('black');


  translate(0, 100, 0);

  /**
   * Rotamos los ejes
   */
  rotateZ(1.34);
  rotateX(-1.34);
  rotateY(1.34);

  /**
   * Manipular con el mouse (click)
   */
  orbitControl();

  /**
   * escalamos el dibujo 
   */
  scale(8);

  /**Añadimos puntos al arreglo */
  añadirPuntos(100);


  /**
   * Damos la tonalidad Amarilla
   */
  fill(255, 215, 0);

  /**
   * Creamos la forma
   */
  beginShape()
  let color = 0;
  puntos.forEach( p => {
    vertex(p.x, p.y, p.z);
  });
  endShape()

}

function añadirPuntos(num){
  for( let i = 0; i < num; i++)
  {
    /**
     * calculamos de las derivadas
     */

    let dt = 0.001;  
    
    let dx = (a * (y - x)) * dt;
    let dy = (x * (b - z) - y) * dt;
    let dz = (x * y - c * z)* dt;
    
    /**
     * Actualizamos valores
     */
    x = x + dx;
    y = y + dy;
    z = z + dz;

    /**
     * Creamos un punto  y lo añadimos al arreglo
     */
    puntos.push(createVector(x, y, z));
  }
}
