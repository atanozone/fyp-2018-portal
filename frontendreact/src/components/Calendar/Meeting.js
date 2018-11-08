import React from "react";
import { render } from "react-dom";

import {Button,List,Popover} from 'antd';

const content = (
  <div>
    <p>This is a custom HTML popup</p>
  </div>
);

class OneMeeting extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      overview:[{
        title: null,
        description:null,
      }],
    };
  }
  //should put <popover> and <button> in title
  render() {
      console.log('Test:',this.props.overview);
      const data = this.props.overview;
      return(
      <div>
        {console.log('data2:',data)}
      <List
    itemLayout="horizontal"
    dataSource={data} 
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<a href="">{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
    </div>
      );
  }
  }

  export default OneMeeting;