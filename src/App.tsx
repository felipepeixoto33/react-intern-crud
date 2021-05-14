import React, { useState, useEffect } from 'react';
import './App.css';

import Backdrop from '@material-ui/core/Backdrop';

import MobileButton from './images/mobile-button.svg';
import HoverPanel from './components/HoverPanel/HoverPanel';
import Task from './components/Task/Task';

//import { openTaskScreen, closeTaskScreen } from './redux/actions';
//import { useSelector, useDispatch } from 'react-redux';

const App: React.FC = () => {
  const [infoClicked, setInfoClicked] = useState<boolean>(false);
  const [tasksClicked, setTasksClicked] = useState<boolean>(false);

  //Mobile
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hoverClicked, setHoverClicked] = useState(false);
  const mobileMaxWidth = 960;

  let windowWidth = window.innerWidth;

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return (
    <>
      <div className="box">
        {screenWidth < mobileMaxWidth ? (
          <>
            {hoverClicked == true ? (
              <>
                {/* <Backdrop
                  open={hoverClicked}
                  onClick={() => {
                    setHoverClicked(false);
                  }}
                > */}
                <HoverPanel
                  {...{
                    infoClicked,
                    tasksClicked,
                    setTasksClicked,
                    setInfoClicked,
                    setHoverClicked,
                  }}
                />
                {/* </Backdrop> */}
              </>
            ) : (
              <div className="btn-box">
                {/* <img src={MobileButton} alt="mobile-button" /> */}
                <input
                  type="image"
                  src={MobileButton}
                  onClick={() => setHoverClicked(true)}
                />
              </div>
            )}
          </>
        ) : (
          <HoverPanel
            {...{
              infoClicked,
              tasksClicked,
              setTasksClicked,
              setInfoClicked,
              setHoverClicked,
            }}
          />
        )}
        <div className="task-box">{tasksClicked && <Task />}</div>
      </div>
    </>
  );
};

export default App;

//MOBILE
