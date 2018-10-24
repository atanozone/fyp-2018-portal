import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class OneDay extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    value: null,
  };
}
render() {
  return (
    <button
      className="square"
      onClick={() => this.props.onClick()}
    >
      {this.props.value}
    </button>
  );
}
}


class CalendarTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[{
      Header: '',
      columns: [{
        Header: 'Week',
        accessor: 'weekNo'
      }
      ]
    }, {
      Header: 'Day',
      columns: [{
        Header: 'Mon',
        accessor: 'Monday',
        Cell: row => (
          <span>
            {
              row.value 
            }
          </span>
        )
      }, {
        Header: 'Tue',
        accessor: 'Tuesday',
        Cell: row => (
          <span>
            {
              row.value 
            }
          </span>
        )
      },{
        Header: 'Wed',
        accessor: 'Wednesday',
        Cell: row => (
          <span>
            {
              row.value 
            }
          </span>
        )
      },{
        Header: 'Thu',
        accessor: 'Thursday',
        Cell: row => (
          <span>
            {
              row.value 
            }
          </span>
        )
      },{
        Header: 'Fri',
        accessor: 'Friday',
        Cell: row => (
          <span>
            {
              row.value 
            }
          </span>
        )
      },{
        Header: 'Sat',
        accessor: 'Saturday',
        Cell: row => (
          <span>
            {
              row.value 
            }
          </span>
        )
      },{
        Header: 'Sun',
        accessor: 'Sunday',
        Cell: row => (
          <span>
            {
              row.value 
            }
          </span>
        )
      }]
    }]}
          defaultPageSize={17}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}
export default CalendarTable;