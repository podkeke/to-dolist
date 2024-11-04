// TodoHead.js
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import Stopwatch from './Stopwatch';

const TodoHeadBlockUp = styled.div`
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    margin-left: 70px;
    font-size: 45px;
    font-family: 'Times New Roman', Times, serif;
    color: #000000;
    float: left;
  }
  .day {
    margin-top: 15px;
    margin-left: 300px;
    color: #f098a2;
    font-size: 27px;
    font-family: 'Times New Roman', Times, serif;
  }
`;

const TodoHeadBlockDown = styled.div`
  padding-top: 10px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;

  .tasks-left {
    margin-top: 80px;
    position: absolute;
    right: 25px;
    color: #111e6c;
    font-size: 15px;
  }
  .rate {
    font-family: 'Times New Roman', Times, serif;
    margin-left: 10px;
    font-size: 50px;
    color: #FF0000;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .status {
    margin-left: 15px;
    font-size: 16px;
    color: #111e6c;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
  const doneTasks = todos.length - undoneTasks.length;
  const completionRate = todos.length > 0 ? (doneTasks / todos.length) * 100 : 0;

  const today = new Date();
  const dateString = today.toLocaleDateString({
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });

  let statusMessage;
  let emoji;

  if (completionRate === 100) {
    statusMessage = "모든 할 일을 완료했습니다!";
    emoji = "🎉";
  } else if (completionRate >= 50) {
    statusMessage = "절반 이상 완료했어요!";
    emoji = "👍";
  } else if (completionRate > 0) {
    statusMessage = "조금 더 힘내세요!";
    emoji = "💪";
  } else {
    statusMessage = "하루를 시작하세요!";
    emoji = "🌞";
  }

  return (
    <>
      <TodoHeadBlockUp>
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
      </TodoHeadBlockUp>

      <TodoHeadBlockDown>
        <div className="status">{statusMessage}</div>
        <div className="tasks-left">
          {doneTasks} / {todos.length}
        </div>
        <div className="rate">
          {completionRate.toFixed(0)}% {emoji}
        </div>
        <Stopwatch />
      </TodoHeadBlockDown>
    </>
  );
}

export default TodoHead;
