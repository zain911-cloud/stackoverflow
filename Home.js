import React, { useEffect, useState } from 'react';
import QuestionCard from '../components/QuestionCard';

const Home = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow')
      .then(response => response.json())
      .then(data => setQuestions(data.items))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="home">
      <h1>StackOverflow</h1>
      <div className="questions">
        {questions.map(question => (
          <QuestionCard
            key={question.question_id}
            title={question.title}
            tags={question.tags}
            author={question.owner.display_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
