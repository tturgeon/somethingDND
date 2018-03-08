import React, { Component } from 'react';
//import _ from 'lodash';
import requestApi from "../Utilities/request.js"

export default class Race extends Component {

  componentWillMount() {
    requestApi("/api/race/1")()
    .then((raceArray) =>{
      console.log(raceArray)
      this.props.update("race", raceArray);
    })
  }

render() {
    return (
      <div id= "Race">
        <p>{this.props.raceProp ? this.props.raceProp.name : 'loading'}</p>
        <p>{this.props.raceProp ? this.props.raceProp.subraces[1].name : 'loading'}</p>
      </div>
    )}
  }
