import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ReportIssue from './components/ReportIssue'
import IssueList from './components/IssueList'

function App() {

  return (
    <div className="app">
      <h1>Issue Tracker</h1>
      <ReportIssue/>
      <IssueList/>
    </div>
  )
}

export default App
