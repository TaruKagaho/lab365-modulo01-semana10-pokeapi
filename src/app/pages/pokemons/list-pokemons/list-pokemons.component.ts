import { Component, OnInit } from "@angular/core";

import { Pokemon } from "src/app/interfaces/pokemon.interface";
import { PokemonService } from "src/app/services/pokemon.service";

type ResultsProps = {
    name: string;
    url: string;
};

interface ResultsData {
    results: ResultsProps[];
}

@Component( {
    selector: "app-list-pokemons",
    templateUrl: "./list-pokemons.component.html",
    styleUrls: [ "./list-pokemons.component.scss" ]
} )
export class ListPokemonsComponent implements OnInit {
    bruteData: any;
    dataResults!: ResultsProps[];
    pokemonsList!: Pokemon[];
    testData = { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" };
    testPokemon!: Pokemon;
    // testPokemon = {} as Pokemon;

    constructor(
        private pokemonService: PokemonService
    ) {
        this.pokemonsList = [];
    }

    ngOnInit(): void {
        /* this.pokemonService.getData().subscribe( data => {
            this.dataResults = data.results;
        } ); */
        /* this.pokemonService.getListPokemons(); */
        /* this.bruteData = this.pokemonService.getListPokemons();
        console.log( { bruteData: this.bruteData } ); */
        // this.testPokemon = this.getPokemonInfo( this.testData );
        /* const test = this.getPokemonInfo( this.testData );
        console.log( { test } ); */
        this.getPokemonList();
        console.log( { pokemonsList: this.pokemonsList } );
    }

    getDataResults() {
        return this.dataResults;
    }

    /* getPokemonList(): Pokemon[] {
        const tempArray = this.dataResults.map<Pokemon>( data => {
            this.pokemonService.getPokemonInfos( data.name ).subscribe(
                infos => {
                    const pokemon: Pokemon = {
                        nome: infos.name,
                        imagem: infos.sprites.other[ "official-artwork" ].front_default,
                        altura: infos.height,
                        peso: infos.weigth,
                        // habilidades: [
                        //     infos.abilities[0].ability.name,
                        //     infos.abilities[1].ability.name,
                        // ],
                        habilidades: infos.abilities.map( ability => ability.name ),
                    };

                    return pokemon;
                }
            );
        } );

        return this.pokemonsList;
    } */
    getPokemonList() {
        /* this.pokemonService.getListPokemons().forEach( data => {
            this.pokemonService.getPokemonInfos(data.)
        } ); */
        this.pokemonService.getListPokemons().subscribe( ( data: any ) => {
            // this.dataResults = data.results;
            data.results.forEach( ( item: any ) => {
                this.pokemonService.getPokemonInfos( item.name ).subscribe(
                    infos => {
                        const pokemon: Pokemon = {
                            nome: infos.name,
                            imagem: infos.sprites.other[ "official-artwork" ].front_default,
                            altura: infos.height,
                            peso: infos.weight,
                            habilidades: infos.abilities.map( ( abilities: any ) =>
                                abilities.ability.name
                            ),
                        };

                        this.pokemonsList.push( pokemon );
                    }
                );
            } );
        } );

        /* this.dataResults?.forEach( item => {
            this.pokemonService.getPokemonInfos( item.name ).subscribe(
                infos => {
                    const pokemon: Pokemon = {
                        nome: infos.name,
                        imagem: infos.sprites.other[ "official-artwork" ].front_default,
                        altura: infos.height,
                        peso: infos.weigth,
                        habilidades: infos.abilities.map( ( ability: any ) =>
                            ability.name
                        ),
                    };

                    this.pokemonsList.push( pokemon );
                }
            );
        } ); */
    }

    getPokemonInfo( data: any ) {
        /* let testPokemon01: Pokemon = {
            nome: "",
            imagem: "",
            peso: 0,
            altura: 0,
            habilidades: [],
        }; */
        // let testPokemon01!: Pokemon;
        // let testPokemon01 = {} as Pokemon;

        return this.pokemonService.getPokemonInfos( data.name ).subscribe(
            infos => {
                // console.log( { infos } );

                const pokemon: Pokemon = {
                    nome: infos.name,
                    imagem: infos.sprites.other[ "official-artwork" ].front_default,
                    altura: infos.height,
                    peso: infos.weight,
                    // habilidades: [
                    //     infos.abilities[0].ability.name,
                    //     infos.abilities[1].ability.name,
                    // ],
                    habilidades: infos.abilities.map( ( item: any ) => {
                        // console.log( { item_ability_name: item.ability.name } );
                        // console.log( { item } );
                        // console.log( item );

                        return item.ability.name;
                    } ),
                };
                /* const pokemon: Pokemon = {
                    name: infos.name,
                    sprites: infos.sprites.other[ "official-artwork" ].front_default,
                    height: infos.height,
                    weight: infos.weight,
                    abilities: infos.abilities.map( ( item: any ) => {
                        // console.log( { item_ability_name: item.ability.name } );
                        // console.log( { item } );
                        // console.log( item );

                        return item.ability.name;
                    } ),
                }; */
                // console.log( { pokemon } );
                this.testPokemon = pokemon;
                // return pokemon;
                return this.testPokemon;
                // return testPokemon01 = { ...pokemon };
            }
        );
        /* console.log( { testData } );
        return testData; */
        /* console.log( { testPokemon01 } );
        return testPokemon01; */
    }

    /* getPokemons( qtdePokemons: number ) {
        for (let i = 0; i < qtdePokemons; i++) {
            let data = {} as Pokemon;

            this.pokemonService.getPokemon(i).subscribe();
            const element = array[i];

            ;
        }
    } */

    setChoosedPokemon( choosedPokemon: Pokemon ) {
        this.pokemonService.setCurrentPokemon( choosedPokemon );
    }
}
