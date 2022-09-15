import {Component, OnInit} from '@angular/core';
import {UserService} from "../user-service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user-model";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

    user!: User
    visible = false;

    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.updateUserData()
    }

    updateUserData() {
        this.route.paramMap.subscribe(params => {
            this.userService.getUser(parseInt(<string>params.get('id'))).subscribe(data => {
                this.user = data
                this.visible = true;
            })
        })
    }

    submitForm() {
        this.userService.updateUser(this.user).subscribe(() => {
            this.updateUserData();
            this.router.navigate(["/users"]);
        });
    }

    return() {
        this.router.navigate(["/users"]);
    }

}
