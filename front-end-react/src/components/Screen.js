import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import TextField from "@material-ui/core/TextField";

export default function Info_date() {
  const [formats, setFormats] = React.useState(() => ["ch"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <div>
      <h1>
        <font size="6">
          {" "}
          <center>
            <b>Add Availability for NameOfEvent</b>
          </center>
        </font>
      </h1>
      <h3 style={{ marginTop: 30, marginLeft: 30 }} size="100" align="center">
        Add your contact information
      </h3>
      <p align="center">
        <b>
          <u>Name</u>
        </b>
      </p>
      <TextField
        class="center"
        size="small"
        id="outlined-basic"
        variant="outlined"
        align="center"
      />
      <p align="center">
        <b>
          <u>Email</u>
        </b>
      </p>
      <TextField
        class="center"
        size="small"
        id="outlined-basic"
        variant="outlined"
        align="center"
      />
      <h3 style={{ marginTop: 30, marginLeft: 30 }} size="100" align="center">
        Select the time(s) you are available
      </h3>

      <ToggleButtonGroup
        class="center"
        value={formats}
        orientation="horizontal"
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="check">
          <CheckIcon />
        </ToggleButton>
        <ToggleButton value="check" aria-label="ch">
          <CheckIcon />
        </ToggleButton>
        <ToggleButton value="check" aria-label="bold">
          <CheckIcon />
        </ToggleButton>
        <ToggleButton value="check" aria-label="bold">
          <CheckIcon />
        </ToggleButton>
        <ToggleButton value="check" aria-label="bold">
          <CheckIcon />
        </ToggleButton>
        <ToggleButton value="check" aria-label="bold">
          <CheckIcon />
        </ToggleButton>
        <ToggleButton value="check" aria-label="bold">
          <CheckIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
