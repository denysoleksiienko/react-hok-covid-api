import React from 'react';
import './Countries-list.css';

function withDataRender({ data }) {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <h4 className="title">Countries</h4>
          {data.map((item, index) => (
            <span key={index} className="list-group-item">
              {item.Country}
            </span>
          ))}
        </li>

        <li className="list-group-item">
          <h4 className="title">New Confirmed</h4>
          {data.map((item, index) => (
            <span key={index} className="list-group-item">
              {item.NewConfirmed}
            </span>
          ))}
        </li>

        <li className="list-group-item">
          <h4 className="title">New Deaths</h4>
          {data.map((item, index) => (
            <span key={index} className="list-group-item">
              {item.NewDeaths}
            </span>
          ))}
        </li>

        <li className="list-group-item">
          <h4 className="title">New Recovered</h4>
          {data.map((item, index) => (
            <span key={index} className="list-group-item">
              {item.NewRecovered}
            </span>
          ))}
        </li>

        <li className="list-group-item">
          <h4 className="title">Total Confirmed</h4>
          {data.map((item, index) => (
            <span key={index} className="list-group-item">
              {item.TotalConfirmed}
            </span>
          ))}
        </li>

        <li className="list-group-item">
          <h4 className="title">Total Deaths</h4>
          {data.map((item, index) => (
            <span key={index} className="list-group-item">
              {item.TotalDeaths}
            </span>
          ))}
        </li>

        <li className="list-group-item">
          <h4 className="title">Total Recovered</h4>
          {data.map((item, index) => (
            <span key={index} className="list-group-item">
              {item.TotalRecovered}
            </span>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default withDataRender;
