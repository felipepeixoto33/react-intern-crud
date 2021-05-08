import React, { useState } from 'react';
import './App.css';
import MobileButton from './images/mobile-button.svg';
import HoverPanel from './components/HoverPanel/HoverPanel';
import Task from './components/Task/Task';

const App = () => {
  const [infoClicked, setInfoClicked] = useState(false);
  const [tasksClicked, setTasksClicked] = useState(false);

  return (
    <>
      <div className="box">
        <HoverPanel {...{ setTasksClicked, setInfoClicked }} />
        <div className="task-box">{tasksClicked && <Task />}</div>
      </div>
    </>
  );
};

export default App;

//MOBILE
// {clicked == true ? (
//     <HoverPanel />
//   ) : (
//     <div className="btn-box">
//       {/* <img src={MobileButton} alt="mobile-button" /> */}
//       <input
//         type="image"
//         src={MobileButton}
//         onClick={() => setClicked(true)}
//       />
//     </div>
//   )}
