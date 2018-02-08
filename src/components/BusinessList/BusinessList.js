import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';
import {business,businesses} from '../App.js'



class BusinessList extends React.Component {
  render() {
    return (<div className="BusinessList">
    {this.props.businesses.map(function returnComponent(business) {
    return <Business props = {businesses} />})
  }
    </div>)
  }
};

export default BusinessList
