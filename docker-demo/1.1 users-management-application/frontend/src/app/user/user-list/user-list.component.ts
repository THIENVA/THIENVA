import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../user-model";
import {MatTableDataSource} from "@angular/material/table";
import {UserService} from "../user-service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'lastName', 'city', 'country', 'edit'];
    dataSource: MatTableDataSource<User> = new MatTableDataSource;
    users: User[] = [];
    @ViewChild('paginator') paginator!: MatPaginator;

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(users => {
            this.users = users
            this.dataSource = new MatTableDataSource<User>(this.users);
            this.dataSource.paginator = this.paginator;
        })
    }

    onEditClick(user: User) {
        this.router.navigate([`/user/edit/${user.id}`]);
    }

}
