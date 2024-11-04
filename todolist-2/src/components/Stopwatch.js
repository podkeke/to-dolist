// Stopwatch.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StopwatchContainer = styled.div`
  margin-top: -70px;
  display: flex;
  margin-left:231px;
`;

const StopwatchDisplay = styled.div`
  font-size: 35px; /* 시간 표시 글씨 크기 증가 */
  font-weight: bold;
  color: #111e6c;
  margin-right: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column; /* 버튼을 세로로 정렬 */
  align-items: center;
`;

const StopwatchButton = styled.button`
  width: 10px; /* 버튼의 너비 */
  height: 10px; /* 버튼의 높이 */
  margin: 5px 0; /* 버튼 간격 */
  border-radius: 50%; /* 동그란 버튼 */
  font-size: 24px; /* 버튼 안의 글씨 크기 */
  cursor: pointer;
  color: #fff; /* 글씨 색상 */
  border: none; /* 테두리 없음 */
  display: flex;
  align-items: center; /* 아이콘 수직 중앙 정렬 */
  justify-content: center; /* 아이콘 수평 중앙 정렬 */

  &.start {
    background-color: #28a745; /* 시작 버튼 색상 - 초록색 */
  }

  &.stop {
    background-color: #dc3545; /* 중지 버튼 색상 - 빨강색 */
  }

  &.reset {
    background-color: #007bff; /* 재시작 버튼 색상 - 파란색 */
  }

  &:hover {
    opacity: 0.8; /* 호버 시 투명도 변경 */
  }
`;

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); // time in seconds

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}H ${minutes}M ${secs}S`;
  };

  return (
    <StopwatchContainer>
      <StopwatchDisplay>{formatTime(time)}</StopwatchDisplay>
      <ButtonsContainer>
        <StopwatchButton className="start" onClick={startTimer}></StopwatchButton>
        <StopwatchButton className="stop" onClick={stopTimer}></StopwatchButton>
        <StopwatchButton className="reset" onClick={resetTimer}></StopwatchButton>
      </ButtonsContainer>
    </StopwatchContainer>
  );
};

export default Stopwatch;
