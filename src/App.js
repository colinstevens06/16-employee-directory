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

    switch (input) {
      case "lastName":
        employees.sort(function (a, b) {
          if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
            return -1
          } else if (b.lastName.toLowerCase() < a.lastName.toLowerCase()) {
            return 1
          } else {
            return 0
          }
        })
        this.setState({ filterObject: employees })
        break
      case "Salary":
        if (employees[0].salary < employees[employees.length - 1].salary) {
          employees.sort(function (a, b) {
            if (a.salary < b.salary) {
              return 1
            } else if (b.salary < a.salary) {
              return -1
            } else {
              return 0
            }
          })
          this.setState({ filterObject: employees })
        } else {
          employees.sort(function (a, b) {
            if (b.salary < a.salary) {
              return 1
            } else if (a.salary < b.salary) {
              return -1
            } else {
              return 0
            }
          })
          this.setState({ filterObject: employees })
        }
        break
      default:
        employees.sort(function (a, b) {
          if (a.id < b.id) {
            return -1
          } else if (b.id < a.id) {
            return 1
          } else {
            return 0
          }
        })
        this.setState({ filterObject: employees })
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

    return filteredDepartments;

  }

  render() {
    // let departmentsList = this.departmentList

    return (
      <div className="App">
        <Wrapper>
          <div className="container">

            <h1 style={{ textAlign: "center", marginTop: 25, marginBottom: 25 }}>Employees: At a Glance</h1>

            <div className="row">
              <div className="col-sm-6" style={{ borderRight: "1px solid #000000" }}>
                <h2 style={{ textAlign: "center" }}>Filter By Department</h2>
                <FilterButtonWrapper>
                  <FilterButton
                    click={this.departmentFilter}
                    value="all"
                    btnText="Show Everyone"
                  />
                  <FilterButton
                    click={this.departmentFilter}
                    value="Finance"
                    btnText="Show Only Finance"
                  />
                  <FilterButton
                    click={this.departmentFilter}
                    value="C-Suite"
                    btnText="Show Only C-Suite"
                  />
                  <FilterButton
                    click={this.departmentFilter}
                    value="HR"
                    btnText="Show Only HR"
                  />
                </FilterButtonWrapper>
              </div>
              <div className="col-sm-6">
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
                  <FilterButton
                    click={this.nameSort}
                    btnText="Sort by Salary"
                    value="Salary"
                  />
                </FilterButtonWrapper>


              </div>


            </div>



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
          </div>
        </Wrapper>
      </div>
    );

  }
}



export default App;
