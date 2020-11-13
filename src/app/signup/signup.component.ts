import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  firstName: string;
  lastName: string;
  country: string;
  language: string;
  age: number;
  email: string;
  password: string;

  constructor() {}

  ngOnInit(): void {}
  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.firstName}. My email is ${
      this.email
    }. My message is ${this.password}`;
    alert(allInfo);
  }
}
