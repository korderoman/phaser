var juego= new Phaser.Game(640,360,Phaser.Auto);

var estadoJuego={
    preload:function(){
        this.load.image("fondo","./recursos/background.png");
        this.load.image("pollo","./recursos/chicken.png");
        this.load.image("caballo","./recursos/horse.png");
        this.load.image("cerdo","./recursos/pig.png");
        this.load.image("oveja","./recursos/sheep3.png");
    },

    create: function(){
        this.fondo=this.game.add.sprite(0,0,"fondo");
        this.pollo=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"pollo");
        this.pollo.anchor.setTo(0.5,0.5);
        /*Hay que recordar que this.pollo es ya una instancia de la clase sprite, en consecuencia
        posee una serie de métodos para definir su tamaño y posicion, ya hemos visto el de posicion
        en su punto de apoyo, pero sobre su tamapo se hace de scale, podemos especificar una escala diferente 
        para x e y, o incluir un solo numero el cual se aplicará en ambos, este crecimiento se dará desde el 
        anchor point. */
        this.pollo.scale.setTo(2,1);
        //una figura de menor tamaño
        this.caballo=this.game.add.sprite(100,150,"caballo");
        this.caballo.anchor.setTo(0.5);
        this.caballo.scale.setTo(0.5);
    },

    update:function(){

    }



}