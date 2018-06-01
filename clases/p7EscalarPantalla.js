var juego= new Phaser.Game(640,360,Phaser.Auto);
/*En el diverso mundo de posibilidades sobre los dispositivos que tienen los usuarios
algunos usan tablets, otros celulares o la misma pc, hace que no se tenga una resolución estandar
entonces como es que phaser hace un tratamiento de esto, phaser puede usar diferentes modos de escalamiento, en los ejemplos
anteriores hemos visto como nuestra pantalla de juego es más pequeña quizá que nuestra pantalla, pero que si modificamos la dimensión
del navegador esta no se modifica. Lo que podemos hacer es hacer uso de opciones de escalamiento en función de uno de los lados o ambos
 */

var eJuego={
    preload:function(){
        this.load.image("fondo","./recursos/background.png");
        this.load.image("pollo","./recursos/chicken.png");
        this.load.image("caballo","./recursos/horse.png");
        this.load.image("cerdo","./recursos/pig.png");
        this.load.image("oveja","./recursos/sheep3.png");
    },
    create:function(){
        /*si usamos this.scale, nos estamos referiendo al objeto del estado de juego, el cual es el que se ejecuta
        para ello debemos de usar el ScaleMode */
        this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        /*También podemos centrar nuestro juego en la horizontal y vertical*/
        this.scale.pageAlignHorizontally=true;
        this.scale.pageAlignVertically=true;
        this.fondo=this.game.add.sprite(0,0,"fondo");
        this.pollo=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"pollo");
        this.pollo.anchor.setTo(0.5);
        this.pollo.scale.setTo(2,1);

        this.caballo=this.game.add.sprite(120,10,"caballo");
        this.caballo.scale.setTo(0.5);

        this.cerdo=this.game.add.sprite(510,300,"cerdo");
        this.cerdo.scale(-1,1);

        this.oveja=this.game.add.sprite(100,250,"oveja");
        this.oveja.scale.setTo(0.5);
        this.oveja.angle=-45;

    },
    update:function(){
        this.oveja.angle+=0.5;
    }


}

juego.state.add("eJuego",eJuego);
juego.state.start("eJuego");