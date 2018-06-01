var juego= new Phaser.Game(640,360);

var e={
    preload:function(){
        this.load.image("fondo","./recursos/background.png");
        this.load.image("flecha","./recursos/arrow.png");
        /*
        Forma anterior de llamada

        this.load.image("caballo","./recursos/horse.png");
        this.load.image("oveja","./recursos/oveja.png");
        this.load.image("cerdo","./recursos/cerdo.png");
        this.load.image("pollo","./recursos/chicken.png");
    */
        //Ahora vamos a llamar a través de sprites
        this.load.spritesheet("pollo","./recursos/chicken_spritesheet.png",131,200,3);
        this.load.spritesheet("caballo","./recursos/horse_spritesheet.png",212,200,3);
        this.load.spritesheet("cerdo","./recursos/pig_spritesheet.png",297,200,3);
        this.load.spritesheet("oveja","./recursos/sheep_spritesheet.png",244,200,3);
    },
    create:function(){
        //redimensionamos la pantalla
        this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally=true;
        this.scale.pageAlignVertically=true;

        //colocamos el fondo
        this.fondo=this.game.add.sprite(0,0,"fondo");
        
        //Agregamos la data de los animales
        var animalData=[
            {key:"pollo",texto:"POLLO"},
            {key:"cerdo",texto:"CERDO"},
            {key:"oveja",texto:"OVEJA"},
            {key:"caballo",texto:"CABALLO"}
        ];
        //creamos el grupo
        var animales=this.game.add.group();
        //agregamos los elementos al grupo
        var self=this; //esto es por el contexo
        var animal;//esto es por que hemos de asignar métodos y propiedades

        animalData.forEach(function(elemento){
            animal=self.animales.create(-1000,self.game.world.centerY,elemeto.key);
            animal.anchor.setTo(0.5);
            animal.customParams={texto:elemento.texto};
            //esto implica crear una animacion dentro 
            //https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#add

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
        var nuevoAnimal, endX;
        if(sprite.customParams.direccion>0){
            //hemos revisado el valor de la direccion, con ello podemos saber si 
            //es la flecha izquierda o derecha
            //https://photonstorm.github.io/phaser-ce/Phaser.Group.html#next
            //nuevo animal se ha convertido en un sprite
            nuevoAnimal=this.animales.next();
            nuevoAnimal.x=-nuevoAnimal.width/2;
            endX=640+this.animalActual.width/2;
        }else{
            nuevoAnimal=this.animales.previous();
            nuevoAnimal.x=640+nuevoAnimal.width/2;
            endX=-this.animalActual.width/2;
        }
//https://photonstorm.github.io/phaser-ce/Phaser.GameObjectFactory.html#tween
//segun la descripcion del método crea un tween específico para este objeto (nuevo animal)
//que se almacena en nuevoAnimalMovimiento.

        var nuevoAnimalMovimiento=this.game.add.tween(nuevoAnimal);
        //https://photonstorm.github.io/phaser-ce/Phaser.Tween.html#to
        //el objeto tween requiere la propiedad x y su cambio :this.game.wor
        //he indicar por cuanto tiempo
        nuevoAnimal.to({x:this.game.world.centerX},1000);
        //https://photonstorm.github.io/phaser-ce/Phaser.Tween.html#onComplete
        //cuando la animación esté terminada
        nuevoAnimalMovimiento.onComplete.add(function () { 
            this.isMoving=false;
         },this);
        // https://photonstorm.github.io/phaser-ce/Phaser.Tween.html#start
         nuevoAnimalMovimiento.start();
         var actualAnimalMovimiento=game.add.tween(animalActual);
         actualAnimalMovimiento.to({x:this.game.world.centerX},1000);
         actualAnimalMovimiento.start();
 
         /*
         this.animalActual.x=endX;
         nuevoAnimal.x=this.game.world.centerX;*/
         this.animalActual=nuevoAnimal;

    },

    animarAnimal(sprite,evento){
        //esta es la forma de dar inicio animacion
        sprite.play("animar");

    }
    

}


juego.state.add("Inicio",e);
juego.state.start("Inicio");

