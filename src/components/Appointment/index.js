import React, {useEffect} from 'react';
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }
    if (!props.interview && mode === SHOW) {
      transition(EMPTY);
    }
  }, [props.interview, transition, mode]);

  function save(student, interviewer) {
    const interview = {
      student,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW);
    });
  }

  function cancel() {//delete appoinment
    transition(DELETING,true);
    props.cancelInterview(props.id)//send req to db for delete
    .then(() => transition(EMPTY)) //take user to empty when success
  }

  
  return (
    <article className="appointment" data-testid="appointment">
      
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
      <Show
      student={props.interview.student}
      interviewer={props.interview.interviewer}
      onDelete={() => transition(CONFIRM)}
      onEdit={() => transition(EDIT)}
      />
)}
     {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          bookInterview={props.bookInterview}
          onSave={save}
          onCancel={() => back()}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === CONFIRM && (
        <Confirm
        message="Are you sure you want to cancel?"
        onConfirm={cancel}
        onCancel={() => back()}
        />
        )}
        {mode === DELETING && <Status message="Deleting"/>}
        {mode === EDIT && (
        <Form
          name={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
          bookInterview={props.bookInterview}
          onSave={save}
          onCancel={() => transition(SHOW)}
        />
      )}
    </article>
  )
}