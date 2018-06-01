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
        this.pollo.scale.setTo(2,1);

        this.caballo=this.game.add.sprite(120,10,"caballo");
        this.caballo.scale.setTo(0.5);

        this.cerdo=this.game.add.sprite(500,300,"cerdo");
        this.cerdo.scale(-1,1);
        /*Lo primero que debemos saber es que la rotación se da desde el anchor point, es decir desde el punto de apoyo
         */
        this.oveja=this.game.add.sprite(100,250,"oveja");
        //la volvemos un poco más pequeña
        this.oveja.scale.setTo(0.5);
        /*Para rotarla lo único que necesitamos es tener acceso a su propiedad angulo (angle) 
        la cual es 0 por defecto, puede usarse valores positivos he ira en direccion de las agujas del reloj
        si colocamos valores negativos, ira en contra, por cierto está en sexagesimales.*/
        this.oveja.angle=-45;


    },
    update:function(){
        /*Para observar algún efecto de giro podemos en la función update ir modificando el angulo para que así sea observable paso a paso.
         */
        this.oveja.angle+=0.5;
    }

}

juego.state.add("nuestroJuego",eJuego);
juego.state.start("nuestroJuego");
