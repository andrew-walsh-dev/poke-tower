import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Pokemon from '../models/Pokemon';

interface PartyProps {
  party: Pokemon[];
  healPlayerParty: () => void;
}

const Party: React.FC<PartyProps> = ({ party, healPlayerParty }) => {
  const navigate = useNavigate();
  const [playerParty, setPlayerParty] = useState(party);

  const handleBackClick = () => {
    navigate("/home");
  };

  const handleHealClick = () => {
    healPlayerParty();
    setPlayerParty([...party]);
  };

  return (
    <div>
      <h1>Your Party</h1>
      <div
        className="party-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {playerParty.map((pokemon, index) => (
          <Card key={index} sx={{ maxWidth: 345, margin: '1rem' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
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
                <Typography variant="body2" color="text.secondary">
                  HP: {pokemon.getCurrentHP()} / {pokemon.getMaxHP()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Attack: {pokemon.getAttack()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Exp: {pokemon.getExp()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Level: {pokemon.getLevel()}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={() => handleHealClick()}>Heal Party</button>
    </div>
  );
};

export default Party;
