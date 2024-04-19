import React, {useEffect, useState} from "react";
import { Container, Grid, Grow, Typography, AppBar } from "@material-ui/core";
import memories from './images/memories.jpg'
import Posts from "./components/posts/posts";
import Form from "./components/form/form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions/posts";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify-content="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container> 
            </Grow>
        </Container>
    )
}

export default App;