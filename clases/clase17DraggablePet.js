eJ={
    init:function(){
        this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally=true;
        this.scale.pageAlignVertically=true;
    },

    preload:function () {
        this.load.image("patio","./recursos/backyard.png");
        this.load.image("manzana","./recursos/apple.png");
        this.load.image("flecha","./recursos/arrow.png");
        this.load.image("caramelo","./recursos/candy.png");
        this.load.image("rotar","./recursos/rotate.png");
        this.load.image("juguete","./recursos/rubber_duck.png");
        this.load.spritesheet("mascota",97,83,5,1,1);



      },

    create:function () {
        this.fondo=this.game.add.sprite(0,0,"patio");
        this.mascota=this.game.add.sprite(100,40,"mascota");
        this.mascota.anchor.setTo(0.5);
        this.mascota.parametrosPersonalizados={salud:100,divertido:100};
        //hacemos que se pueda arrastrar
        /*Por defecto un objeto de juego no puedo procesar eventos de entrada, por la configuración inputEnabled a true, se
        crea un Phaser.InputHandler que puede procesar, clicks touchs y otros eventos, podemos acceder a estos 
        mediante this.mascota.input.evento  */
        //https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#inputEnabled
        this.mascota.inputEnabled=true;
        //https://photonstorm.github.io/phaser-ce/Phaser.InputHandler.html#enableDrag
        /*enableDrag Permite al sprite ser arrastrado por cualquier pointer valido */
        this.mascota.input.enableDrag();
        
        this.manzana=this.game.add.sprite(72,570,"manzana");
        this.manzana.anchor.setTo(0.5);
        this.manzana.inputEnabled=true;
        /*Ahora vamos hacer que sea clickeable los objetos */

        this.caramelo=this.game.add.sprite(144,570,"caramelo");
        this.caramelo.anchor.setTo(0.5);
        
        this.juguete=this.game.add.sprite(216,570,"juguete");
        this.juguete.anchor.setTo(0.5);
        
        this.rotar=this.game.add.sprite(288,570,"rotar");
        this.rotar.anchor.setTo(0.5);


      }


}

var juego= new Phaser.Game(360,640,Phaser.Auto);
juego.state.add("mascotaVirtual",eJ);
juego.state.start("mascotaVirtual");