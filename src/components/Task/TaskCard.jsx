import React, { useState, useEffect } from 'react';
import './TaskCard.css';

const TaskCard = (props) => {
  const [progress, setProgress] = useState('uncompleted');

  let progressText = progress === 'completed' ? 'Concluído' : 'Em progresso';

  //console.log(props.task.guid);

  useEffect(() => {
    setProgress(props.task.situation);
  }, [progress]);

  return (
    <div className="task-card">
      <div className="task-name-box">
        <h3 className="task-name">{props.task.title}</h3>
      </div>
      <div className="task-description-box">
        <span className="task-description">{props.task.description}</span>
      </div>
      <div className="progress-box">
        <span className="progress-text">{progressText}</span>
      </div>
    </div>
  );
};

export default TaskCard;
