import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2>Statistics</h2>
      {total > 0 ? (
        <div className={styles.statistics}>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total} </span>
          <span>Positive feedback: {positivePercentage}%</span>
        </div>
      ) : (
        "No feedback given"
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
