import React from 'react'
import './style.css'

// this is a reusable form
// the form is a dropdown list of all the different departments from the the api
// the button says 'filter by department' and then it runs the function we passed down via props
// need to get from the props: the array of different departments, then I'll do a map function to create the options

function FilterButton(props) {
  return (
    <div
      className="btn btn-filter"
      onClick={() => props.click(props.value)}

    >{props.btnText}</div>
  )
}

export default FilterButton