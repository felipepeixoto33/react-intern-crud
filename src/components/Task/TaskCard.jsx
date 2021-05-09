import React, { useState, useEffect } from 'react';
import './TaskCard.css';

import UpdateTask from '../Popups/UpdateTask';

import Card from '@material-ui/core/Card';
import Overlay from '../../images/overlay.svg';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const TaskCard = (props) => {
  const [progress, setProgress] = useState('uncompleted');
  const [anchorEl, setAnchorEl] = useState(null);
  const [updateTaskClicked, setUpdateTaskClicked] = useState(false);

  let progressText = progress === 'completed' ? 'Concluído' : 'Em progresso';

  //console.log(props.task.guid);

  useEffect(() => {
    setProgress(props.task.situation);
  }, [progress]);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleDelete = () => {
    props.onDelete(props.task.guid);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  //console.log(props);

  return (
    <>
      {/* <div className="task-card">
        <Button className="btn-overlay">
          <img src={Overlay} />
        </Button>
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
      <br /> */}
      <div className="update-dialog-container">
        <UpdateTask
          {...{ updateTaskClicked, setUpdateTaskClicked }}
          task={props.task}
          onUpdate={props.onUpdate}
        />
      </div>
      <Card
        className="task-card-container"
        style={{ backgroundColor: '#0047ff' }}
      >
        <CardHeader
          action={
            <IconButton
              className=""
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <img src={Overlay} alt="" />
            </IconButton>
          }
          title={
            <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>
              {props.task.title}
            </Typography>
          }
          subheader={
            <Typography style={{ color: 'white', fontSize: '20px' }}>
              {props.task.description}
            </Typography>
          }
          style={{ color: '#FFFFFF', fontWeight: 'bold' }}
        ></CardHeader>
        <br />
        <div className="progress-box">
          <span className="progress-text">{progressText}</span>
        </div>
      </Card>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setUpdateTaskClicked(true);
          }}
        >
          Atualizar Tarefa
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleDelete();
          }}
        >
          Remover Tarefa
        </MenuItem>
      </Menu>
      <br />
      <br />
    </>
  );
};

export default TaskCard;
