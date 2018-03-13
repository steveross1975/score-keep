import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
  // class Person {
  //   constructor(name = 'Giorgia', age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting() {
  //     return `Hi! I am ${this.name}.`
  //   }
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} year(s) old.`
  //   }
  // }
  //
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   getGreeting() {
  //     if(this.title) {
  //       return `Hi! I am ${this.name}. I work as a ${this.title}`
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  //   hasJob() {
  //     return !!this.title; //!! to transform a string into a boolean
  //   }
  // }
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'VueJS') {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   getGreeting() {
  //     if(this.preferredLanguage) {
  //       return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  //
  // let me = new Employee('Stefano', 42, 'Founder');
  // console.log(me.getGreeting());
  // console.log(me.hasJob());
  //
  // let myNewCollaboratorCV = new Programmer('Ciccio', 23, 'React');
  //   console.log(myNewCollaboratorCV.getGreeting());

});
