import { Component, OnInit } from "@angular/core";

import { User } from "src/app/interfaces/user.interface";
import { UserService } from "src/app/services/user.service";

@Component( {
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: [ "./signup.component.scss" ]
} )
export class SignupComponent implements OnInit {
    /* formSignUp: User = {
        name: "",
        email: "",
        password: "",
    }; */
    formSignUp!: User;
    showPassword: boolean = false;

    constructor(
        private usersService: UserService
    ) { }

    ngOnInit(): void {
        this.resetForm();
    }

    resetForm() {
        this.formSignUp = {
            name: "",
            email: "",
            password: "",
        };
      }

    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    onSubmit( event: any ) {
        event.preventDefault();
        event.stopPropagation();

        console.log( { formSignUp: this.formSignUp } );

        const hasUser = this.usersService.findUser( this.formSignUp.email );

        if ( hasUser ) {
            alert( "Usuário já registrado!" );
        } else {
            this.usersService.saveUser( this.formSignUp );
        }

        // this.usersService.saveUser( this.formSignUp );

        /* const usersList = this.usersService.getUsersList();
        console.log( { usersList } ); */

        /* this.formSignUp = {
            name: "",
            email: "",
            password: "",
        }; */
        this.resetForm();
        // event.reset();
    }
}
