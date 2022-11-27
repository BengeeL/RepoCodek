import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    constructor(private auth: AuthService,
        private router: Router) {}

    logOut(): void {
        this.auth.logOut();

        this.router.navigateByUrl('/');
    }
}