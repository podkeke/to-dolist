import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  &:hover {
    color: #ff6b6b;
  }
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  margin-right: 10px;
  &:hover {
    color: #8ec96d;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
    ${Edit} {
      opacity: 1;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #111e6c;
      color: #111e6c;
    `}
`;

const EditInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 21px;
  margin-right: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  const onEdit = () => {
    const newText = inputRef.current.value;
    if (newText) {
      dispatch({ type: 'EDIT', id, text: newText });
      setIsEditing(false);
    }
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>

      {isEditing ? (
        <>
          <EditInput ref={inputRef} defaultValue={text} />
          <Edit onClick={onEdit}>
            <MdEdit />
          </Edit>
        </>
      ) : (
        <>
          <Text done={done}>{text}</Text>
          <Edit onClick={() => setIsEditing(true)}>
            <MdEdit />
          </Edit>
        </>
      )}

      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
