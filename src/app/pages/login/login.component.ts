import { Component, OnInit } from "@angular/core";

import { User } from "src/app/interfaces/user.interface";
import { UserService } from "src/app/services/user.service";

type Login = Omit<User, "name">;

@Component( {
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: [ "./login.component.scss" ]
} )
export class LoginComponent implements OnInit {
    formLogin: Login = {
        email: "",
        password: "",
    };
    showPassword: boolean = false;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
    }

    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    onSubmit( event: any ) {
        event.preventDefault();
        event.stopPropagation();

        // console.log( { formLogin: this.formLogin } );
        // const isUserRegistered = this.userService.findUser( this.formLogin.email );
        const isUserRegistered = this.userService.getUser( this.formLogin.email );

        if ( !isUserRegistered ) {
            alert( "Usuário não encontrado! Favor fazer o login." );
        } else if ( this.formLogin.password !== isUserRegistered.password ) {
            alert( "Senha ou e-mail informado inválido!" );
        } else {
            this.userService.rememberUser( this.formLogin.email );
        }

        this.formLogin = {
            email: "",
            password: "",
        };
        // event.reset();
    }
}
