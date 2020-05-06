class Ninja {
    constructor(name, health, speed, strength){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(name);
    }
    showStats(){
        console.log ('Your ninja is named' + name +". They have "+ health +" health, "+ speed+ " speed, and "+ strength + " strength.");
    }
    drinkSake(){
        this.health=+10;
    }
}
