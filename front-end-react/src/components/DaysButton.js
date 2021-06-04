import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { addDays, removeDays } from "../redux/actions";

const DaysButton = (props) => {
  const [buttonColor, changeButtonColor] = useState("inherit");
  const [selected, changeSelection] = useState(false);

  const click = () => {
    if (selected === false) {
      changeSelection(true);
      changeButtonColor("primary");
      props.addDay(props.name);
    } else {
      changeSelection(false);
      changeButtonColor("inherit");
      props.removeDay(props.name);
    }
  };

  return (
    <div
      style={{
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Button
        variant="contained"
        color={buttonColor}
        onClick={click}
        className="btn"
        buttonStyle={{ borderRadius: 25 }}
        style={{
          marginTop: "5vh",
          borderRadius: 25,
          width: "8vw",
        }}
      >
        {props.name}
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    daysArray: state.eventDetails.daysList,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addDay: (event) => dispatch(addDays(props.name)),
    removeDay: (event) => dispatch(removeDays(props.name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DaysButton);
