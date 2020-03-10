import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import EmployeeCard from './components/Employee-Card'
import TableWrapper from './components/Table-Wrapper'
import FilterButton from './components/Filter-Button'
import FilterButtonWrapper from './components/Filter-Button-Wrapper'
import employees from './employees.json'
import './App.css';

class App extends Component {

  state = {
    employees: employees,
    toggleFilter: "",
    filterObject: employees,
    toggleSort: ""
  }


  departmentFilter = dept => {
    switch (dept) {
      case "Finance":
        const employees = this.state.employees.filter(employee => employee.department === dept)
        this.setState({ ...this.state, filterObject: employees })
        break
      default:
        this.setState({ filterObject: this.state.employees })
    }





    if (dept !== "all") {
      const employees = this.state.employees.filter(employee => employee.department === dept)
      this.setState({ ...this.state, filterObject: employees })
    } else {
      this.setState({ employees })
    }
  }

  onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

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
          <h2 style={{ textAlign: "center" }}>Filter By Department</h2>
          <FilterButtonWrapper style={{ justifyContent: "space-around" }}>
            <FilterButton
              list={departmentsList}
              departmentFilter={this.departmentFilter}
              value="all"
              btnText="Show Everyone"
            />
            <FilterButton
              list={departmentsList}
              departmentFilter={this.departmentFilter}
              value="Finance"
              btnText="Show Only Finance"
            />
            <FilterButton
              list={departmentsList}
              departmentFilter={this.departmentFilter}
              value="C-Suite"
              btnText="Show Only C-Suite"
            />
            <FilterButton
              list={departmentsList}
              departmentFilter={this.departmentFilter}
              value="HR"
              btnText="Show Only HR"
            />
            {/* <FilterButton /> */}
          </FilterButtonWrapper>
          <TableWrapper>
            {this.state.filterObject.map(employee => (
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
