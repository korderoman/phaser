var juego= new Phaser.Game(640,360,Phaser.Auto);


var estadoJuego={
    preload:function(){
        this.load.image("fondo","../recursos/background.png");
        this.load.image("pollo","../recursos/chicken.png");
        this.load.image("caballo","../recursos/horse.png");
        this.load.image("cerdo","../recursos/pig.png");
        this.load.image("oveja","../recursos/ship3.png");

    },

    create:function(){
        this.fondo=this.game.add.sprite(0,0,"fondo");
        /*Por defecto en phaser las imágenes se dibujan desde su esquina superior izquierda
        nosotros queremos trasladar ls coordenadas 0,0 */
        this.pollo=this.game.add.sprite(this.game.world.centerX, this.game.world.centerY,"pollo");
        /*Esto se hace a través del método anchor que es el punto de apoyo que inicialmente está en la esquina
        superior izquierda, lo que haremos es trasladar este punto de apoyo al centro, siendo que 0 es la esquina izquierda y 1
        es la esquina derecha inferior en x,y, así que el medio estará en 0.5 */
        this.pollo.anchor.setTo(0.5,0.5);

    },

    update(){

    }
}