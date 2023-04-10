import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Pokemon from '../models/Pokemon';

interface HomeProps {
    party: Pokemon[];
    play: () => void;
}

export default function Home({ party, play }: HomeProps): JSX.Element {
    return (
        <div>
            {party.length === 0 && (
                <Link to="/starter" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        Choose a starter pokemon
                    </Button>
                </Link>
            )}
            {party.length > 0 && (
                <div>
                    <Link to="/party" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            View your party
                        </Button>
                    </Link>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => play()}
                        style={{ marginLeft: '10px' }}
                    >
                        Start Battle
                    </Button>
                </div>
            )}
        </div>
    );
}
