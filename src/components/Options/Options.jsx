import { Button } from '../Button/Button';
import styles from './Options.module.css';

export const Options = ({
  totalFeedback,
  handleClick,
  handleClickReset,
}) => {
  
  return (
    <div className={styles.optionsContainer}>
      <Button onClick={() => (handleClick("good"))}>Good</Button>
      <Button onClick={() => (handleClick("neutral"))}>Neutral</Button>
      <Button onClick={() => (handleClick("bad"))}>Bad</Button>
      {totalFeedback > 0 && <Button onClick={handleClickReset}>Reset</Button>}
    </div>
  );
};
