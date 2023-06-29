import './FeedbackOptions.scss';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ buttons, update }) => {
  return (
    <>
      <ul className="feedback-box__options">
        {buttons.map((item, index) => (
          <li key={index}>
            <button type="button" onClick={update}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  buttons: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
};
