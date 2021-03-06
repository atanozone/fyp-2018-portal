import React from "react";
import { render } from "react-dom";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

//Import Custom
import { MapSemester, getRequest } from "./Utils";
import "./Planner.css";
import AllMeeting from "./Meeting"

class OneDay extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    overview:[{
      title: null,
      description:null,
    }],
  };
}
render() {
  var objarr=this.props.overview;
  var keys = Object.keys(objarr);
  if (objarr === undefined || keys.length == 0){
  return (
    <div style={{textAlign: 'center'}}>
    <span>no events</span><br/>
  </div>
  );
  }
  else {
    //this obj to arr method only works on modern browser, may need to switch to key.map
    const data = Object.values(objarr);
    return (
      <div>
        <AllMeeting overview={data}/>
  </div>
  );
  }
}
}

class CalendarTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
    this.fetchData=this.fetchData.bind(this);
  }
  fetchData(state,instance){
    this.setState({loading:true});
    getRequest().then((result) =>{
      console.log(result);
      var mappedresult = MapSemester(result);

      this.setState({
        data:mappedresult,
        loading:false
      });

    });
  }
  render() {
    return (
      <div>
        <ReactTable
        
          data={this.state.data}
          loading={this.state.loading}
          onFetchData={this.fetchData}
          columns={[{
            
      Header: 'Week',
      
      columns: [{
        Header: '',
        accessor: 'weekNo',
        className:'matrixHeader',
        
        Cell: row=>(
          <span >
            {"Week "+row.value}
          </span>
        )
      }
      ]
    }, {
      Header: 'Day',
      columns: [{
        id:'Monday',
        Header: 'Mon',
        accessor: d=>d.Monday.title,
        headerClassName:'matrixHeader',
        Cell: row=>(
          <OneDay overview={row.original.Monday}/>
        )
      }, {
        id:'Tuesday',
        Header: 'Tue',
        accessor: d=>d.Tuesday.title,
        headerClassName:'matrixHeader',
        Cell: row=>(
          <OneDay overview={row.original.Tuesday}/>
        )
      },{
        id:'Wednesday',
        Header: 'Wed',
        accessor: d=>d.Wednesday.title,
        headerClassName:'matrixHeader',
        Cell: row=>(
          <OneDay overview={row.original.Wednesday}/>
        )
      },{
        id:'Thursday',
        Header: 'Thu',
        accessor: d=>d.Thursday.title,
        headerClassName:'matrixHeader',
        Cell: row=>(
          <OneDay overview={row.original.Thursday}/>
        )
      },{
        id:'Friday',
        Header: 'Fri',
        accessor: d=>d.Friday.title,
        headerClassName:'matrixHeader',
        Cell: row=>(
          <OneDay overview={row.original.Friday}/>
        )
      },{
        id:'Saturday',
        Header: 'Sat',
        accessor: d=>d.Saturday.title,
        headerClassName:'matrixHeader',
        Cell: row=>(
          <OneDay overview={row.original.Saturday}/>
        )
      },{
        id:'Sunday',
        Header: 'Sun',
        accessor: d=>d.Sunday.title,
        headerClassName:'matrixHeader',
        Cell: row=>(
          <OneDay overview={row.original.Sunday}/>
        )
      }]
    }]}
          defaultPageSize={17}
          className="-striped -highlight"   
          // Override table default
      sortable= {false} 
      resizable= {false} 
      filterable= {false} 
      showPagination= {false}
      showPaginationBottom= {false}
      showPageSizeOptions= {false}   
        />
        <br />
      </div>
    );
  }
}
export default CalendarTable;