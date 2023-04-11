import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonsRoutingModule } from "./pokemons-routing.module";
import { ListPokemonsComponent } from "./list-pokemons/list-pokemons.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { CardComponent } from "src/app/shared/components/card/card.component";

@NgModule( {
    declarations: [
        CardComponent,
        ListPokemonsComponent,
        DetailPokemonComponent,
    ],
    imports: [
        CommonModule,
        PokemonsRoutingModule
    ]
} )
export class PokemonsModule { }
