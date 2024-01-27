console.log('hello from ts3');

const func=(name:string):void=>{     //коли нічого не повертаємо пишемо void

}

func('alla');

const func2=(name:string[])=>{     //передаємо масив елементів, якщо один елемент тоді - [string]

}

func2(['alla','hello'])


let a:number=5;

let b:string=a.toString();


// interface IUser {
//     name:string;
//     age:number;
//     house:number
//
// }
//
// let user:IUser={
//     name:'Alla',
//     age:26,
//     house:2
//
//
// }
//
// let user2:IUser={
//     name:'Anton',
//     age:30,
//     house:4
// }

//
// interface IUser <DATA> {                     //кастумне поле для кожного елемента
//     name:string;
//     age:number;
//     house:DATA
//
// }
//
// let user1:IUser<number[]>={
//     name:'ann',
//     age:12,
//     house:[1,2,3]
// };
//
// let user2:IUser<string>={
//     name:'vital',
//     age:33,
//     house:'hello'
// }


// interface IUser  {
//     name:string;
//     age:number;
//     house?:number                              //можна заповнювати поле і можна не заповнювати
//
// }


interface IUser  {
    name:string;
    age:number;
    house:number

}

let user1:Partial<IUser>={                      // можемо використати якийсь елемент з IUser необовязково всі
    name:'ilya'
}



class User {

    constructor( private name:string, age:number) {           //private ми використовуємо для приватності щоб зовнішньо не можна було добратись до цього поля

    }

    getName():string{
        return this.name
}
}

const user=new User('riki',55);
console.log(user.getName());

const users:User[]=[
    new User('natal', 78),
    new User('viki',65)
]


interface IElectric {
    enginePower:number,

    getLedStatus():boolean
}
class Car implements IElectric{
    enginePower:number

    constructor(private seats:number, private brand:string, private year:number, enginePower:number) {
        this.enginePower=enginePower
    }

    start():void{
        console.log('brrrrr')
    };
    getInfo():void{
        console.log(`Brand --${this.brand}, seats -- ${this.seats}, year-- ${this.year}`)
    }
    getLedStatus(): boolean {
        return true
    }
}

let car=new Car(5,'Mercedes',2023,100)
car.getInfo()




abstract class Shape{
    abstract perimeter():number
    abstract area():number
}

class Triangle extends Shape{
    constructor(private a:number, private b:number, private c:number) {
        super();
    }
    area(): number {
        return this.a*this.b/this.c;
    }

    perimeter(): number {
        return this.c/this.a+this.b;
    }

}

class Rectangle  extends Shape{
    constructor(private a:number, private b:number) {
        super();
    }
    area(): number {
        return this.a+this.b*2;
    }

    perimeter(): number {
        return this.a*this.b;
    }

}

const shapes:Shape[]=[
    new Triangle(2,4,5),
    new Rectangle(9,5),
    new Triangle(1,2,3)
]

for (let shape of shapes) {
    console.log(shape.constructor['name']);
    console.log(shape.area());
    console.log(shape.perimeter());
}