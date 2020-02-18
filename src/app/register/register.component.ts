import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerButton: boolean = true;
  public registerForm: FormGroup;
  checkedButton: boolean = true;
  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
        passwordConfirmation: new FormControl("", [Validators.required])
      },
      { validators: this.MatchPassword }
    );
  }

  MatchPassword(control: AbstractControl) {
    let password = control.get("password").value;
    let confirmPassword = control.get("passwordConfirmation").value;
    if (password != confirmPassword) {
      control.get("passwordConfirmation").setErrors({ ConfirmPassword: true });
    } else {
      return null;
    }
  }
  checked(event) {
    if (event.target.checked) {
      this.registerButton = false;
    } else {
      this.registerButton = true;
    }
  }
  onSubmit() {
    let users = [];
    users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      const user = {
        email: this.registerForm.controls["email"].value,
        password: this.registerForm.controls["password"].value
      };
      users.push(user);
    } else {
      users = [
        {
          email: this.registerForm.controls["email"].value,
          password: this.registerForm.controls["password"].value
        }
      ];
    }
    localStorage.setItem("users", JSON.stringify(users));
    alert("User added");
    this.router.navigate(["/login"]);
    localStorage.setItem("isRegistered", "true");
  }
}
