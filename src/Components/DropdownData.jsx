import React from "react";

class DropdownData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      states: [],
      cities: [],
      selectedCountry: "--Choose Country--",
      selectedState: "--Choose State--",
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.setState({
      countries: [
        {
          name: "Germany",
          states: [
            {
              name: "Bavaria",
              cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
            },
          ],
        },
        { name: "Spain", states: [{ name: "Ceuta", cities: ["Barcelona"] }] },
        { name: "USA", states: [{ name: "Dover", cities: ["Downers Grove"] }] },
        { name: "Mexico", states: [{ name: "Colima", cities: ["Puebla"] }] },
        {
          name: "India",
          states: [
            { name: "Maharashtra", cities: ["Mumbai","Pune","Nagpur","Nashik"] },
          ],
        },
      ],
    });
  }

  changeCountry(event) {
    this.setState({ selectedCountry: event.target.value });
    this.setState({
      states: this.state.countries.find(
        (cntry) => cntry.name === event.target.value
      ).states,
    });
  }

  changeState(event) {
    this.setState({ selectedState: event.target.value });
    const stats = this.state.countries.find(
      (cntry) => cntry.name === this.state.selectedCountry
    ).states;
    this.setState({
      cities: stats.find((stat) => stat.name === event.target.value).cities,
    });
  }

  render() {
    return (
      <div id="container">
        <div>
          <label>Country</label>
          <select
            placeholder="Country"
            value={this.state.selectedCountry}
            onChange={this.changeCountry}>
            <option>--Choose Country--</option>
            {this.state.countries.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label>State</label>
          <select
            placeholder="State"
            value={this.state.selectedState}
            onChange={this.changeState}>
            <option>--Choose State--</option>
            {this.state.states.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label>City</label>
          <select placeholder="City">
            <option>--Choose City--</option>
            {this.state.cities.map((e, key) => {
              return <option key={key}>{e}</option>;
            })}
          </select>
        </div>
      </div>
      
    );
  }
}

export default DropdownData;
