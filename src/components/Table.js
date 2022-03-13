import React, { Component } from "react";

export default class Table extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div>
        <table className="table table-success table-striped table-bordered mt-4">
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Active Cases</th>
              <th scope="col">Recovered Cases</th>
              <th scope="col">Death Cases</th>
            </tr>
          </thead>
          <tbody>
            {this.props.item?.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{el.country}</td>
                  <td>{el.cases.active?el.cases.active:"00"}</td>
                  <td>{el.cases.recovered?el.cases.recovered:"00"}</td>
                  <td>{el.deaths.total?el.deaths.total:"00"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
