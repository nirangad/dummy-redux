import React from "react";
import './Issue.css'
import { IssueType } from "../types/issue.type";

export default function Issue({ issue }: { issue: IssueType }) {
  return <span>{issue.description}</span>;
}
