import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

const YearPicker = (props) => {
  let defaultYear = props.selected;
  const selectedItemHandler = (value) => {
    props.onYearChange(value.getFullYear().toString());
  };

  const clearFilterClickedHandled = () => {
    defaultYear = null;
    props.onYearChange(null);
  };

  return (
    props.isCarInfoVisible && (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <DatePicker
            views={["year"]}
            label="Select year"
            value={defaultYear}
            isCarInfoVisible={props.isCarInfoVisible}
            onChange={selectedItemHandler}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
          <Button
            variant="contained"
            color="error"
            onClick={clearFilterClickedHandled}
          >
            Clear Filter
          </Button>
        </Stack>
      </LocalizationProvider>
    )
  );
};

export default YearPicker;
