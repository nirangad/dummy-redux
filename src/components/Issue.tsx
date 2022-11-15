import React from "react";
import "./Issue.css";
import { IssueType } from "../types/issue.type";
import store from "../store";
import * as actions from "../reducers/actions";

export default function Issue({ issue }: { issue: IssueType }) {
  function resolveIssue() {
    store.dispatch({
      type: actions.BUG_RESOLVED,
      payload: {
        id: issue.id,
      },
    });
  }

  return (
    <div className={`issue ${issue.resolved ? "done" : ""}`}>
      <span>{issue.description}</span>
      <button onClick={resolveIssue} className={`${issue.resolved ? "hide" : ""}`}>DONE</button>
    </div>
  );
}
