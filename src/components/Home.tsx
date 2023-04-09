import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Pokemon from '../models/Pokemon';

interface HomeProps {
    party: Pokemon[];
}

export default function Home({ party }: HomeProps): JSX.Element {
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
                <Link to="/party" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        View your party
                    </Button>
                </Link>
            )}
        </div>
    );
}
