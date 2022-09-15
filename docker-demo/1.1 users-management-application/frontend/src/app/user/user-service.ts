import {Injectable} from '@angular/core';
import {User} from "./user-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const API_URL = environment.API_URL

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    getAllUsers() {
        return this.httpClient.get<User[]>(`${API_URL}/users`);
    }

    getUser(id: number) {
        return this.httpClient.get<User>(`${API_URL}/user/${id}`);
    }

    updateUser(userData: User) {
        return this.httpClient.put(`${API_URL}/user/${userData.id}`, userData);
    }

}
