import './Section.scss';
import { FeedbackOptions, Statistics, Notification } from 'components';

export const Section = ({
  data: { title, info, statistics, buttons, message },
  positive,
  total,
  update,
  state,
}) => {
  const [good, neutral, bad] = state;

  return (
    <section className="feedback-box">
      <h1>{title}</h1>
      <FeedbackOptions update={update} buttons={buttons} />
      <h2>{info}</h2>
      {good || neutral || bad ? (
        <Statistics
          positive={positive}
          total={total}
          statistics={statistics}
          state={state}
        />
      ) : (
        <Notification message={message} />
      )}
    </section>
  );
};
