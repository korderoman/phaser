var juego = new Phaser.Game(640,360,Phaser.Auto);

var EstadoJuego={
    preload:function(){
        /*Los métodos de tipo load, y su submetodo image, permiten cargar una imagen
        la imagen tiene como primer parámetro un identificador y como segundo parámetro la ruta donde
        se encuentra almacenado el recurso */
        this.load.image("background","../../recursos/background.png");
    },

    create:function(){
        /*Hecha la carga de los recursos estamos listos para poder acceder a ellos, entonces es momento de crear un sprite. pues
        es con el sprite que podemos mostrar la imagen en la pantalla, vamos a llamar a este sprite fondo */
    //propiedad game https://photonstorm.github.io/phaser-ce/Phaser.State.html#game esta propiedad hace referencia al contexto de juego
    /*Un sprite básicamente requiere de parámetros de posicion y el id del objeto imagen */
        this.fondo=this.game.add.sprite(0,0,"background");
        this.pollo=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY)
    },

    update:function(){

        
    }
}

