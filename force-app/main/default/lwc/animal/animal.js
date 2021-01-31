import { LightningElement } from "lwc";

export default class Animal extends LightningElement {
  name = "cat";
  //   age = 1;
  originalAge = 1;
  newAge = 0;

  get age() {
    if (this.originalAge > 20) {
      this.originalAge = 20;
      // return 20;
    }
    return this.originalAge;
  }

  set age(value) {
    // if (value > 20) {
    //   throw new Error("invalid age for a cat");
    // }
    this.originalAge = value;
  }

  updateAge(event) {
    this.newAge = event.target.value;
    console.log(this.newAge);
  }

  updateOriginalAge() {
    // old value- getter
    // new value- setter
    this.age = this.newAge;
  }
}
