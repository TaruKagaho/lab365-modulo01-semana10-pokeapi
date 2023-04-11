import { Pokemon } from './../../../interfaces/pokemon.interface';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "src/app/services/pokemon.service";

@Component( {
    selector: "app-detail-pokemon",
    templateUrl: "./detail-pokemon.component.html",
    styleUrls: [ "./detail-pokemon.component.scss" ]
} )
export class DetailPokemonComponent implements OnInit {
    namePokemon!: string;
    pokemon!: Pokemon;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService,
    ) { }

    ngOnInit(): void {
        this.namePokemon = this.route.snapshot.params[ "namePokemon" ];

        console.log( "snapshot idProduto: ", this.namePokemon );

        this.pokemon = this.pokemonService.getCurrentPokemon();

        console.log( { pokemon: this.pokemon } );

    }
}
