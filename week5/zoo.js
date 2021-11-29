
class Animals {
    constructor(data){
        this.scientificName = data.sName;
        this.commonname = data.cName;
        this.birthday = data.birthday;
        this.ageYear = (new Date()).getFullYear() - this.birthday.getFullYear();
        this.endangered = data.endangered;
        this.diet = data.diet;
        this.location = "MEDA Zoo";
        this.weight = data.weight;
        this.sex = data.sex;

    }
    feed() {
        console.log('${this.commonName} is eating');
    }

    }

    class Mammal extends Animals {
        constructor (data, limbs,) {
            super(data);
            this.bloodType = "warm";
            this.limbs;
            this.pregnant;
            this.furType;
        }
} 

class Reptile extends Animals {
    constructor (data) {
        super();
        this.bloodType = "cold";
        this.pregnant;
        this.egg;
    }

    sleeps() {
        console.log("{$this.commonName is sleeping." )
    }
} 

class Avian extends Animals {
    constructor () {
        super();
        this.bloodType = "cold";
        this.pregnant;
        this.egg;
    }

    sleeps() {
        console.log("{$this.commonName is sleeping." )
    }
} 

let zoo = [];

let girraffe1 = new Mammal({
    sName:"Giraffa camelopardlis",
    cName: "Giraffa",
    alive: new Date(),
    age: 0,
    endangered: false,
    dangerous: false,
    diet: "plants",
    weightLB: 150,
    sex: "xy"
    
}, 4, false, true);

zooArray.push(girraffe1);

girraffe1.feed();

console.log(girraffe1);

let lion1 = new Mammal({
    sName:"Pantherea leo",
    cName: "Lion",
    birthday: new Date("2020-12-21"),
    age: 11,
    endangered: true,
    dangerous: true,
    diet: "meat",
    wieghtLB: 420,
    sex: "xy"
},4, false, true);

console.log(lion1);
lion1.feed();

zooArray.push(lion1);
let turtle1 = new Reptile({
    sName:"Galapagos Tutle",
    cName: "Galapagos Tutle",
    birthday: new Date("1950-12-21"),
    endangered: false,
    dangerous: false,
    diet: "plants",
    weightLB: 300,
    sex: "xx"
}, 4, true,10);

