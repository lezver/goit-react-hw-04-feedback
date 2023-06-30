import { useState } from 'react';
import { Section, feedbackInfo } from 'components';

export const App = () => {
  const [good, setDood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleUpdate = ({ target: { textContent } }) => {
    const item = textContent.toLowerCase();

    switch (item) {
      case 'good':
        return setDood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  return (
    <Section
      data={feedbackInfo}
      total={countTotalFeedback}
      positive={countPositiveFeedbackPercentage}
      update={handleUpdate}
      state={[good, neutral, bad]}
    />
  );
};
