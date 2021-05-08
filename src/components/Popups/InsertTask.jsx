import React, { useState } from 'react';
import './InsertTask.css';

const InsertPopup = (props) => {
  const initialValues = {
    title: '',
    description: '',
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setNewTaskClicked(false);
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
    }
  };

  return (
    <div className="insert-popup-box">
      <div className="insert-form-box">
        <form className="insert-form" onSubmit={handleSubmit}>
          <div className="title-box">
            <h3 className="insert-title">Criar Tarefa</h3>
          </div>
          <div className="inputs-box">
            <div className="task-name-input-box">
              <input
                className="task-name-input"
                name="title"
                type="text"
                onChange={handleChange}
              />
            </div>
            <p />
            <div className="task-description-input-box">
              <input
                className="task-description-input"
                name="description"
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="btns-box">
            <div className="btn-confirm-box">
              <button className="btn-confirm" onClick={handleConfirm}>
                CONFIRM
              </button>
            </div>
            <div className="btn-cancel-box">
              <button className="btn-cancel">CANCEL</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsertPopup;
