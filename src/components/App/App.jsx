import { Component } from 'react';
import { Section, feedbackInfo } from 'components';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleUpdate = ({ target: { textContent } }) => {
    const item = textContent.toLowerCase();
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good * 100) / (good + neutral + bad));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  render() {
    return (
      <>
        <Section
          data={feedbackInfo}
          total={this.countTotalFeedback}
          positive={this.countPositiveFeedbackPercentage}
          update={this.handleUpdate}
          state={this.state}
        />
      </>
    );
  }
}
