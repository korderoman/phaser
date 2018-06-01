var juego= new Phaser.Game(640,360,Phaser.Auto);

var eJ={
    preload:function(){
        this.load.image("fondo","./recursos/background.png");
        this.load.image("cerdo","./recursos/pig.png");
        this.load.image("pollo","./recursos/chicken.png");
        this.load.image("caballo","./recursos/horse.png");
        this.load.image("oveja","./recursos/sheep.png");
        this.load.image("flecha","./recursos/arrow.png");

    },
    create:function(){
        //Hacemos que sea escalable a cualquier medida
        this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        //centramos el juego
        this.scale.pageAlignHorizontally=true;
        this.scale.pageAlignVertically=true;
        this.fondo=this.game.add.sprite(0,0,"fondo");
        /*Hasta el momento hemos trabajado con un sprite, pero algunas veces,necesitaremos trabajar con más de un sprite a la vez, como por ejemplo las balas
        de los enemigos, o un grupo de animales, es por ello que phaser nos provee una clase que nos permite trabajar con toda una colección de objetos y 
        otorgarles funcionalidad a las vez*/
        /*Entonces lo primero que debemos hacer es crear un array el cual contiene diferentes objetos pero tienen las mismas propiedas, la propiedad key, hace 
        referencia al key identificador de la imagen la propiedad text, será el texto que aparecerá  luego en la imagen */

        var animalData=[
            {key:"pollo",text:"POLLO"},
            {key:"caballo",text:"CABALLO"},
            {key:"cerdo",text:"CERDO"},
            {key:"oveja",text:"OVEJA"},

        ];
        /*Vamos a recorrer la data a través de un bucle foreach el seguimos la sintaxis proporcionada por javascript
        https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach
        Antes de ellos podemos de crear un grupo


        */
        this.animales=this.game.add.group();
        //recorremos el array y asignamos los valores del array al grupo, el parámetro elemento representa a cada elemento del arreglo
        //debemos de hacer un artilugio, para asignar el alcance de la variable
        var self=this;
        //si inicialmente emplearamos this.animales..... no se podría ejecutar por el contexto en el cual se desplegaria animales.
        //podemos crear una variable animal;
        var animal;
        animalData.forEach(function(elemento){
            //al recorrer cada elemento hemos de crear un sprite  dentro del grupo
            animal=self.animales.create(-1000,this.game.world.centerY,elemento.key);//obtenemos un sprite, el objeto principal para un juego
            animal.customParams={text:elemento.text};
            animal.anchor.setTo(0.5);
            animal.inputEnabled=true;
            animal.input.pixelPerfectClick=true;
            //he aquí la importancia del contexto, como es en el contexto de juego, debemos de seguir usando el artiliguo de self.
            animal.events.onInputDown.add(self.animarAnimal,self);
        });
        /*Ahora seteamos el primer elemento del array */
        this.animalActual=this.animales.next();
        this.animalActual.position.set(this.game.world.centerX,this.game.world.centerY)
           
        
        /*
        this.cerdo=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"cerdo");
        this.cerdo.anchor.setTo(0.5);
*/
        //Habilitamos funciones de inputs para ello primero creamos las flechas
        this.flechaI=this.game.add.sprite(580,this.game.world.centerY,"flecha");
        this.flechaI.anchor.setTo(0.5);
        this.flechaI.customParams={direccion:-1}
        this.flechaD=this.game.add.sprite(60,this.game.world.centerY,"flecha");
        this.flechaD.anchor.setTo(0.5);
        this.flechaD.scale.x=-1;
        this.flechaD.customParams={direccion:1}
        //habilitamos los inputs
        this.flechaI.inputEnabled=true;
        this.flechaI.input.pixelPerfectClick=true;
        this.flechaI.events.onInputDown.add(this.cambiarAnimal,this);
        //lo mismo para la derecha
        this.flechaD.inputEnabled=true;
        this.flechaD.input.pixelPerfectClick=true;
        this.flechaD.events.onInputDown.add(this.cambiarAnimal,this);


    },
    update:function(){
        
    },

    //funciones propias
    cambiarAnimal:function(sprite,evento){
        console.log("Hiciste click");
    },

    animarAnimal:function(){
        console.log("Estamos animando");
    }
}

juego.state.add("Granja",eJ);
juego.state.start("Granja");