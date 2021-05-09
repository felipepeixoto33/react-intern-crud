import React, { useState, useEffect } from 'react';
import './UpdateTask.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const UpdatePopup = (props) => {
  const initialValues = {
    guid: props.task.guid,
    title: props.task.title,
    description: props.task.description,
    situation: props.task.situation,
  };
  const [values, setValues] = useState(initialValues);
  const [open, setOpen] = useState(props.updateTaskClicked);

  useEffect(() => {
    setOpen(props.updateTaskClicked);
  }, [props.updateTaskClicked]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    //console.log(values);
  };

  const handleConfirm = (e) => {
    let formCompleted = true;
    if (values.title == '') {
      formCompleted = false;
    }

    if (values.description == '') {
      formCompleted = false;
    }

    if (formCompleted) {
      props.onUpdate(values);
      //console.log(props);
      props.setUpdateTaskClicked(false);
      setValues(initialValues);
    }
  };

  const handleCancel = () => {
    props.setUpdateTaskClicked(false);
    setValues(initialValues);
  };

  return (
    <div className="insert-popup-box">
      <Dialog className="dialog-box" open={open} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title" className="dialog-title">
          <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Atualizar Tarefa
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            className="task-title-input"
            label="Nome da Tarefa"
            variant="outlined"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <p />
          <TextField
            className="task-desc-input"
            label="Descricao da Tarefa"
            variant="outlined"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          <p />
          <div className="btns-task-progress-container">
            <div className="btn-progress-container">
              <Button
                className="btn-progress"
                onClick={() => {
                  setValues({ ...values, situation: 'uncompleted' });
                }}
              >
                <Typography style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  Em progresso
                </Typography>
              </Button>
            </div>
            <div className="btn-completed-container">
              <Button
                className="btn-completed"
                onClick={() => {
                  setValues({ ...values, situation: 'completed' });
                }}
              >
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                  }}
                >
                  Concluido
                </Typography>
              </Button>
            </div>
          </div>
          <div className="btns-container">
            <Button className="btn-cancel" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button className="btn-save" onClick={handleConfirm}>
              Salvar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdatePopup;
