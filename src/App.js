// eslint-disable-next-line
import "./App.css";
import logo from "./logo.svg";

import AdbIcon from '@mui/icons-material/Adb';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Fingerprint from "@mui/icons-material/Fingerprint";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Comming soon</p>

        <FormGroup>
          <FormControlLabel control={<Checkbox color="primary"/>} label="are you sure?"/>

          <FormControlLabel control={<Checkbox icon={<AdbIcon />} checkedIcon={<Favorite />} color="primary"/>} label="are you sure?"/>

          <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="primary"/>} label="are you sure?"/>
        </FormGroup>
        
        <Stack direction="row" spacing={2}>
          <Checkbox color="warning" defaultChecked/>
          <Checkbox color="primary" />
          <Checkbox color="warning" checked disabled/>
          <Checkbox color="warning" disabled/>

        </Stack>
        

        <ButtonGroup color="secondary" size="large" variant="contained">
          <Button key="1">1</Button>
          <Button key="2">2</Button>
          <Button key="3">3</Button>
        </ButtonGroup>



        <Stack direction="row" spacing={2}>
          <LoadingButton loading variant="contained">
            Submit
          </LoadingButton>

          <LoadingButton
            loading
            variant="contained"
            loadingIndicator="wating..."
          >
            Submit
          </LoadingButton>

          <LoadingButton
            loadingPosition="start"
            loading
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Submit
          </LoadingButton>
        </Stack>
        <Stack direction="row" spacing={2}>
          <IconButton aria-label="delete" color="secondary">
            <DeleteIcon />
          </IconButton>

          <IconButton size="large" color="primary">
            <AlarmIcon fontSize="inherit" />
          </IconButton>

          <IconButton color="success">
            <Fingerprint />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            startIcon={<DeleteIcon />}
            size="small"
            color="warning"
            variant="text"
          >
            Clear
          </Button>
          <Button
            endIcon={<SendIcon />}
            size="small"
            color="warning"
            variant="text"
          >
            Send
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button size="small" color="warning" variant="text">
            Done
          </Button>
          <Button size="medium" color="success" variant="text">
            Done
          </Button>
          <Button size="large" color="error" variant="text">
            Done
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button color="success" variant="contained">
            Done
          </Button>
          <Button color="error" variant="contained">
            Fail
          </Button>
          <Button color="warning" variant="contained">
            Warning
          </Button>
          <Button color="secondary" variant="contained">
            Secondary
          </Button>
          <Button color="primary" variant="contained">
            Primary
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="text">text</Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined" disabled>
            outlined
          </Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
