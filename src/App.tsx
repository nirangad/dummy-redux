import './App.css'
import ReportIssue from './components/ReportIssue'
import IssueList from './components/IssueList'
import store from './store';

function App() {
  return (
    <div className="app">
      <h1>Issue Tracker</h1>
      <ReportIssue />
      <IssueList/>
    </div>
  )
}

export default App
