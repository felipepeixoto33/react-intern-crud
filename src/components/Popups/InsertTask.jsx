import React, { useState, useEffect } from 'react';
import './InsertTask.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const InsertPopup = (props) => {
  const initialValues = {
    title: '',
    description: '',
  };
  const [values, setValues] = useState(initialValues);
  const [open, setOpen] = useState(props.newTaskClicked);

  useEffect(() => {
    setOpen(props.newTaskClicked);
    console.log(props.newTaskClicked);
  }, [props.newTaskClicked]);

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
      props.onInsert(values);
      props.setNewTaskClicked(false);
      setValues(initialValues);
    }
  };

  const handleCancel = () => {
    props.setNewTaskClicked(false);
    setValues(initialValues);
  };

  return (
    <div className="insert-popup-box">
      <Dialog className="dialog-box" open={open} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title" className="dialog-title">
          <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Criar Tarefa
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

export default InsertPopup;
