import "./ReportIssue.css";
import store from "../store";
import { useState } from "react";
import * as actions from '../reducers/actions'

export default function ReportIssue() {
  const [issueField, setIssueField] = useState({
    desc: "",
  });
  const issueFieldHandler = (e: any) => {
    let value = e.target.value;
    setIssueField({ ...issueField, desc: value });
  };

  function addIssue() {
    if (!issueField || !issueField.desc) {
      return;
    }

    store.dispatch({
      type: actions.BUG_ADDED,
      payload: {
        description: issueField.desc,
      },
    });
  }

  return (
    <div className="report-issue">
      <input
        type="text"
        name="new-issue"
        placeholder="Type your Issue"
        value={issueField.desc}
        onChange={issueFieldHandler}
      />
      <button className="blue" onClick={addIssue}>
        Add
      </button>
    </div>
  );
}
