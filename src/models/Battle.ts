import Pokemon from "./Pokemon";
import Type, { typeEffectivenessMatrix } from "./Type";

class Battle {
    private playerTeam: Pokemon[];
    private opponentTeam: Pokemon[];

    constructor(playerTeam: Pokemon[], opponentTeam: Pokemon[]) {
        this.playerTeam = playerTeam;
        this.opponentTeam = opponentTeam;
    }

    getMoveEffectivenessMultiplier(moveType: Type, defenderType: Type): number {
        const effectiveness: string = typeEffectivenessMatrix[moveType][targetType];
        switch(effectiveness) {
            case "superEffective":
        }
    }

}

export default Battle;