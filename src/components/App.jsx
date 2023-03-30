import { Component } from "react"
import { FeedbackOptions } from "./Statistics/FeedbackOptions";
import { Notification } from "./Statistics/Notification";
import { Section } from "./Statistics/Section";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
    isShowStatistics: false,
  }

  showStatistics = () => {
    this.setState({isShowStatistics: true})
  }

  countTotalFeedback = () => {
    this.setState (prevState => ({total: prevState.good + prevState.neutral + prevState.bad}))
  }
  
  countPositiveFeedbackPercentage = () => {
    this.setState (prevState => ({positiveFeedback: prevState.good / (prevState.total*0.01 ) }))
  }

  goodBtnClick = () => {
    this.setState (prevState => ({
        good: prevState.good + 1}))
    this.countTotalFeedback ();
    this.countPositiveFeedbackPercentage ();
    this.showStatistics ();
  }

  neutralBtnClick = () => {
    this.setState (prevState => ({
        neutral: prevState.neutral + 1}))
    this.countTotalFeedback ();
    this.countPositiveFeedbackPercentage ();
    this.showStatistics ();
  }

  badBtnClick = () => {
    this.setState (prevState => ({
        bad: prevState.bad + 1}))
    this.countTotalFeedback ();
    this.countPositiveFeedbackPercentage ();
    this.showStatistics ();
  }
  
  render () {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions goodBtnClick={this.goodBtnClick} neutralBtnClick={this.neutralBtnClick} badBtnClick={this.badBtnClick}/>
        </Section>
        <Section title="Statistic">
          { this.state.isShowStatistics 
          ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positiveFeedback={this.state.positiveFeedback} /> 
          : <Notification message="There is no feedback"/>    }
        </Section>
      </div>
    );
  }
};


