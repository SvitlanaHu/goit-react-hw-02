import styles from './Feedback.module.css';

export const Feedback = ({ items: { good, neutral, bad }, totalFeedback, positive}) => {
  

  return (
    <div className={styles.feedbackContainer}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positive}%</p>
    </div>
  );
};
