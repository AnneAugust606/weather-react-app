import React from "react";
import "./Icon.css";

export default function Icon(props) {
  let icon = "";
  if (props.icon === "03d" || props.icon === "03n") {
    icon = "./Icons/03dn.svg"; //scattered clouds day/night
  } else if (props.icon === "04d") {
    icon = "./Icons/03dn.svg"; //broken clouds day
  } else if (props.icon === "04n") {
    icon = "./Icons/03dn.svg"; //broken clouds night
  } else if (props.icon === "01d") {
    icon = "./Icons/03dn.svg"; //clear day
  } else if (props.icon === "01n") {
    icon = "./Icons/03dn.svg"; //clear night
  } else if (props.icon === "02d") {
    icon = "./Icons/03dn.svg"; //partly cloudy day
  } else if (props.icon === "02n") {
    icon = "./Icons/03dn.svg"; //partly cloudy night
  } else if (props.icon === "09d") {
    icon = "./Icons/03dn.svg"; //showers day
  } else if (props.icon === "09n") {
    icon = "./Icons/03dn.svg"; //showers night
  } else if (props.icon === "10d") {
    icon = "./Icons/03dn.svg"; //mod-heavy rain day
  } else if (props.icon === "10n") {
    icon = "./Icons/03dn.svg"; //rain night
  } else if (props.icon === "11d") {
    icon = "./Icons/03dn.svg"; //thunderstorm day
  } else if (props.icon === "11n") {
    icon = "./Icons/03dn.svg"; //thunderstorm night
  } else if (props.icon === "13d") {
    icon = "./Icons/03dn.svg"; //snow day
  } else if (props.icon === "13n") {
    icon = "./Icons/03dn.svg"; //snow night
  } else if (props.icon === "50d") {
    icon = "./Icons/03dn.svg"; //mist day
  } else if (props.icon === "50n") {
    icon = "./Icons/03dn.svg"; //mist night
  }

  return <img src={icon} alt="weather-icon" />;
}
