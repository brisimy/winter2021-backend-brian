//Review from Friday of Week4
class Employee {
    constructor() {
        this.name = null;
        this.age = null;
    }
    work() {
        console.log(this.name + " is working!")
    }
}

//Inheritance
class Shape {
    constructor(width, height){
        this.widthInches = width;
        this.heightInches = height;
        this.widthCm = this.widthInches * 2.54;
        this.heightCm = this.heightInches * 2.54;

    }
    getArea(){
        let area = this.widthInches * this.heightInches;
        return area;
    }
    getPerimeter(){
        let perimeter = (this.widthInches*2) + (this.heightInches * 2);
        return perimeter;
    }
}

//let myRectangle = new Rectangle(5,16)
//console.log(myRectangle.getArea())
//console.log(myRectangle.getPerimeter())

class Square extends Shape {
    constructor(side){
        super(side, side);
    }
}

class Triangle extends Shape {
    constructor(width, height){
        super(width, height)

    }
    getArea() {
        let area = (this.widthInches * this.heightInches)/2;
        return area;
    }
}

let mySpace = new Square(10);

console.log(mySpace.getArea());
console.log(mySpace.getPerimeter());