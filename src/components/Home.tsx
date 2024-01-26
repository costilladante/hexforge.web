import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('Nothing');
  const [count, setCount] = useState(0);
  const [count0, setCount0] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  let isTouchDevice = false;

  const onTouchStart = (e: any) => {
    // e.preventDefault(); // This fix  won't work on all Browsers
    isTouchDevice = true;
    setText('onTouchStart');
    setCount1((prevState) => prevState + 1);
    console.log('onTouchStart');
  };
  const onTouchMove = (e: any) => {
    // e.preventDefault(); // This fix  won't work on all Browsers
    setText('onTouchMove');
    setCount2((prevState) => prevState + 1);
    console.log('started');
  };
  const onTouchEnd = (e: any) => {
    // e.preventDefault(); // This fix  won't work on all Browsers
    setText('onTouchEnd');
    setCount3((prevState) => prevState + 1);
    console.log('onTouchEnd');
  };

  const onTouchCancel = (e: any) => {
    // e.preventDefault(); // This fix  won't work on all Browsers
    setText('onTouchCancel');
    setCount4((prevState) => prevState + 1);
    console.log('onTouchCancel');
  };

  const onClick = (e: any) => {
    if (isTouchDevice) return;
    console.log('e', e);
    setText('onClick');
    setCount((prevState) => prevState + 1);
  };

  const onMouseMove = (e: any) => {
    if (isTouchDevice) return;
    console.log('e', e);
    setText('onMouseMove');
    setCount0((prevState) => prevState + 1);
  };

  return (
    <div>
      <span style={{ color: 'red', zIndex: 2 }}>{text}</span>
      <span style={{ color: 'green', zIndex: 2 }}>{count}</span>
      <span style={{ color: 'orange', zIndex: 2 }}>{count0}</span>
      <span style={{ color: 'cyan', zIndex: 2 }}>{count1}</span>
      <span style={{ color: 'magenta', zIndex: 2 }}>{count2}</span>
      <span style={{ color: 'yellow', zIndex: 2 }}>{count3}</span>
      <span style={{ color: 'pink', zIndex: 2 }}>{count4}</span>
      <div
        id='hex-grid'
        className='container'
        onClick={onClick}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchCancel}
      >
        <div className='light' />

        <div className='grid' />
      </div>
    </div>
  );
};

export default Home;
