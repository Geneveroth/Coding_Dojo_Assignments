class Card{
    constructor(name, cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        target.res-=this.power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude 
    }
    play(target) {
        if( target instanceof Unit ) {
            target[this.stat] += this.magnitude
            
        } else {
            throw new Error( "Target must be a unit!" );
        }
        return target[this.stat]
    }
}

class Player{
    constructor(name,pool){
        this.name=name;
        this.pool=pool;
    }
    summon(buff) {
        this.pool -= (buff.cost)
        return `${this.name} uses ${buff.name} and has ${this.pool} points remaining to spend.`
    }
    play_card (buff, target) {
        if (buff instanceof Effect){
            this.pool-=(buff.cost);
            buff.play(target);
            target[this.stat]+= this.magnitude;
            return `${this.name} plays ${buff.name} on ${target.name}, increasing its ${buff.stat} to ${target[buff.stat+buff.magnitude]}. ${this.name} has ${this.pool} points remaining to play.`
        }
        else {
            buff.attack(target)
            return `${this.name} uses ${buff.name} on ${target.name}, reducing its power to ${target.res}`
        }
    }
}
const player1= new Player("Player 1", 20);
const player2 = new Player("Player 2", 20);

const redBelt=new Unit("Red Belt Ninja", 3, 3, 4);
const blackBelt= new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", 'resilience', 3 );
const unhandled = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", 'resilience', -2);
const pair = new Effect("Pair Programming", 3, "Increase target's power by 2", 'power', 2);

//The Game
console.log(player1.summon(redBelt));
console.log(player1.play_card(hardAlgo, redBelt))
console.log(player2.summon(blackBelt))
console.log(player2.play_card(unhandled, redBelt))
console.log(player1.play_card(pair, redBelt))
console.log(player1.play_card(redBelt, blackBelt))
