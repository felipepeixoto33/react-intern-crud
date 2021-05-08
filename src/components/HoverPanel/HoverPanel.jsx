import React from 'react';
import './HoverPanel.css';
import UserIcon from '../../images/user.svg';
import TaskIcon from '../../images/task-icon.svg';
import InfoIcon from '../../images/info-icon.svg';

const HoverPanel = (props) => {
  console.log(props);

  return (
    <>
      <div className="hover-box">
        <div className="user-box">
          <img className="user-icon" src={UserIcon} alt="" />
          <div className="user-info-box">
            <h3 className="user-name">Nome</h3>
            <p className="user-function">Funcao</p>
          </div>
        </div>
        <div className="btns-box">
          <div className="btn-task-box">
            <button
              className="btn-task"
              onClick={() => {
                props.setTasksClicked(true);
                props.setInfoClicked(false);
              }}
            >
              <img src={TaskIcon} alt="" />
              <label className="btn-text">Tarefas</label>
              <a />
            </button>
          </div>
          <div className="btn-info-box">
            <button
              className="btn-info"
              onClick={() => {
                props.setInfoClicked(true);
                props.setTasksClicked(false);
              }}
            >
              <img src={InfoIcon} alt="" />
              <label className="btn-text">Info</label>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverPanel;