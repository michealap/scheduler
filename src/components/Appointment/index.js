import React from 'react';
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

export default function Appointment(props) {
  const {time, interview } = props;
  // const formatAppointments = () => {
  //   return time ? `Appointment at ${time}` : `No Appointments`;
  // }
  return (
    <article className="appointment">
      {/* {formatAppointments()} */}
      <Header time={time} />
      {interview ? <Show student={interview.student} interviewer={interview.interviewer} /> : <Empty />}
    </article>
  )
}