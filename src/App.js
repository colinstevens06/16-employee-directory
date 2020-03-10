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
    if (dept !== "all") {
      const employees = this.state.employees.filter(employee => employee.department === dept)
      this.setState({ ...this.state, filterObject: employees })
    } else {
      this.setState({ filterObject: this.state.employees })
    }
  }

  nameSort = (input) => {
    const employees = this.state.filterObject;

    if (input === "lastName") {
      const sortedEmployees = employees.sort(function (a, b) {
        if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
          return -1
        } else if (b.lastName.toLowerCase() < a.lastName.toLowerCase()) {
          return 1
        } else {
          return 0
        }
      })
      this.setState({ filterObject: sortedEmployees })
    } else {
      const sortedEmployees = employees.sort(function (a, b) {
        if (a.id < b.id) {
          return -1
        } else if (b.id < a.id) {
          return 1
        } else {
          return 0
        }
      })
      this.setState({ filterObject: sortedEmployees })
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
          <h2 style={{ textAlign: "center" }}>Sort</h2>
          <FilterButtonWrapper>
            <FilterButton
              click={this.nameSort}
              btnText="Reset Sort"
              value="showAll"
            />
            <FilterButton
              click={this.nameSort}
              btnText="Sort by Last Name"
              value="lastName"
            />
          </FilterButtonWrapper>


          <h2 style={{ textAlign: "center" }}>Filter By Department</h2>
          <FilterButtonWrapper>
            <FilterButton
              list={departmentsList}
              click={this.departmentFilter}
              value="all"
              btnText="Show Everyone"
            />
            <FilterButton
              list={departmentsList}
              click={this.departmentFilter}
              value="Finance"
              btnText="Show Only Finance"
            />
            <FilterButton
              list={departmentsList}
              click={this.departmentFilter}
              value="C-Suite"
              btnText="Show Only C-Suite"
            />
            <FilterButton
              list={departmentsList}
              click={this.departmentFilter}
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
