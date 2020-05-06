class Ninja {
    constructor(name, health, speed, strength){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log (`Your ninja is named ${this.name}. They have ${this.health} health, ${this.speed} speed, and ${this.strength} strength. A sensei has ${this.constructor.wisdom} wisdom.`);
    }
    drinkSake(){
        this.health+=10;
    }
}
class Sensei extends Ninja{
    constructor (name, health, speed, strength, wisdom){
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake()
        console.log("Wisdom, bro!")
    }
}