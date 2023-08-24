import React from 'react';

const QuestionCard = ({ title, tags, author }) => {
  return (
    <div className="question-card">
      <h3>{title}</h3>
      <p>Tags: {tags.join(', ')}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default QuestionCard;
