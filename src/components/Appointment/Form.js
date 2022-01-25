import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  // Reset inputs
  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  function validate() { 
    if (student === "") {//check if user entered a name
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {//check if user selected an interviewer
      setError("Please select an interviewer");
      return;
    }
    setError("");//clear error
    props.onSave(student, interviewer);
  }
  return (
  <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form onSubmit={event => event.preventDefault()} autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value={student}
        onChange={e => {
          setStudent(e.target.value);
        }}
      />
    </form>
    <section className="appointment__validation">{error}</section>
    <InterviewerList 
       interviewers={props.interviewers}
       value={interviewer}
       onChange={setInterviewer}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>
        Cancel</Button>
      <Button confirm onClick={() => validate()}>Save</Button>
    </section>
  </section>
</main>
  )
}