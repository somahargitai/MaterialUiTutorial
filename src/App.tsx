import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  GridList,
  GridListTile,
  Paper,
  Typography
} from "@material-ui/core/";

import { GridPaper } from "./style";
import logo from "./logo.svg";
import burgers   from './images/burgers.jpg';
import breakfast from './images/breakfast.jpg';
import "./App.css";

const App: React.FC = () => {
  const tileData = [
    {
      img: burgers,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: breakfast,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: burgers ,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: breakfast,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Container maxWidth="sm">
        {/* Start Here */}
        <h2>Button and Typography</h2>
        <Button variant="contained" color="primary">
          This is a Button
        </Button>

        <Typography>
          {" "}
          Typography is for writing long texts. Under this text we will try out
          Button Component's API. By clicking{" "}
          <Button
            variant="text"
            color="default"
            href="https://material-ui.com/api/button/"
          >
            here
          </Button>{" "}
          you can check the documentation of Button API{" "}
        </Typography>
        <Button variant="contained" color="secondary">
          Same with secondary color
        </Button>

        <Button variant="outlined" color="default">
          color:default, variant:outlined
        </Button>

        <Button variant="text" color="secondary">
          color:secondary, variant:text
        </Button>
        <Button variant="outlined" color="secondary" disabled={true}>
          disabled
        </Button>

        <Button
          color="secondary"
          disableFocusRipple={true}
          fullWidth={true}
          size="large"
          variant="contained"
          href="http://localhost:3000/"
        >
          A more advanced Button
        </Button>

        <Box color="text.hint">
          <Button>a Button in a Box</Button>
        </Box>

        <h2>Grid is a 12-column system for creating spaces</h2>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <GridPaper>xs=12</GridPaper>
          </Grid>
          <Grid item xs={6}>
            <GridPaper>xs=6</GridPaper>
          </Grid>
          <Grid item xs={6}>
            <GridPaper>xs=6</GridPaper>
          </Grid>
          <Grid item xs={3}>
            <GridPaper>xs=3</GridPaper>
          </Grid>
          <Grid item xs={3}>
            <GridPaper>xs=3</GridPaper>
          </Grid>
          <Grid item xs={3}>
            <GridPaper>xs=3</GridPaper>
          </Grid>
          <Grid item xs={3}>
            <GridPaper>xs=3</GridPaper>
          </Grid>
        </Grid>

        <h2>GridList for <a href='https://material-ui.com/components/grid-list/'>images</a></h2>
        <div>
          <GridList cellHeight={160} cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </div>
  );
};

export default App;
