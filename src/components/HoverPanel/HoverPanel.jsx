import React, { useEffect, useRef } from 'react';
import './HoverPanel.css';
import Button from '@material-ui/core/Button';
import UserIcon from '../../images/user.svg';
import TaskIcon from '../../images/task-icon.svg';
import InfoIcon from '../../images/info-icon.svg';

const HoverPanel = (props) => {
  console.log(props);
  const taskButton = useRef(null);
  const infoButton = useRef(null);

  useEffect(() => {
    if (props.tasksClicked) {
      taskButton.current.focus();
    } else {
      infoButton.current.focus();
    }
  }, [props.infoClicked, props.tasksClicked]);

  return (
    <div className="hover-box">
      <div className="user-box">
        <img className="user-icon" src={UserIcon} alt="" />
        <div className="user-info-box">
          <h3 className="user-name">Nome</h3>
          <p className="user-function">Função</p>
        </div>
      </div>
      <div className="btns-box">
        <div className="btn-task-box">
          <Button
            className="btn-task"
            ref={taskButton}
            onClick={() => {
              props.setTasksClicked(true);
              props.setInfoClicked(false);
              props.setHoverClicked(false);
            }}
          >
            <img src={TaskIcon} alt="" />
            <label className="btn-text">Tarefas</label>
          </Button>
        </div>

        <div className="btn-info-box">
          <Button
            className="btn-info"
            ref={infoButton}
            onClick={() => {
              props.setTasksClicked(false);
              props.setInfoClicked(true);
              props.setHoverClicked(false);
            }}
          >
            <img src={InfoIcon} alt="" />
            <label className="btn-text">Sobre</label>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HoverPanel;
