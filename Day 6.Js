//3. Create a class called person
class Person {
    constructor(firstName, lastName, age, department){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}`;
    }
}
let person1 = new Person("Harish", "K",24, "Developer");
console.log(person1.getPersonDetails());

//4.
class UberPrice {
    constructor(time, distance, baseprice, Cost) {
      this.time = time;
      this.distance = distance;
      this.baseprice = baseprice;
      this.Cost = Cost;
    }
  
    totalPrice() {
      return this.baseprice + (this.time * this.Cost) + this.distance;
    }
  }
  
  const myUber = new UberPrice(34,10,17,56);
  console.log(myUber.totalPrice());