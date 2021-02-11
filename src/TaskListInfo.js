import styled from 'styled-components';

const TaskListInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  height: 5.3rem;
  align-items: center;
  background-color: var(--task-color-dark);
  width: 100%;
  color: hsl(236, 9%, 61%);
  font-size: 1.1rem;
  margin: 0 auto;
  padding: 0 2rem;
`;
const Button = styled.button`
  background-color: transparent;
  color: hsl(236, 9%, 61%);
  font-family: 'Josefin Sans', sans-serif;
  border: none;
  &:focus {
    outline: none;
  }
`;

const TaskListInfo = () => {
  return (
    <TaskListInfoWrapper>
      <span>{3} items left</span>
      <Button>Clear Complited</Button>
    </TaskListInfoWrapper>
  );
};
export default TaskListInfo;
