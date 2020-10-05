import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Results from './components/Results/Results'
class App extends Component {
  constructor() {
    super()
    this.state = {
      imperialUnits: false,
      goal: '',
      weight: '',
      age: '',
      gender: ' ',
      height: '',
      activityLevel: '',
      tdee: '',
      proteinRequirment: '',
      fatRequirment: '',
      carbRequirement: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target

    if (type === "checkbox") {
      this.setState(
        {
          [name]: checked,
          weight: '',
          height: ''
        }
      )
    }

    else {
      this.setState(
        {
          [name]: value
        }
      )
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    const { gender, goal, age, weight, height, activityLevel, imperialUnits } = this.state
    let clientBmr
    let clientTdee
    let adjustedTdee
    if (gender === "Male") {

      if (!imperialUnits) {
        clientBmr = Math.round(88.4 + (13.4 * weight) + (4.8 * height) - (5.68 * age))
        clientTdee = Math.round(clientBmr * activityLevel)
        adjustedTdee = clientTdee + Number(goal)
        let proteinReq = Math.round((adjustedTdee * 0.35) / 4)
        let fatReq = Math.round((adjustedTdee * 0.35) / 9)
        let carbReq = Math.round((adjustedTdee * 0.3) / 4)
        this.setState({
          tdee: adjustedTdee,
          proteinRequirment: proteinReq,
          fatRequirment: fatReq,
          carbRequirement: carbReq
        })
      } else if (imperialUnits) {
        clientBmr = Math.round((66 + (6.2 * weight) + (12.7 * height) - (6.755 * age)))
        clientTdee = Math.round(clientBmr * activityLevel)
        adjustedTdee = clientTdee + Number(goal)
        let proteinReq = Math.round((adjustedTdee * 0.35) / 4)
        let fatReq = Math.round((adjustedTdee * 0.35) / 9)
        let carbReq = Math.round((adjustedTdee * 0.3) / 4)
        this.setState({
          tdee: adjustedTdee,
          proteinRequirment: proteinReq,
          fatRequirment: fatReq,
          carbRequirement: carbReq
        })
      }
    }
    if (gender === "Female") {

      if (!imperialUnits) {
        clientBmr = Math.round(88.4 + (13.4 * weight) + (4.8 * height) - (5.68 * age))
        clientTdee = Math.round(clientBmr * activityLevel)
        adjustedTdee = clientTdee + Number(goal)
        let proteinReq = Math.round((adjustedTdee * 0.35) / 4)
        let fatReq = Math.round((adjustedTdee * 0.35) / 9)
        let carbReq = Math.round((adjustedTdee * 0.3) / 4)
        this.setState({
          tdee: adjustedTdee,
          proteinRequirment: proteinReq,
          fatRequirment: fatReq,
          carbRequirement: carbReq
        })
      } else {
        clientBmr = Math.round((655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age)))
        clientTdee = Math.round(clientBmr * activityLevel)
        adjustedTdee = clientTdee + Number(goal)
        let proteinReq = Math.round((adjustedTdee * 0.35) / 4)
        let fatReq = Math.round((adjustedTdee * 0.35) / 9)
        let carbReq = Math.round((adjustedTdee * 0.3) / 4)
        this.setState({
          tdee: clientTdee,
          proteinRequirment: proteinReq,
          fatRequirment: fatReq,
          carbRequirement: carbReq
        })
      }
    }
  }
  render() {
    return (
      <>
        <div className="header-text">
          <h1 className="title">
            Ark Macronutrient Calculator
                </h1>
          <p className="section-description">
            Calculate your daily caloric and macronutrient requirments !
                </p>
          <form className="toggle-switch">
            <span className="unit-type">Metric Units</span>
            <label className="switch">
              <input
                type="checkbox"
                name="imperialUnits"
                value={this.state.imperialUnits}
                onChange={this.handleChange} />
              <span className="slider round"></span>
            </label>
            <span className="unit-type">Imperial Units</span>
          </form>
        </div>
        <div className="container">
          <section className="form-area">
            <Form data={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />
            <Results data={this.state} />
          </section>
        </div>
      </>
    );
  }
}

export default App;
