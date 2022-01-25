import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState(prev => ({ ...prev, day }));
  // update state and resolve promises whenever appointments are updated
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
    .then(all => {
      setState(prev => ({
        ...prev, 
        days: all[0].data, 
        appointments: all[1].data, 
        interviewers: all[2].data}));
    })
  }, []);

  function updateSpot(add, cancel) { 
  // update spots remaining
    const dayUpdate = state.days.find(day => day.name === state.day);
    const days = [...state.days];
    if (cancel) {//if true, add spot
      dayUpdate.spots++;
    } else if (add) {//if true appointment, reduce spots
      dayUpdate.spots--;
    }
    days[dayUpdate.id - 1] = dayUpdate; //apply to change to object (not state yet)
    return days;
  }
  function bookInterview(id, interview) {
    const add = !(state.appointments[id].interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return (axios.put(`/api/appointments/${id}`, appointment)//push change to db
      .then(() => {
        setState({...state, appointments: appointments, days: updateSpot(add)});
      })
    )
  }
  // update the specific appointment state with null interview
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return (axios.delete(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({...state, appointments: appointments, days: updateSpot(null, true)})
      })
    )
    }

  return { state, setDay, bookInterview, cancelInterview };
}