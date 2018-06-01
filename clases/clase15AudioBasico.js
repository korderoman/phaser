var juego= new Phaser.Game(640,360);

var e={
    preload:function(){
        this.load.image("fondo","./recursos/background.png");
        this.load.image("flecha","./recursos/arrow.png");
   
        //Ahora vamos a llamar a través de sprites
        this.load.spritesheet("pollo","./recursos/chicken_spritesheet.png",131,200,3);
        this.load.spritesheet("caballo","./recursos/horse_spritesheet.png",212,200,3);
        this.load.spritesheet("cerdo","./recursos/pig_spritesheet.png",297,200,3);
        this.load.spritesheet("oveja","./recursos/sheep_spritesheet.png",244,200,3);

        //Cargamos los sonidos
        this.load.audio("polloS",["./recursos/audio/chicken.ogg","./recursos/audio/chicken.mp3"]);
        this.load.audio("caballoS",["./recursos/audio/horse.ogg","./recursos/audio/horse.mp3"]);
        this.load.audio("cerdoS",["./recursos/audio/pig.ogg","./recursos/audio/pig.mp3"]);
        this.load.audio("ovejaS",["./recursos/audio/sheep.ogg","./recursos/audio/sheep.mp3"]);

    },
    create:function(){
        //redimensionamos la pantalla
        this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally=true;
        this.scale.pageAlignVertically=true;

        //colocamos el fondo
        this.fondo=this.game.add.sprite(0,0,"fondo");
        
        //Agregamos la data de los animales con la particularidad que ahora se incluye sonido
        var animalData=[
            {key:"pollo",texto:"POLLO",audio:"polloS"},
            {key:"cerdo",texto:"CERDO",audio:"cerdoS"},
            {key:"oveja",texto:"OVEJA",audio:"ovejaS"},
            {key:"caballo",texto:"CABALLO",audio:"caballoS"}
        ];
       
        var animales=this.game.add.group();
      
        var self=this; 
        var animal;

        animalData.forEach(function(elemento){
            animal=self.animales.create(-1000,self.game.world.centerY,elemeto.key);
            animal.anchor.setTo(0.5);
            //a customParams hemos agregado el sonido
            animal.customParams={texto:elemento.texto,sound:self.game.add.audio(elemento.audio)};
            animal.animations.add("animar",[0,1,2,1,0,1],3,false);

            //habilitamos los inputs por cada elemento del grupo
            animal.inputEnabled=true;
            animal.input.pixelPerfectClick=true;
            //agregamos el evento
            animal.events.onInputDown.add(self.animarAnimal,self);
        });
        //Ahora llamamos algun animal
        this.animalActual=this.animales.next();
        this.animalActual.position.set(this.game.world.centerX,this.game.world.centerY);
        //Agregamos el texto del  animal
        this.mostrarTexto(this.animalActual);



        //Agreamos las entradas de teclado
        this.flechaI=this.game.add.sprite(60,this.game.world.centerY,"flecha");
        this.flechaI.customParams={direccion:-1};
        this.flechaI.anchor.setTo(0.5);
        this.flechaI.scale.x=-1;
        this.flechaI.inputEnabled=true;
        this.flechaI.input.pixelPerfectClick=true;
        this.flechaI.events.onInputDown.add(this.cambiarAnimal,this);

        this.animalActual=this.animales.next();
        this.animalActual.position.set(this.game.world.centerX,this.game.world.centerY);

        //Agreamos las entradas de teclado
        this.flechaD=this.game.add.sprite(60,this.game.world.centerY,"flecha");
        this.flechaD.customParams={direccion:-1};
        this.flechaD.anchor.setTo(0.5);
        this.flechaD.inputEnabled=true;
        this.flechaD.input.pixelPerfectClick=true;
        this.flechaD.events.onInputDown.add(this.cambiarAnimal,this);



    },
    update:function(){},

    //funciones propias
    cambiarAnimal(sprite,evento){
       /* 1.Obtener la dirección de la flecha
        2.Obtener el siguiente animal
        3. Obtener el destino final del actual animal
        4.mover el actual hacia su destino final
        5. set el siguiente animal como el actual animal
        */
        if(this.isMoving){
            return false;
        }
        this.isMoving=true;
        //esconder texto
        this.textoAnimal.visible=false;
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


        var nuevoAnimalMovimiento=this.game.add.tween(nuevoAnimal);
       
        nuevoAnimal.to({x:this.game.world.centerX},1000);
    
        nuevoAnimalMovimiento.onComplete.add(function () { 
            this.isMoving=false;
            this.mostrarTexto(nuevoAnimal);
         },this);
       
         nuevoAnimalMovimiento.start();
         var actualAnimalMovimiento=game.add.tween(animalActual);
         actualAnimalMovimiento.to({x:this.game.world.centerX},1000);
         actualAnimalMovimiento.start();
 
       
         this.animalActual=nuevoAnimal;

    },
    mostrarTexto:function(animal){
        if(!this.textoAnimal){
            this.textoAnimal=this.game.add.text(this.game.width/2,this.game.height*0.85,"");
            this.textoAnimal.anchor.setTo(0.5);
        }
        this.textoAnimal.setText(animal.customParams.texto);
        this.textoAnimal.visible=true;
    },
    animarAnimal(sprite,evento){
        //esta es la forma de dar inicio animacion
        sprite.play("animar");
        sprite.customParams.sonido.play();
    }
    

}


juego.state.add("Inicio",e);
juego.state.start("Inicio");

