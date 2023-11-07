class Person{
    constructor(name,age,country){
        this.name=name,
        this.age=age,
        this.country=country
    }
    display(){
        document.write(`The name is ${this.name} age ${this.age} country ${this.country} <br>`);
    }
}
let ans=new Person("Bala",25,"India");
let ans1=new Person("Kumar",35,"India");
ans.display()
ans1.display()



