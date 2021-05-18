import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";
import Temperature from "./Temperature";
// import Rain from "./Rain";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h2 className="City">
        {props.data.city}, {props.data.country}
      </h2>
      <p className="date">
        <FormattedDate date={props.data.date} />
      </p>

      <Icon icon={props.data.icon} size={85} />
      <p className="description date">{props.data.description}</p>

      <div className="temperature">
        <p>
          <Temperature
            celsius={props.data.temperature}
            unit={props.unit}
            setUnit={props.setUnit}
          />
        </p>
      </div>
    </div>
  );
}
