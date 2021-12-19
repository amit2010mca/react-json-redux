import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loadCars } from "../redux/actions";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Yearpicker from "./YearPicker";
import CarDetails from "./CarDetails";

const Home = () => {
  const [isCarInfoVisible, setIsCarInfoVisible] = useState(false);
  const [filteredYear, setFilteredYear] = useState("2010");

  //Center align style
  const centerStyle = {
    marginTop: "10px",
  };

  //Handlers
  const showCarInfoHandler = () => {
    setIsCarInfoVisible(true);
  };

  const hideCarInfoHandler = () => {
    setIsCarInfoVisible(false);
  };

  const filterChangeHander = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let dispatch = useDispatch();
  const { cars } = useSelector((state) => state.carsData);
  useEffect(() => {
    dispatch(loadCars());
  }, []);

  let filteredCarsData = cars.filter((filters) => {
    return filters.car_model_year.toString() === filteredYear;
  });
  console.log(filteredYear);
  if (filteredYear === null) {
    filteredCarsData = cars;
  }

  return (
    <>
      <div style={centerStyle}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Button
            variant="contained"
            onClick={showCarInfoHandler}
            color="success"
          >
            Show cars data
          </Button>
          <Button variant="outlined" onClick={hideCarInfoHandler} color="error">
            Hide cars data
          </Button>
          <Yearpicker
            selected={filteredYear}
            isCarInfoVisible={isCarInfoVisible}
            onYearChange={filterChangeHander}
          />
        </Stack>
      </div>

      <div style={centerStyle}>
        <CarDetails
          isCarInfoVisible={isCarInfoVisible}
          filteredCarsData={filteredCarsData}
          carsData={cars}
        />
      </div>
    </>
  );
};

export default Home;
