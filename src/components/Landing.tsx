import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  return (
    <div className="Home">
      <h1>PokeTower</h1>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Start Game
        </Button>
      </Link>
    </div>
  );
}
