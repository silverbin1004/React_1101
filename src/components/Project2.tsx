import React, {useState} from 'react';

const ColorToggle=()=>{
  const [isBlue,setIsBlue ] = useState(true);

  const toggleColor = () => {
    setIsBlue(!isBlue);
  };

  const backgrountColor = isBlue ? '#Add8E6' : '#90EE90';
  const ColorText = isBlue ? '파란색' : '초록색';

  return (
    <div style={{height: '200px', 
      backgroundColor: backgrountColor,
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      border:'1px solid #ccc',
      marginTop:'50px',
    }}>
      <h2>색상 토글 스위치</h2>
      <p>현재 색상: {ColorText}</p>
      <button onClick={toggleColor} style={{padding:'10px 20px'}}>색상 변경</button>
    </div>
  );
};

export default ColorToggle;