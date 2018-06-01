var juego= new Phaser.Game(640,340,Phaser.Auto);

var e1={
    preload:function(){
        this.load.image("fondo","./recursos/background.png");
        this.load.image("cerdo","./recursos/pig.png");
        this.load.image("pollo","./recursos/chicken.png");
        this.load.image("caballo","./recursos/horse.png");
        this.load.image("oveja","./recursos/sheep.png");
        this.load.image("flecha","./recursos/arrow.png");
    },
    create:function(){
        this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally=true;
        this.scale.pageAlignVertically=true;

        //colocamos el fondo
        this.fondo=this.game.add.sprite(0,0,"fondo");
        //creamos el arreglo de animales

        var animalData=[
            {key:"pollo",texto:"POLLO"},
            {key:"cerdo",texto:"CERDO"},
            {key:"caballo",texto:"CABALLO"},
            {key:"oveja",texto:"OVEJA"},
        ];
        //creamos el grupo
        var animales=this.game.add.group();
        //agreamos al grupo los elementos del arreglo, pero primero el artilugio
        var self=this;
        var animal;
        animalData.forEach(function (elemento) { 
           animal=self.animales.create(-1000,self.game.world.centerY,elemento.key);
           animal.anchor.setTo(0.5);
           animal.customParams={texto:elemento.texto};
           //habilitamos los inputos
           animal.inputEnabled=true; 
           animal.input.pixelPerfectClick=true;
           //agregamos el evento
           animal.events.onInputDown.add(self.animarAnimal,self);

         });

         //Ahora llamamos algun animal
         this.animalActual=this.animales.next();
         this.animalActual.position.set(this.game.world.centerX,this.game.world.centerY);

         //Habilitamos las entradas de teclado y las flechas
         this.flechaI=this.game.add.sprite(60,this.game.world.centerY,"flecha");
         this.flechaI.customParams={direccion:-1};
         this.flechaI.anchor.setTo(0.5);
         this.flechaI.scale.x=-1;
         
         this.flechaI.inputEnabled=true;
         this.flechaI.input.pixelPerfectClick=true;
         this.flechaI.events.onInputDown.add(this.cambiarAnimal,this );


         this.flechaD=this.game.add.sprite(580,this.game.world.centerY,"flecha");
         this.flechaD.customParams={direccion:1};
         this.flechaD.anchor.setTo(0.5);

         
         
         this.flechaD.inputEnabled=true;
         this.flechaD.input.pixelPerfectClick=true;
         this.flechaD.events.onInputDown.add(this.cambiarAnimal,this );

    },
    update:function(){

    },

    //functiones propias
    /*Ahora vamos a implementar el cambio de animales cada vez que presionemos el boton
     */
    cambiarAnimal:function(sprite,evento){
 /*Estos son los pasos
        1.Obtener la dirección de la flecha
        2.Obtener el siguiente animal
        3. Obtener el destino final del actual animal
        4.mover el actual hacia su destino final
        5. set el siguiente animal como el actual animal
        */

        //1
        var nuevoAnimal, endX;

        if(sprite.customParams.direccion>0){
            nuevoAnimal=this.animales.next();
            nuevoAnimal.x=-nuevoAnimal.width/2;
            endX=640+this.animalActual.width/2;
        }else{
            nuevoAnimal=this.animales.previous();
            nuevoAnimal.x=640+nuevoAnimal.width/2;
            endX=-this.animalActual.width/2;
        }
        //revisar esto...
        //hacemos una nueva animacion

        var nuevoAnimalMovimiento=game.add.tween(nuevoAnimal);
        nuevoAnimalMovimiento.to({x:this.game.world.centerX},1000);
        nuevoAnimalMovimiento.start();
        var actualAnimalMovimiento=game.add.tween(animalActual);
        actualAnimalMovimiento.to({x:this.game.world.centerX},1000);
        actualAnimalMovimiento.start();

        /*
        this.animalActual.x=endX;
        nuevoAnimal.x=this.game.world.centerX;*/
        this.animalActual=nuevoAnimal;



    },
    animarAnimal:function(s,e){
       /*En phaser el metodo tween es el cambio de valor de una propiedad por otra 
       en un período de tiempo */



    }

}

juego.state.add("Inicio",e1);
juego.state.start("Inicio");