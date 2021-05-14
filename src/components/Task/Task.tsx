import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Task.css';

//import { useSelector, useDispatch } from 'react-redux';
//import { openTaskScreen, closeTaskScreen } from '../../redux/actions';

import TaskCard from './TaskCard';
import SearchIcon from '../../images/search.svg';
import PlusIcon from '../../images/plus-icon.svg';
import InsertTask from '../Popups/InsertTask';

interface Task {
  guid: string;
  title: string;
  description: string;
  situation: string;
}

const Task = () => {
  const [searchValue, setSearchValue] = useState('');
  const [tasks, setTasks] = useState([]);
  let [searchedTasks, setSearchedTasks] = useState([]);
  const [newTaskClicked, setNewTaskClicked] = useState(false);

  //const dispatch = useDispatch();

  const url = 'https://chronos.compraqui.app/api/tasks';

  //console.log(props);

  const taskRequest = () => {
    if (tasks.length > 0) {
      setTasks([]);
    }

    axios.get(url).then((req) => {
      setTasks(req.data);
    });
  };

  useEffect(() => {
    taskRequest();
  }, []);

  useEffect(() => {
    setSearchedTasks(
      tasks.filter((task: Task) => {
        //console.log('filtered');
        return task.title.toLowerCase().search(searchValue.toLowerCase()) != -1;
      })
    );
  }, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    //console.log(searchedTasks);
  };

  let toShow = searchValue != '' ? searchedTasks : tasks;

  const onInsert = (obj: Task) => {
    axios.post(url, obj).then(() => {
      taskRequest();
    });
  };

  const onUpdate = (obj: Task) => {
    axios.put(`${url}`, obj).then(() => {
      taskRequest();
    });
  };

  const onDelete = (id: string) => {
    axios.delete(`${url}/${id}`).then(() => {
      console.log(`${url}/${id}`);
      taskRequest();
    });
  };

  return (
    <>
      <div className="popup">
        <InsertTask {...{ newTaskClicked, setNewTaskClicked, onInsert }} />
      </div>
      <div className="tasks-box">
        <div className="search-input-box">
          <img src={SearchIcon} />
          <input
            className="search-input"
            style={{ border: 'none' }}
            type="text"
            placeholder="Procurar Tarefas"
            name="searchValue"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
        <div className="task-title-box">
          <h3 className="task-title">Tarefas</h3>
        </div>
        <div className="task-card-box">
          {toShow.map((task: Task) => {
            return (
              <div className="task-card-row" key={task.guid}>
                <TaskCard {...{ task, onUpdate, onDelete }} />
              </div>
            );
          })}
        </div>
        <div className="btn-new-task-box">
          <button
            className="btn btn-new-task"
            onClick={() => {
              setNewTaskClicked(true);
              console.log('new task clicked');
            }}
          >
            <img src={PlusIcon} />
            <span className="btn-new-task-text">Nova Tarefa</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
