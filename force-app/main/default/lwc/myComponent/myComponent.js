import { LightningElement, api } from "lwc";

export default class MyComponent extends LightningElement {
  privateTitle;

  @api
  get title() {
    return this.privateTitle;
  }

  set title(value) {
    this.privateTitle = value.toUpperCase();
    this.setAttribute("title", this.privateTitle);
  }
}
/* When you take control of an attribute by exposing it as a public property, the attribute no longer appears in the HTML output by default. To pass the value through to the rendered HTML as an attribute (to reflect the property), define a getter and setter for the property and call the setAttribute() method.
 */
