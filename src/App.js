import React, { useState } from 'react';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import SimpleTable from "./Components/table/table";
import text2table from './Components/text2tables/text2tables';
import './App.css';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    marginTop: theme.spacing(1),
    width: "350px"
  },
  button: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  table: {

  }
}));

function App() {
  const classes = useStyles();

  const [text, setText] = useState('');
  const [rows, setRows] = useState([]);

  const onTextChange = (e) => {
    setText(e.target.value);
  }

  const onTranslate = () => {
    if(text.length > 0) {
      const getTable = () => Object.entries(text2table(text)).map(([word, frequency]) => ({ word, frequency }));
      setRows(getTable());
    } else {
      alert('Please fill in the text');
    }
  }

  return (
    <Container component="main" maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Words
        </Typography>
        <TextareaAutosize className={classes.text} aria-label='Words' rowsMin={16} onChange={onTextChange} value={text} fullWidth maxLength={2048}/>
        <Button className={classes.button} variant="contained" color="primary" onClick={onTranslate}>Translate</Button>
        <SimpleTable className={classes.table} rows={rows} />
      </div>
    </Container>
  );
}

export default App;
