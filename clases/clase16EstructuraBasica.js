var juego=new Phaser.Game(360,640,Phaser.AUTO);
var estadoJuego={
init:function(){
    this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally=true;
    this.scale.pageAlignVertically=true;
},
//function que permite la carga de los elementos del juego
preload:function(){
    //siempre se busca con un phaser.state el metodo load que es gestionado por un pahser loader
    //image requiere de un key y su url
    //https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#image
    this.load.image("patio","./recursos/backyard.png");
    this.load.image("manzana","./recursos/apple.png");
    this.load.image("caramelo","./recursos/candy.png");
    this.load.image("rotar","./recursos/rotate.png");
    this.load.image("juguete","./recursos/rubber_duck.png");
   
    this.load.image("flecha","./recursos/arrow.png");
 //spritesheet(key,url,anchoFrame,altoFrame,numero máximo de frames,margen,espaciado)
    //https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#spritesheet
    this.load.spritesheet("mascota","./recursos/pet.png",97,83,5,1,1);


},
//función que ejecuta todo lo cargado
create:function(){
    //juego.add pertenece a la clase pahser.GameObjectFactory y con su metodo sprite, crea un nuevo método con la posicion específica
    //y un key sprite.esta función devuelve un phaser.Sprite
    //https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html
     /*mascota es una instancia de phaser.sprite, puede tener acceso a sus propiedades */
    /*.game es una referencia al juego actualmente corriendo, es como decir al juego.add "al juego agregar" */
    this.background=this.game.add.sprite(0,0,"patio");
    /*mascota es una instancia de phaser.sprite, puede tener acceso a sus propiedades */
    this.mascota=this.game.add.sprite(100,400,"mascota");
    //recordar que anchor configura el centro de gravedad del objeto, el cual inicialmente está en la esquina superior izquierda
    this.mascota.anchor.setTo(0.5);
    //propiedades personalizadas
    this.mascota.parametrosPersonalizados={salud:100,divertido:100};

    //agregamos los demás sprites
    this.manzana=this.game.add.sprite(72,570,"manzana");
    this.caramelo=this.game.add.sprite(140,570,"caramelo");
    this.juguete=this.game.add.sprite(216,570,"juguete");
    this.rotar=this.game.add.sprite(288,570,"rotar.");




}
    



}


/*Juego es una instancia de phaser, por lo cual tiene un estado, el metodo state.add
recibe como parámetros un key para identificar el estado y un estado, ahora bien un estado puede ser
Un objeto JS que contenga al menos uno de los callback requeridos (preload,create,update o render)
Una instancia de Phaser.State
Una instancia de una clase que herede de Phaser.State
Un constructo de la clase
*/
//https://photonstorm.github.io/phaser-ce/Phaser.StateManager.html#add
juego.state.add("juego",estadoJuego);
juego.state.start("juego");

