import { Component, Input, OnInit } from "@angular/core";
import { Pokemon } from "src/app/interfaces/pokemon.interface";

@Component( {
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: [ "./card.component.scss" ]
} )
export class CardComponent implements OnInit {
    @Input() pokemon!: Pokemon;
    @Input() isFullInfo!: boolean;

    constructor() { }

    ngOnInit(): void {
    }
}
