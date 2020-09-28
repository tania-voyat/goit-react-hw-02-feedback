import React from "react";
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

function FeedbackOptions({ onGoodFeedback, onNeutralFeedback, onBadFeedback }) {
  return (
    <div className={styles.feedback}>
      <button type="button" className={styles.button} onClick={onGoodFeedback}>
        Good
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={onNeutralFeedback}
      >
        Neutral
      </button>
      <button type="button" className={styles.button} onClick={onBadFeedback}>
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
