import React, { useState, useEffect } from 'react';
import './App.css';

import Backdrop from '@material-ui/core/Backdrop';

import MobileButton from './images/mobile-button.svg';
import HoverPanel from './components/HoverPanel/HoverPanel';
import Task from './components/Task/Task';

import { openTaskScreen, closeTaskScreen } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const [infoClicked, setInfoClicked] = useState(false);

  //#region MOBILE
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hoverClicked, setHoverClicked] = useState(false);
  const mobileMaxWidth = 960;

  let windowWidth = window.innerWidth;

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);
  //#endregion

  //#region REDUX

  const taskScreen = useSelector((state) => state.taskScreenReducer);

  //#endregion

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
              setInfoClicked,
              setHoverClicked,
            }}
          />
        )}
        <div aria-disabled="false" className="task-box">
          {taskScreen && <Task />}
        </div>
      </div>
    </>
  );
};

export default App;
