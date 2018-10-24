import React from "react";
//random name generator
import namor from "namor";
//import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const OneWeek = (week) => {
  return {
    weekNo: week,
    Monday: Math.floor(Math.random() * 100),
    Tuesday: Math.floor(Math.random() * 100),
    Wednesday: Math.floor(Math.random() * 30),
    Thurday: Math.floor(Math.random() * 100),
    Friday: Math.floor(Math.random() * 100),
    Saturday: namor.generate({ words: 1, numbers: 0 }),
    Sunday: namor.generate({ words: 1, numbers: 0 })
  };
};

export function makeData(len = 17) {
  return range(len).map(d => {
    return {
      ...OneWeek(d),
      children: range(10).map(OneWeek)
    };
  });
}

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    For more examples, visit {''}
  <br />
    <a href="https://github.com/react-tools/react-table" >
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
