import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  // for displaying number of available interview spots
  const {spots, name, selected, setDay} = props;
  const formatSpots = function(spots) {
    if (spots === 0) {
      return "no spots remaining";
    }

    if (spots === 1) {
      return "1 spot remaining";
    } else return `${spots} spots remaining`;
  };

  // add class names based on props
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  return (
    <li
      data-testid="day"
      onClick={() => setDay(name)}
      className={dayClass}
    >
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}