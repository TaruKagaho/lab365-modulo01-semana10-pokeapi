import { Injectable } from "@angular/core";

import { User } from "../interfaces/user.interface";

@Injectable( {
    providedIn: "root"
} )
export class UserService {
    users!: User[];

    constructor() {
        this.getUsersList();
    }

    getUsersList() {
        const usersListJson = localStorage.getItem( "users" ) ?? "[]";
        // console.log( { usersListJson } );

        this.users = JSON.parse( usersListJson );
        // console.log( { users: this.users } );

        return this.users;
    }

    saveUser( user: User ): void {
        this.users.push( user );

        const usersStringfy = JSON.stringify( this.users );

        localStorage.setItem( "users", usersStringfy );
    }

    getUser( email: string ): User | undefined {
        return this.users.find( user => user.email === email );
    }

    findUser( email: string ): boolean {
        return this.users.some( user => user.email === email );
    }

    rememberUser( email: string ) {
        const user = this.getUser( email );

        const userStringfy = JSON.stringify( user );

        localStorage.setItem( "userActive", userStringfy );
    }
}
