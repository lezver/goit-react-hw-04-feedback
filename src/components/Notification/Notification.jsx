import './Notification.scss';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className="feedback-box__notification">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
