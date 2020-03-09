import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import EmployeeCard from './components/Employee-Card'
import TableWrapper from './components/Table-Wrapper'
import FilterButton from './components/Filter-Button'
import employees from './employees.json'
import './App.css';

class App extends Component {

  state = {
    employees: employees,
    toggleFilter: "",
    toggleSort: ""
  }


  departmentFilter = (department) => {
    if (department !== "all") {
      const employees = this.state.employees.filter(employee => employee.department === department)
      this.setState({ employees })
    } else {
      this.setState({ employees })
    }
  }

  onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  // const departments = "abc";

  departmentList = () => {
    let departments = []
    employees.forEach(employee => {
      departments.push(employee)
    });

    let filteredDepartments = departments.filter(this.onlyUnique())
    console.log("filteredDepartments")
    console.log(filteredDepartments)
    return filteredDepartments;

  }

  render() {
    console.log(employees)
    console.log(employees[0].department)

    let departmentsList = this.departmentList
    console.log(departmentsList)

    return (
      <div className="App">
        <Wrapper>
          <Button-Wrapper>
            <FilterButton list={departmentsList} filterType={this.departmentFilter} />
            {/* <FilterButton /> */}
          </Button-Wrapper>
          <TableWrapper>
            {this.state.employees.map(employee => (
              <EmployeeCard
                key={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                department={employee.department}
                title={employee.title}
                birthday={employee.birthday}
                salary={employee.salary}
              />

            ))}
          </TableWrapper>
        </Wrapper>
      </div>
    );

  }
}



export default App;
