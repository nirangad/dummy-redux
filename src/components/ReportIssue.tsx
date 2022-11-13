import './ReportIssue.css'
import store from '../store'

function ReportIssue() {

  console.log("Store:", store);

  function addIssue() {
    console.log('Add Issue pressed');
  }

  return (
    <div className="report-issue">
      <input type="text" name="new-issue" placeholder='Type your Issue' />
      <button className='blue' onClick={addIssue} >Add</button>
    </div>
  )
}

export default ReportIssue
