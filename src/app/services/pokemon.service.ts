import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Pokemon } from "../interfaces/pokemon.interface";

type ResultsProps = {
    name: string;
    url: string;
};

interface ResultsData {
    results: ResultsProps[];
}

interface IResponseData {
    results: [
        {
            name: string;
        }
    ];
}

type ResponseDataType = {
    results: [
        {
            name: string;
        }
    ];
};

@Injectable( {
    providedIn: "root"
} )
export class PokemonService {
    private dataResults!: ResultsProps[];
    private pokemonsList!: Pokemon;
    private url: string = "https://pokeapi.co/api/v2/pokemon/";
    private pokemon!: Pokemon;

    constructor(
        private http: HttpClient
    ) { }

    /* getData( offset: number = 0 ): void {
        const urlGet = `${ this.url }pokemon/?offset=${ offset }&limit=20`;

        this.http.get<ResultsData>( urlGet ).subscribe( data => {
        // const teste = this.http.get<any>( urlGet ).subscribe( data => {
            // console.log( { results: data.results } );
            this.dataResults = data.results;
        } );
        // console.log( { teste } );

        // console.log( { dataResults: this.dataResults } );
        // return this.dataResults;
    } */
    getData( offset: number = 0 ): Observable<any> {
        const urlData = `${ this.url }?offset=${ offset }&limit=20`;

        return this.http.get<ResultsData>( urlData );
    }

    /* getListPokemons(): ResultsProps[] {
        return this.dataResults;
    } */
    getListPokemons( offset: number = 0 ) {
        const urlData = `${ this.url }?offset=${ offset }&limit=20`;

        return this.http.get<IResponseData>( urlData );
    }

    getPokemonInfos( name: string ): Observable<any> {
        const urlPokemonInfos = `${ this.url }${ name }`;

        return this.http.get( urlPokemonInfos );
    }

    getPokemon( id: number ): Observable<any> {
        const urlPokemonInfos = `${ this.url }${ id }`;

        return this.http.get( urlPokemonInfos );
    }

    getCurrentPokemon() {
        const pokemonJson = localStorage.getItem( "pokemonChoosed" ) || "{}";

        this.pokemon = JSON.parse( pokemonJson );

        return this.pokemon;
    }

    setCurrentPokemon( pokemonData: Pokemon ) {
        const pokemonStringfy = JSON.stringify( pokemonData );
        // console.log( { pokemonStringfy } );
        localStorage.setItem( "pokemonChoosed", pokemonStringfy );
        // return this.pokemon;
    }
}
