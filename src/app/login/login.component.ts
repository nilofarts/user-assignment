import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(public fb: FormBuilder, public router: Router) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required])
        });
    }
    submit() {
        let users = [];
        users = JSON.parse(localStorage.getItem("users"));
        const email = this.loginForm.controls["email"].value;
        const password = this.loginForm.controls["password"].value;
        const index = users.find(ele => {
            return ele.email === email;
        });
        if (!index) {
            localStorage.setItem("isLoggedIn", "false");
            alert("User not found");
        } else if (index["password"] === password) {
            alert("Login successfull");
            localStorage.setItem("isLoggedIn", "true");
            this.router.navigate(["/Dashboard"]);
        } else {
            localStorage.setItem("isLoggedIn", "false");
            alert("Wrong password");
        }
    }

}
