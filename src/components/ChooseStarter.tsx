import { Card, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Move from '../models/Move';
import Pokemon from '../models/Pokemon';
import Type from '../models/Type';

interface StarterProps {
    setStarter: (pokemon: Pokemon) => void;
}

export default function ChooseStarter({ setStarter }: StarterProps): JSX.Element {
    const moves: Map<string, Move> = Move.getAll();
    const starterPokemon: Pokemon[] = Pokemon.getStarters(moves);
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
                        sx={{ flexGrow: 1, flexBasis: '20%', margin: '1rem' }}
                        onClick={() => handleCardClick(pokemon)}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="400"
                                image={pokemon.getSprite()}
                                alt={pokemon.getName()}
                            />
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

