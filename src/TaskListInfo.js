import styled from 'styled-components';

const TaskListInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  height: 6.3rem;
  align-items: center;
  background-color: var(--task-color-dark);
  width: 100%;
  color: hsl(236, 9%, 61%);
  font-size: 1.1rem;
  margin: 0 auto;
  padding: 0 2rem;
  border-radius: 0 0 0.7rem 0.7rem;
  @media (min-width: 1440px) {
    font-size: 1.45rem;
  }
`;
const Button = styled.button`
  background-color: transparent;
  color: hsl(236, 9%, 61%);
  font-family: 'Josefin Sans', sans-serif;
  border: none;
  &:focus {
    outline: none;
  }
  @media (min-width: 1440px) {
    font-size: 1.45rem;
  }
`;

const TaskListInfo = ({ handleTaskClear, length }) => {
  return (
    <TaskListInfoWrapper>
      <span>{length} items left</span>
      <Button onClick={handleTaskClear}>Clear Complited</Button>
    </TaskListInfoWrapper>
  );
};
export default TaskListInfo;
