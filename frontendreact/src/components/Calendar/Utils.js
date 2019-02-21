import React from "react";
//random name generator
import namor from "namor";
//import "./index.css";

 const range = len => {
  const arr = [];
  for (let i = 1; i <= len; i++) {
    arr.push(i);
  }
  return arr;
};

//connect external title to api title
 const MapDay = (week,day,data)=>{
   var temp=[];
   const empty ={
     title:'',
     description:''
    }
  var i =0;
  for(i=0;i<data.length;i++){
    if ((data[i].week_number == week) && (data[i].day_number==day)){
      temp.push({
        title:data[i].title,
        description:data[i].description
      });
    }
  }
  return temp;
}
 const MapWeek = (d,data)=>{
  const temp ={
      weekNo: d,
      Monday: {...MapDay(d,1,data)},
      Tuesday: {...MapDay(d,2,data)},
      Wednesday: {...MapDay(d,3,data)},
      Thursday: {...MapDay(d,4,data)},
      Friday: {...MapDay(d,5,data)},
      Saturday: {...MapDay(d,6,data)},
      Sunday: {...MapDay(d,7,data)},
  }
  console.log("mappedweek",temp);
  return temp;
}

export function MapSemester(data, len =17){
    return range(len).map(d => {
      return {
        ...MapWeek(d,data),
    };
  });
}
export function getRequest(){ 
  return fetch('http://127.0.0.1:8000/planner/api/')
  .then(response => {
    var responseJson = response.json();
    console.log("response object",responseJson)
    return responseJson;
  })
  .then(body => {
    console.log("response body",body);
    return body;
  })
}

