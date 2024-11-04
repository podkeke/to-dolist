//오늘의 날짜와 요일, 해야 할 일 개수 표시
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;

  h1 {//xxxx년 xx월 xx일
    margin: 0;
    margin-left: 70px;
    font-size: 45px;
    font-family:'Times New Roman', Times, serif;
    color: #000000;
    float:left;
  }
  .day {//x요일
    margin-top: 15px;
    margin-left: 300px;
    color: #f098a2;
    font-size: 27px;
    font-family:'Times New Roman', Times, serif;
    
  }

  .tasks-left {
    margin-top: 1px;
    position: absolute;
    right: 30px;
    color: #f06C84;
    font-size: 18px;
    font-weight: bold;
    
  }
  .rate {
    font-family:'Times New Roman', Times, serif;
    margin-top: 1px;
    margin-left: 10px;
    font-size: 50px;
    color: #111e6c;
    font-weight: bold;
  }
  .status {
    margin-top: 40px;
    margin-left: 15px;
    font-size: 16px;
    color: #111e6c;

  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
  const doneTasks=todos.length-undoneTasks.length;
  const completionRate=(doneTasks/todos.length)*100;

  const today = new Date();
  const dateString = today.toLocaleDateString({
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('en-US',{ weekday: 'long' });
  
  let statusMessage;
  if (completionRate === 100) {
    statusMessage = "모든 할 일을 완료했습니다!";
  } else if (completionRate >= 50) {
    statusMessage = "절반 이상 완료했어요!";
  } else if (completionRate > 0) {
    statusMessage = "조금 더 힘내세요!";
  } else {
    statusMessage = "하루를 시작하세요!";
  }

  
  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div> 
      <div className="status">{statusMessage}</div>   
      <div className="tasks-left">{doneTasks} / {todos.length}</div>
      <div className="rate">{completionRate.toFixed(0)}%</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;