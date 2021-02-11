import styled from 'styled-components';

const EmptyTaskWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: var(--task-color-dark);
  font-size: 1.5rem;
  height: 6.3rem;
  height: 6.3rem;
  color: var(--font-color);
`;

const EmptyTask = () => {
  return (
    <EmptyTaskWrapper>
      <p>list is empty</p>
    </EmptyTaskWrapper>
  );
};
export default EmptyTask;
