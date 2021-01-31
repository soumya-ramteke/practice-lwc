import { LightningElement, track } from "lwc";

export default class CompositionBasics extends LightningElement {
  // To tell the framework to observe changes to the properties of an object or to the elements of an array, decorate the field with @track.
  // Fields are reactive. Expandos are not reactive.

  @track contact = {
    Name: "Amy Taylor",
    Title: "VP of Engineering"
  };
  handleUpdateContact() {
    this.contact = {
      Name: "Michael Jones",
      Title: "VP of Sales"
    };
    console.log("handleUpdateContact called, contact:" + this.contact);
    // try just changing the just the title of the contact
    // this.contact.Title = "ASE";
    // console.log(this.contact.Title);
    // console.log(this.contact);
    // the changes doesn't reflect in page,  contact title is changed when we print in console
    // if we define it as @track contact then it listens to changes and updates the name
  }
  handleUpdateContactName() {
    // we don't mark contact as @track, the value of name would be changed but won't be reflected
    this.contact.Name = "Soumya Ramteke";
    console.log(
      "handleUpdateContact called, contact.Name:" + this.contact.Name
    );
    console.log("handleUpdateContact called, contact:" + this.contact);
  }

  handleButtonClick() {
    // calling child component's method
    this.template.querySelector("c-contact-tile").randomMethod();
  }
  handleAnotherButtonClick() {
    this.template.querySelector("c-contact-tile").addTwo(15);
  }
}

/* Lightning Web Components observes changes to the internal values of these types of fields:
      Primitive values
      Plain objects created with {…} and decorated with @track
      Arrays created with [] and decorated with @track
   */
