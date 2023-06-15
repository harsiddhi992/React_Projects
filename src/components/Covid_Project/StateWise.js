import React, { useEffect, useState } from "react";

const StateWise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const theData = await fetch(
    //   "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
    );
    const actualDdata = await theData.json();
    // console.log(actualDdata);
    console.log(actualDdata.data.statewise);
    setData(actualDdata.data.statewise);
  };
  useEffect(() => {
    getCovidData();
  });
  return (
    <>
      <h2>Covid Data Project using live API</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">state</th>
            <th scope="col">Active</th>
            <th scope="col">Confirm</th>
            <th scope="col">Recovered</th>
          </tr>
        </thead>
        <tbody>
          {data.map((curElem, index) => {
            return (
              <tr key={index}>
                <th scope="row">{curElem.state}</th>
                <td>{curElem.confirmed}</td>
                <td>{curElem.active}</td>
                <td>{curElem.recovered}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StateWise;
