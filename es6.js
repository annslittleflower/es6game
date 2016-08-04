class Fighter {
    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health = this.health - damage;
        console.log(`${this.name}'s health now: ${this.health}`);
    }

    hit(enemy, point=0){
        enemy.setDamage(this.power * point);
    }
}

class ImprovedFighter extends Fighter{

    constructor(name, power, health) {
        super(name, power, health);
    }

    hit(enemy, point){
        super.hit(enemy, 2*point);
    }

}


const fight =(fighter, impFighter, ...strikes) => {
    for(let i = 0; i< strikes.length; i++){

        if(fighter.health <= 0 ){
            console.log(`${fighter.name} has been defeated by ${impFighter.name}`);
            return;
        }

        if(impFighter.health <= 0 ){
            console.log(`${impFighter.name} has been defeated by ${fighter.name}`);
            return;
        }

        fighter.hit(impFighter, strikes[i]);
//console.log(`${impFighter.name}: ${impFighter.health}`);
        impFighter.hit(fighter, strikes[i]);
//console.log(`${impFighter.name}: ${fighter.health}`);
    }
}



let f1 = new Fighter('vasia', 2, 100);
let f2 = new Fighter('petya', 3, 100);



let imF1 = new ImprovedFighter('imp1', 5, 100);
let imF2 = new ImprovedFighter('imp2', 6, 100)

fight(f1, imF1, 1,2,3,4,5)
