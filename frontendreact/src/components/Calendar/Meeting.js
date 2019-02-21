import React from "react";
import { render } from "react-dom";

import {Button,List,Popover} from 'antd';

const content = (
  {
    overview:{
      title: null,
      description:null,
    }
  }
);
class PopContent extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    content,
  };
}
//should put <popover> and <button> in title
render() {
    const data = this.props.overview;
    console.log('popover:',data);
    return(
    <div>
      <p>{data.description}</p>
  </div>
    );
}
}
class OneMeeting extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    content,
  };
}
//should put <popover> and <button> in title
render() {
    const data = this.props.overview;
    console.log('onemeeting:',data);
    return(
    <div>
      <Popover overview = {<PopContent overview={data}/>} title={data.title} trigger='click'>
      <Button>{data.title}</Button>
      </Popover>
  </div>
    );
}
}

class AllMeeting extends React.Component {
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
      const data = Object.values(this.props.overview);
      return(
      <div>
      <List
    itemLayout="horizontal"
    dataSource={data} 
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<OneMeeting overview={item}/>}
        />
      </List.Item>
    )}
  />
    </div>
      );
  }
  }

  export default AllMeeting;