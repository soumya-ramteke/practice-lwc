import { LightningElement } from "lwc";

export default class HelloForEach extends LightningElement {
  contacts = [
    {
      Id: "001",
      Name: "Soumya",
      Title: "Salesforce Admin"
    },
    {
      Id: "002",
      Name: "Priyal",
      Title: "Business Analyst"
    },
    {
      Id: "003",
      Name: "Sagarika",
      Title: "Angular Developer"
    }
  ];
}
