import "./IssueList.css";
import Issue from "./Issue";
import store from "../store";
import { IssueType } from "../types/issue.type";
import { useState } from "react";

export default function IssueList() {
  const [issueList, setIssueList] = useState(store.getState())
  store.subscribe(() => {
    setIssueList(store.getState());
  });
  return (
    <div className='issue-list'>
      {issueList.map((issue: IssueType) => {
        return <Issue key={issue.id} issue={issue} />;
      })}
    </div>
  );
}
