import React, { Component } from "react";
import Table from "./Table";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: null,
      country: {}
    };
  }

  componentDidMount() {
    fetch("https://covid-193.p.rapidapi.com/statistics", {
      headers: {
        "x-rapidapi-key": "89afa7ece5msh53dafe759b97cd7p1b7aa5jsn4e1c453e0c05",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        this.setState({ items: json.response });
      });
  }

  getCountry = () => {
    let countries = [];
    this.state.items?.forEach((element) => {
      if (!countries.includes(element.country)) {
        countries.push(element.country);
      }
    });
    return countries;
  };

  handleCountry = (e) => {
    let mycountry = e.target.value;
    this.state.items.filter((element) => {
      if (mycountry === element.country) {
        this.setState({ country: element });
      }
      return mycountry;
    });
  };

  activeCase = () => {
    let count = 0;
    if (this.state.items) {
      this.state.items.forEach((element) => {
        count = count + element.cases.active;
      });
    }
    return count;
  };

  recoveredCase = () => {
    let count = 0;
    if (this.state.items) {
      this.state.items.forEach((element) => {
        count = count + element.cases.recovered;
      });
    }
    return count;
  };

  deathCase = () => {
    let count = 0;
    if (this.state.items) {
      this.state.items.forEach((element) => {
        count = count + element.deaths.total;
      });
    }
    return count;
  };

  render() {
  
    return (
      <>
        <div className="container text-center">
          <select
            className="dropdown my-3 text-center"
            onChange={this.handleCountry}>
            <option value="country">Global</option>
            {this.getCountry().map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-dark bg-light mb-3">
                <div className="cardheader">Total Active Cases</div>
                <div className="card-body totalActive">  
                {this.state.country.cases?this.state.country.cases?.active:this.activeCase()}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-dark bg-light mb-3">
                <div className="cardheader">Total Recovered Cases</div>
                <div className="card-body totalRecovered">
                  {this.state.country.cases?this.state.country.cases?.recovered:this.recoveredCase()}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-dark bg-light mb-3">
                <div className="cardheader ">Total Deaths</div>
                <div className="card-body totalDeaths">
                  {this.state.country.cases?this.state.country.deaths?.total:this.deathCase()}
                  </div>
              </div>
            </div>
          </div>
        </div>       
        <Table item={this.state.items}/>
      </>
    );
  }
}
