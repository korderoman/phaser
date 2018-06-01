/*Lo primero que hay que hacer es crear un objeto de juego
los dos primeros parámetros hacen referencia a la dimensión en pixeles
y el tercer parámetro hace referencia al como hemos de renderizar el canvas, por lo general
webGl es lo mejor pero no todos los navegadores lo aceptan, así que la opción Phaser.Auto
intentará usar webGl si en caso no está disponible hará uso de otro render como el Canvas. 
*/
 var juego=new Phaser.Game(640,360,Phaser.AUTO);
 /*Luego de crear nuestro objeto de juego, nosotros debemos de crear nuestros estados.
 Un estado es donde toda la lógica del juego que hagamos se encontrará, en el juego de la
 granja asignaremos solo un estado
 Los estados tienen algunos métodos por defecto los cuáles podemos usar, los nombres de estos
 métodos son (recuerda que tú no puedes usar estos nombres para tus propios métodos) */

 //Un estado es básicamente un objeto de javascript, recordemos que un objeto puede contener atributos
 //y funciones propias.
 var EstadoJuego={
     /*preload es donde todas las imágenes, audios y vídeos y otros recursos han de ser cargados
     */
    preload:function(){

    },
    /*Una vez que todos los recursos de tu juego han sido cargados, el método create 
    es llamado, cuando este método es llamado, significa que todas las imágenes ya han
    sido cargadas en memoria y en consecuencia pueden ser accedidas de forma rápida y sencilla */
    create:function(){

    },
    /* Este método se ejecuta muchas veces por segundo, es donde se actualizan
    las posiciones o se registran las entradas de teclado o lo que fuere, se revisan las colisiones, etc.*/
    update:function(){

    }

    /*¿Por qué necesitamos pre-cargar nuestras imágenes?, pues porque cargar nuestras imágenes desde
    un disco o de una web puede tomar un tiempo, cuando tu visitas un website si las imágenes no están 
    cargadas usualmente vemos un contenedor vacío. pero ahora imagina que estás jugando un videojuego y el
    principal personaje no está aún cargado, con lo cual solo veríamos un rectángulo de color blanco y esto es inaceptable
    en un videojuego, es por eso que necesitamos asegurar que todos los recursos sean cargados antes que el juego 
    inicie  */

 };

 /*Luego de ello debemos de asignar el estado al juego
 El primer parámetro hace referencia al ID del estado de juego, puede ser lo que querramos asignarle, el segundo
 parámetro es el objeto donde están almacenados los métodos preload,create y update
 */
 
 juego.state.add("EstadoJuego",EstadoJuego);
 /*Posterior a ello debemos de hacer que el estado que hemos cargado (que en nuestro es 1) se despliegue
 para, siendo el único parámetro el ID del Estado */
 juego.state.start("EstadoJuego");

 /*Con esto ya podemos o deberíamos ver en nuestra consola el sgte mensaje:
  *    Phaser CE v2.10.0 | Pixi.js | WebGL | WebAudio     http://phaser.io ♥♥♥
    En este mensaje observamos la versión de phaser, nos informa de igual manera que la librería PixiJs está funcionando
    y que será usada para renderizar parte del juego y finalmente que webGl está disponible así como webAudio.
  */