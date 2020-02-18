import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from './guards/auth.guards';


const routes: Routes = [
  { path: "Dashboard", component: DashboardComponent,canActivate: [AuthGuard]},
  { path: "login", component: LoginComponent },
  { path: "", component: RegisterComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }