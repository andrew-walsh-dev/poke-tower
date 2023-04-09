import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Game from '../models/Game';

export default function Home(): JSX.Element {
    return (
        <div>
            <Link to="/starter" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                    Choose a starter pokemon
                </Button>
            </Link>
        </div>
    );
}
