import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  };

  const decrement = () => {
    if(count > 0){
      setCount(count - 1);
    }
  };

  return(
    <div style={{textAlign:'counter', marginTop:'50px'}}>
      <h2>카운터 애플리케이션</h2>
      <p>현재 카운트: {count}</p>
      <button onClick={increment} style={{marginRight:'10px'}}>
        증가
      </button>
      <button onClick={decrement}>
        감소
      </button>
    </div>
  );
};

export default Counter;