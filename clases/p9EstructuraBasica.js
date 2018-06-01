//este juego solo tendrá un estado
var juegoEstado={
    //inicia con configuraciones iniciales
    init:()=>{
        /*Scale manager es un objeto que maneja el escalamiento y redimensionamiento del tamaño del juego y del display 
         del canvas, el tamaño del juego es el tamaño lógico del juego y el display del canvas tiene el tamaño como un elemento html
         la opción ShowALL escala el juego manteniendo las proporciones*/
        this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally=true;
        this.scale.pageAlignVertically=true;
    },

    preload:()=>{
        this.load.image("alce","./images/backyard.png");
        this.load.image("manzana","./images/apple.png");
        this.load.image("caramelo","./images/candy.png");
        this.load.image("rotar","./images/rotate.png");
        this.load.image("juguete","./images/rubber_duck.png");
        this.load.spritesheet("mascota","./images/pet.png",97,83,5,1,1);

    },

    create:()=>{

    }

   




}
var juego= new Phaser.Game(360,640,Phaser.AUTO);
juego.state.add("EstadoJuego",juegoEstado);
juego.state.start("EstadoJuegos");