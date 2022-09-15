import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared-module";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserListComponent} from "./user-list/user-list.component";

@NgModule({
    declarations: [UserEditComponent, UserListComponent],
    imports: [SharedModule]
})
export class UserModule {
}
