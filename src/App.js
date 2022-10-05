import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);


  let [cond,setCond]=useState(true)
  let [buttonName,setButtonNAme]=useState('Change To Descending Order')
const changeCondition=()=>
{
  setCond((cond)=!cond)
  if(cond===false)
  {
    setButtonNAme('Change To Ascending Order')
  }
  else{
    setButtonNAme('Change To Descending Order')
  }
  
}


  const listItems=useMemo(()=>
  {
    return [5, 3, 1, 10, 9]
  },[])

  

  

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} cond={cond} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeCondition}>{buttonName}</Button>
    </div>
  );
}

export default App;
