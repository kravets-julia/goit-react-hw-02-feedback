import PropTypes from 'prop-types';
import css from '../../components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btn__box}>
      {options.map(name => (
        <button
          className={css.btn}
          key={name}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// export const FeedbackOptions = ({
//   goodBtnClick,
//   neutralBtnClick,
//   badBtnClick,
// }) => {
//   return (
//     <div className={css.btn__box}>
//       {/* <h2>Please leave feedback </h2>  */}
//       <button className={css.btn} onClick={goodBtnClick}>
//         Good
//       </button>
//       <button className={css.btn} onClick={neutralBtnClick}>
//         Neutral
//       </button>
//       <button className={css.btn} onClick={badBtnClick}>
//         Bad
//       </button>
//     </div>
//   );
// };
