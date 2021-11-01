// eslint-disable-next-line
import "./App.css";
import logo from "./logo.svg";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Fingerprint from "@mui/icons-material/Fingerprint";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Comming soon</p>

        <Stack direction="row" spacing={2}></Stack>

        <Stack direction="row" spacing={2}>
          <LoadingButton loading variant="contained" >
            Submit
          </LoadingButton>

          <LoadingButton loading variant="contained" loadingIndicator="wating..." >
            Submit
          </LoadingButton>

          <LoadingButton loadingPosition="start" loading variant="contained" startIcon={
            <SaveIcon />
          }>
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
