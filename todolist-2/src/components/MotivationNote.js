// MotivationNote.js
import React, { useState } from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
  padding: 20px;
  background-color: #F5E6E8;
  text-align: center;
  margin: 10px 20px;
  border-radius: 8px;
`;

const NoteInput = styled.textarea`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  background-color: #FFFFFF;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const MotivationNote = () => {
  const [note, setNote] = useState("오늘 하루에 대해 자기성찰을 해보세요!");

  return (
    <NoteContainer>
      <NoteInput
        rows="3"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </NoteContainer>
  );
};
export default MotivationNote;
