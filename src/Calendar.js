import React, { Component } from 'react'

class DateHeader extends Component {

  dateToArray = (dates) => {
    if(Array.isArray(dates)){
      return dates
    }else if(typeof dates === "string"){
      return dates.split(',')
    }else{
      return ["일", "월", "화", "수", "목", "금", "토"]
    }
  }

  mapArrayToDate = (dateArray) => {
    if(dateArray.length !== 7){
      console.log(new Error("dates props must be had 7 date"))
      dateArray = ["일", "월", "화", "수", "목", "금", "토"]
    }
    
    return dateArray.map((date, index) => {
      const className = ()=>{
        let className = "RCA-calendar-date-component";
        if(index === 0){
          return className + " date-sun"
        }else if(index === 6){
          return className + " date-sat"
        }else{
          return className + " date-weekday"
        }
      }
      return (
        <div className={className()} key={"RCA-header-"+date}>
          {date}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="RCA-calendar-date-header">
        {this.mapArrayToDate(this.dateToArray(this.props.dates))}
      </div>
    )
  }
}


export default class Calendar extends Component {
  render() {
    return (
      <div className="RCA-calendar-container">
        <DateHeader />
      </div>
    )
  }
}

