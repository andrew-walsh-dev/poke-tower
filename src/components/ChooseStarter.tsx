import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Move from '../models/Move';
import Pokemon from '../models/Pokemon';
import Type from '../models/Type';

export default function ChooseStarter({ setStarter }): JSX.Element {
    const starterPokemon: Pokemon[] = generateStarters();
    const navigate = useNavigate();

    const handleCardClick = (pokemon: Pokemon) => {
        setStarter(pokemon);
        navigate('/home');
    };

    return (
        <>
            <h1>Choose a starter Pokémon</h1>
            <div
                className="starter-pokemon-container"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                }}
            >
                {starterPokemon.map((pokemon, index) => (
                    <Card
                        key={index}
                        sx={{ flexGrow: 1, flexBasis: '30%', margin: '1rem' }}
                        onClick={() => handleCardClick(pokemon)}
                    >
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pokemon.getName()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Type: {pokemon.getType()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Moves:
                                    <ul>
                                        {pokemon.getMoveset().map((move, moveIndex) => (
                                            <li key={moveIndex}>{move.getName()}</li>
                                        ))}
                                    </ul>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </>
    );
}

function generateStarters(): Pokemon[] {
    const quickAttack: Move = new Move("Quick Attack", Type.Normal, 5);
    const thunderbolt: Move = new Move("Thunderbolt", Type.Electric, 15);
    const pikachu: Pokemon = new Pokemon(
        "Pikachu",
        Type.Electric,
        [quickAttack, thunderbolt],
        30,
        1,
        0,
        1,
        ""
    );
    const scratch: Move = new Move("Scratch", Type.Normal, 10);
    const ember: Move = new Move("Ember", Type.Fire, 15);
    const charmander: Pokemon = new Pokemon(
        "Charmander",
        Type.Fire,
        [scratch, ember],
        30,
        1,
        0,
        1,
        ""
    );
    const tackle: Move = new Move("Tackle", Type.Normal, 10);
    const vineWhip: Move = new Move("Vine Whip", Type.Grass, 15);
    const bulbasaur: Pokemon = new Pokemon(
        "Bulbasaur",
        Type.Grass,
        [tackle, vineWhip],
        30,
        1,
        0,
        1,
        ""
    );
    const waterGun: Move = new Move("Water Gun", Type.Water, 15);
    const squirtle: Pokemon = new Pokemon(
        "Squirtle",
        Type.Water,
        [tackle, waterGun],
        30,
        1,
        0,
        1,
        ""
    );
    return [pikachu, charmander, bulbasaur, squirtle];
}

