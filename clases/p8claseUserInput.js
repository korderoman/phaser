var juego= new Phaser.Game(640,360,Phaser.Auto);

var eJuego={
    preload:function(){
        this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally=true;
        this.scale.pageAlignVertically=true;

        this.load.image("fondo","./recursos/background.png");
        this.load.image("pollo","./recursos/chicken.png");
        this.load.image("caballo","./recursos/horse.png");
        this.load.image("cerdo","./recursos/pig.png");
        this.load.image("oveja","./recursos/sheep3.png");
        this.load.image("flecha","./recursos/arrow.png")
    },
    /*Un juego es nada si este no cuenta con interacción */
    create:function(){
        this.fondo=this.game.add.sprite(0,0,"fondo");
        this.cerdo=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"cerdo");
        this.cerdo.anchor.setTo(0.5);
        /*Primero se realiza la animación de las flechas, esto pasa cuando el usuario toca el animal
        es decir que cuando el usuario toque el centro del animal este se animará 
        */

         this.cerdo.inputEnabled=true;
         this.cerdo.input.pixelPerfectClick=true;
         this.cerdo.events.onInputDown.add(this.animarAnimal,this);


        /*Para este ejemplo hemos de agregar unas flechas y es en estas flechas donde hemos de colocar los inputs
         */
        //flecha izquierda
        this.flechaIzquierda=this.game.add.sprite(80,this.game.world.centerY,"flecha");
        //otra forma de hacer el giro
        this.flechaIzquierda.scale.x=-1;
        //hemos creado nuestra propia propiedad
        this.flechaIzquierda.customParams={direccion:-1};
        //movemos con la flecha
        /*habilitamos la entrada (input) para este sprite en particular */
        this.flechaIzquierda.inputEnabled=true;
        //habilitamos que no se registre un simple triangulo como input sino los pixeles que componen el sprite
        /*Este método es muy costoso en terminos del computador, ya que no será un rectangulo
        así que no debemos usar esto si es que no resulta necesario */
        this.flechaIzquierda.input.pixelPerfectClick=true;
        /*Hasta este momento el input ya se encuentra habilitado, pero nada está pasando
        entonces con un evento, de input (onInputDown), el cual pide una funcion y un contexto hacemos que se modifique */
        //onInputDown trabja con mouse o dispositivos moviles.
        this.flechaIzquierda.events.onInputDown.add(this.cambiarAnimal,this);


        //flecha derecha
        this.flechaDerecha=this.game.add.sprite(580,this.game.world.centerY,"flecha");
        this.flechaDerecha.anchor.setTo(0.5);
        /*Aunque no existe una definicion en Phaser, entiendo que se ha creado un objeto propio 
        en cstomParams */
        this.flechaDerecha.customParams={direccion:1};
        //Para las felchas derechas es el mimso asunto
        this.flechaDerecha.inputEnabled=true;
        this.flechaDerecha.input.pixelPerfectClick=true;
        this.flechaDerecha.events.onInputDown.add(this.cambiarAnimal,this);
    },
    update:function(){
        
    },
    cambiarAnimal:function(sprite,evento){
        console.log("mover animal");
    },

    
    animarAnimal:function(sprite,evento){
        console.log("Animar animal");
    }


}


juego.state.add("eJuego",eJuego);
juego.state.start("eJuego");