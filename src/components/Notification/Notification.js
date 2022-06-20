import PropTypes from 'prop-types';
import s from './Notification.module.css'

const Notification = ({ message }) => {
  return (
    <>
      <p className={s.notify}>{message}</p>
    </>
  );
};

Notification.propType = {
  message: PropTypes.string.isRequired,
};

export default Notification;
