import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import EmployeeCard from './components/Employee-Card'
import employees from './employees.json'
import './App.css';

class App extends Component {

  state = {
    employees
  }


  render() {
    return (
      <div className="App">
        <Wrapper>
          <Button-Wrapper>
            <Filter-Button />
            <Filter-Button />
          </Button-Wrapper>
          <Table-Wrapper>
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
          </Table-Wrapper>
        </Wrapper>
      </div>
    );

  }
}



export default App;
