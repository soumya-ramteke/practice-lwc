import { LightningElement, api } from "lwc";

export default class ContactTile extends LightningElement {
  @api contact1;
  updateContact() {
    // firing an event upon click event of the button
    this.dispatchEvent(new CustomEvent("updatecontact"));
    // now the parent event would be listening for this event
    // where??
    // in <c-contact-tile onupdatecontact={handleUpdate}> in compositionBasics.html
    // listening to the event where we have the child component markup
  }
  updateContactName() {
    this.dispatchEvent(new CustomEvent("updatecontactname"));
  }
  // @api public methods , we will call this from the parent compositionBasics component
  @api randomMethod() {
    console.log("random method called from composition");
  }
  @api addTwo(num) {
    console.log(num + 2);
  }
}
