import {Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private readonly keycloakService: KeycloakService) {
    }

    get username(): string {
        return this.keycloakService.getUsername();
    }

    async logout() {
        await this.keycloakService.logout();
    }
}
