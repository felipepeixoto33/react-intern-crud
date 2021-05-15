import React, { useEffect, useRef } from 'react';
import './HoverPanel.css';
import Button from '@material-ui/core/Button';
import UserIcon from '../../images/user.svg';
import TaskIcon from '../../images/task-icon.svg';
import InfoIcon from '../../images/info-icon.svg';

import { openTaskScreen, closeTaskScreen } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const HoverPanel = (props) => {
  console.log(props);
  const taskButton = useRef(null);
  const infoButton = useRef(null);

  //REDUX
  const dispatch = useDispatch();

  return (
    <div className="hover-box">
      <div className="user-grid">
        <div className="user-image-box">
          <img className="user-icon" src={UserIcon} alt="" />
        </div>
        <div className="user-info-box">
          <span className="user-name">Nome</span>
          <br />
          <label className="user-function">Função</label>
        </div>
      </div>
      <div className="btns-box">
        <div className="btn-task-box">
          <Button
            className="btn-task"
            ref={taskButton}
            onClick={() => {
              props.setInfoClicked(false);
              props.setHoverClicked(false);
              dispatch(openTaskScreen());
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
              props.setInfoClicked(true);
              props.setHoverClicked(false);
              dispatch(closeTaskScreen());
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
