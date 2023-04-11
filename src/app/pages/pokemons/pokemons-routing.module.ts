import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListPokemonsComponent } from "./list-pokemons/list-pokemons.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";

const pokemonsRoutes: Routes = [
    {
        path: "pokemons",
        component: ListPokemonsComponent,
    },
    {
        path: "pokemons/detail-pokemon/:namePokemon",
        component: DetailPokemonComponent,
    },
];

@NgModule( {
    imports: [
        RouterModule.forChild( pokemonsRoutes )
    ],
    exports: [
        RouterModule
    ]
} )
export class PokemonsRoutingModule { }
