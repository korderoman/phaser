var juego= new Phaser.Game(640,360,Phaser.Auto);

var eJuego={
    preload:function(){
        this.load.image("fondo","./recursos/background.png");
        this.load.image("pollo","./recursos/chicken.png");
        this.load.image("caballo","./recursos/horse.png");
        this.load.image("cerdo","./recursos/pig.png");
        this.load.image("oveja","./recursos/sheep3.png");
    },
    create:function(){
        this.fondo=this.game.add.sprite(0,0,"fondo");
        this.pollo=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"pollo");
        this.pollo.anchor.setTo(0.5);
        this.pollo.scale(2,1);

        this.caballo=this.game.add.sprite(120,10,"caballo");
        this.caballo.scale.setTo(0.5);

        this.cerdo=this.game.add.sprite(500,300,"cerdo");
        this.cerdo.anchor.setTo(0.5);
        /*De forma predeterminada el cerdo está mirando hacia la izquierda, si nosotros quisieramos hacer que este se de
        giro, al menos en la dirección en X, todo lo que debemos hacer es configurar el metodo scale dando un número negativo
        scale(-1,1) girará la imagen sin modificar su dimensión, pero si queremos incluso modificar la direccion es posible hacerlo. */
        this.cerdo.scale.setTo(-1,1);
    },
    update:function(){

    }
}

juego.state.add("nuestroJuego",eJuego);
juego.state.start("nuestroJuego");