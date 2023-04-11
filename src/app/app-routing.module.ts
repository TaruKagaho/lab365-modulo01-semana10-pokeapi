import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
/* import { ListPokemonsComponent } from "./pages/pokemons/list-pokemons/list-pokemons.component";
import { DetailPokemonComponent } from "./pages/pokemons/detail-pokemon/detail-pokemon.component"; */

const appRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "login",
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "sign-up",
        component: SignupComponent,
    },
    /* {
        path: "pokemons",
        component: ListPokemonsComponent,
    },
    {
        path: "pokemons/detail-pokemon/:idPokemon",
        component: DetailPokemonComponent,
    }, */
    {
        path: "**",
        redirectTo: "login"
    },
];

@NgModule( {
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                // enableTracing: true
            }
        )
    ],
    exports: [
        RouterModule
    ]
} )
export class AppRoutingModule { }
