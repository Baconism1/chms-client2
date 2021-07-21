import React from 'react';
import Navbar from './navbar';

export default class Home extends React.Component { 
  state = {
    models: [
      // { name: 'Mustang', doors: 2},
      // { name: 'Taurus', doors: 4},
      // { name: 'Explorer', doors: 4},
      // { name: 'Bronco', doors: 2},
    ]
  }
  
  constructor(props) {
    super();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ models: [
        { id: 1, name: 'Taurus', doors: 4},
        { id: 2, name: 'Mustang', doors: 2},
        { id: 3, name: 'Explorer', doors: 4},
        { id: 4, name: 'Bronco', doors: 2},  
      ]})
    }, 1000)
  }

  render() {
    return (
      <div>
        <Navbar props={this.props}/>
        <h2>Ford</h2>
        <h3>Models</h3>
      { this.state.models.map((model) => (
        <div key={model.id.toString()}>
          Model: {model.name}<br/>
          Doors: {model.doors}
        </div>
      ))}
  </div>
    )
  }

}
