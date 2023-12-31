import './Statistics.scss';
import PropTypes from 'prop-types';

export const Statistics = ({ statistics, positive, total, state }) => {
  const newStatistics = statistics.slice(0, 3);
  const statTotal = statistics.slice(3, 4);
  const statPositive = statistics.slice(-1);
  const [good, neutral, bad] = state;
  const markupState = { good, neutral, bad };

  return (
    <ul className="feedback-box__statistics">
      {newStatistics.map((item, index) => (
        <li key={index}>
          <p>
            {item}: <span>{markupState[item.toLowerCase()]}</span>
          </p>
        </li>
      ))}
      <li className="statistics__total">
        <p>
          {statTotal}: <span>{total()}</span>
        </p>
      </li>
      <li className="statistics__positive">
        <p>
          {statPositive}: <span>{positive()}%</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
  positive: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
  state: PropTypes.array.isRequired,
};
