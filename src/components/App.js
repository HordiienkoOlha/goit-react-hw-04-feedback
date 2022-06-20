import { useState } from 'react';

import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedbackGood = () => setGood(good + 1);
  const onLeaveFeedbackNeutral = () => setNeutral(neutral + 1);
  const onLeaveFeedbackBad = () => setBad(bad + 1);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good >= 1 ? ((good / countTotalFeedback()) * 100).toFixed(0) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedbackGood={onLeaveFeedbackGood}
          onLeaveFeedbackNeutral={onLeaveFeedbackNeutral}
          onLeaveFeedbackBad={onLeaveFeedbackBad}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = e => {
//     const stateKey = e.target.name;
//     this.setState(state => ({
//       [stateKey]: state[stateKey] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, item) => acc + item, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return good >= 1
//       ? ((good / this.countTotalFeedback()) * 100).toFixed(0)
//       : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const {
//       onLeaveFeedback,
//       countTotalFeedback,
//       countPositiveFeedbackPercentage,
//     } = this;
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {countTotalFeedback() !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback()}
//               positivePercentage={countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message={'There is no feedback'} />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
