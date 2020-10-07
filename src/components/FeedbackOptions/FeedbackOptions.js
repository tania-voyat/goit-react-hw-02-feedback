import React from "react";
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={styles.feedback}>
      <button
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onGoodFeedback: PropTypes.func,
  onNeutralFeedback: PropTypes.func,
  onBadFeedback: PropTypes.func,
};
export default FeedbackOptions;
