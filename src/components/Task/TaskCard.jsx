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

import EditIcon from '../../images/edit-icon.svg';
import RemoveIcon from '../../images/remove-icon.svg';
import CorrectIcon from '../../images/correct-icon.svg';

import { useSelector, useDispatch } from 'react-redux';
import { openUpdateScreen } from '../../redux/actions';

const TaskCard = (props) => {
  const [progress, setProgress] = useState('uncompleted');
  const [anchorEl, setAnchorEl] = useState(null);
  const [updateTaskClicked, setUpdateTaskClicked] = useState(false);

  let progressText = progress === 'completed' ? 'Concluído' : 'Em progresso';

  //console.log(props.task.guid);

  //Redux
  const dispatch = useDispatch();

  useEffect(() => {
    setProgress(props.task.situation);
  }, [progress]);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleDelete = () => {
    props.onDelete(props.task.guid);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //console.log(props);

  return (
    <>
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
          className="task-info"
          action={
            <IconButton
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
          <span className="progress-text">
            {progress === 'completed' ? (
              <>
                <img src={CorrectIcon} />
                <label className="button-text"> Concluído</label>
              </>
            ) : (
              'Em progresso'
            )}
          </span>
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
            dispatch(openUpdateScreen());
          }}
        >
          <img src={EditIcon} />
          <label className="btn-text" style={{ color: 'rgba(0,0,0,0.4)' }}>
            Atualizar tarefa
          </label>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleDelete();
          }}
        >
          <img src={RemoveIcon} />
          <label className="btn-text" style={{ color: 'rgba(0,0,0,0.4)' }}>
            Remover tarefa
          </label>
        </MenuItem>
      </Menu>
      <br />
    </>
  );
};

export default TaskCard;
