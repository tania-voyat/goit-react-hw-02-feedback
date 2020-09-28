import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";


export default class App extends Component {
  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    console.log("Good");
    this.setState({
      good: this.state.good + 1,
    });
  };
  handleNeutralFeedback = () => {
    console.log("Neutral");
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };
  handleBadFeedback = () => {
    console.log("Bad");
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    return (
      <section>
        <h2>Please leave your feedback</h2>
        <FeedbackOptions
          onGoodFeedback={this.handleGoodFeedback}
          onNeutralFeedback={this.handleNeutralFeedback}
          onBadFeedback={this.handleBadFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </section>
    );
  }
}
