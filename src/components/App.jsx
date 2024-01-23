import { useEffect, useState } from 'react';
import { Description } from './Description/Description';
import { Feedback } from './Feedback/Feedback';
import { Options } from './Options/Options';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');

    return savedFeedback !== null
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const handleClick = (type) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const handleClickReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);
  
  return (
    <div>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        handleClick={handleClick}
        handleClickReset={handleClickReset}
      />
      {totalFeedback > 0 ? (<Feedback items={feedback} positive={positive} />) : (<Notification message="No feedback given yet." />)}
    </div>
  );
};
