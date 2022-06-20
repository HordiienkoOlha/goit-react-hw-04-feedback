import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
  options,
}) => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.listItem}>
          <button className={s.button} onClick={onLeaveFeedbackGood}>
            {options[0]}
          </button>
        </li>
        <li className={s.listItem}>
          <button className={s.button} onClick={onLeaveFeedbackNeutral}>
            {options[1]}
          </button>
        </li>
        <li className={s.listItem}>
          <button className={s.button} onClick={onLeaveFeedbackBad}>
            {options[2]}
          </button>
        </li>
      </ul>
    </>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
