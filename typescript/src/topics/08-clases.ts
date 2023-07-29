

export class Person {
   //public name: string;
   //public address: string;

     constructor(
         public name:string, 
         public address:string = "No address"
         ) {
      //  this.name = name;
      //  this.address = address;
     }
}

//export class Hero extends Person {
//   constructor(
//      public name:string, 
//      public address:string,
//      public alterEgo: string
//   ) {
//     super(name, "New York");
//   }
//}

export class Hero {

   constructor(
      public name:string, 
      public age:number,
      public alterEgo: string,
      public person:Person,
   ) {
      //this.person = new Person(name)
   }
}


const tony = new Person("ironman","New York")
const ironman = new Hero("ironman", 45, 'Tony',tony)

console.log(ironman);