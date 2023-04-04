import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // positiveFeedback: 0,
    // isShowStatistics: false,
  };

  leaveFeedback = name => {
    this.setState(lastState => {
      return {
        [name]: lastState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback()) {
      const percent = Math.round(
        this.state.good / (this.countTotalFeedback() * 0.01)
      );
      return percent;
    }
  }

  // showStatistics = () => {
  //   this.setState({ isShowStatistics: true });
  // };

  // countTotalFeedback = () => {
  //   this.setState(prevState => ({
  //     total: prevState.good + prevState.neutral + prevState.bad,
  //   }));
  // };

  // countPositiveFeedbackPercentage = () => {
  //   this.setState(prevState => ({
  //     positiveFeedback: Math.round(prevState.good / (prevState.total * 0.01)),
  //   }));
  // };

  // goodBtnClick = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  //   this.showStatistics();
  // };

  // neutralBtnClick = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  //   this.showStatistics();
  // };

  // badBtnClick = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  //   this.showStatistics();
  // };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
            // goodBtnClick={this.goodBtnClick}
            // neutralBtnClick={this.neutralBtnClick}
            // badBtnClick={this.badBtnClick}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
