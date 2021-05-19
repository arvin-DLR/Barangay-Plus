import React, { useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';


import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch();

    }, []);

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
};


export default App;