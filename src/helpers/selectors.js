export function getAppointmentsForDay(state, day) {
      // find the object in our state.days array whose name matches the provided day, access that specific days appointment array
      const daysArray = state.days.filter(thisDay => thisDay.name === day);
    
      // Validation. If there are no appointments on the given day, our days data will be empty, return empty array
      if (daysArray === [] || !day || daysArray[0] === undefined) {
        return [];
      }
    
      const apptArr = daysArray[0].appointments; // appt ids for day
      const dayAppts = [];    
    
      for (const appointment of Object.values(state.appointments)) {
        // iterate through apptArr, comparing whether it's id matches the id of states.appointments and return that value
        if (apptArr.includes(appointment.id)) {
          dayAppts.push(appointment);
        }
      }
      return dayAppts;
}

export function getInterview(state, interview) {
  if (interview === null || !interview) {
    return null;
  }

  for (const interviewer of Object.values(state.interviewers)) {
    if (interview.interviewer === interviewer.id) {
      return { student: interview.student, interviewer: interviewer };
    }
  }
}

export function getInterviewersForDay(state, day) {   
  const filteredDay = state.days.filter((stateDay) => stateDay.name === day)[0]; 
    if (!day || !filteredDay || !state) {  
         return [];   
        }    
  const interviewerArr = filteredDay.interviewers.map((interviewer) => {     
    return state.interviewers[interviewer];   
  });    
  return interviewerArr; 
};