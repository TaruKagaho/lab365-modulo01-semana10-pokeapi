import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
/* import { ListPokemonsComponent } from "./pages/pokemons/list-pokemons/list-pokemons.component";
import { DetailPokemonComponent } from "./pages/pokemons/detail-pokemon/detail-pokemon.component"; */
// import { CardComponent } from './shared/components/card/card.component';
import { PokemonsModule } from './pages/pokemons/pokemons.module';

@NgModule( {
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        // ListPokemonsComponent,
        // DetailPokemonComponent,
        // CardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        PokemonsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
} )
export class AppModule { }
