import Pokemon from "./Pokemon";

class Game {
    private playerParty: Pokemon[];

    constructor() {
        this.playerParty = [];
        this.addPokemonToPlayerParty = this.addPokemonToPlayerParty.bind(this);
    }

    public getPlayerParty(): Pokemon[] {
        return this.playerParty;
    }

    public addPokemonToPlayerParty(pokemon: Pokemon): void {
        this.playerParty.push(pokemon);
    }
}

export default Game;