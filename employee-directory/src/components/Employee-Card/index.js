import React from "react"
import "./style.css"

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>{props.firstName} {props.lastName}</strong>
          </li>
          <li>
            <strong>Title: </strong>{props.title}
          </li>
          <li>
            <strong>Department: </strong>{props.department}
          </li>
          <li>
            <strong>Salary: </strong>{props.salary}
          </li>
          <li>
            <strong>Birthday: </strong>{props.birthday}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EmployeeCard;