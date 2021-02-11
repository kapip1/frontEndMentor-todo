import styled from 'styled-components';

const Panel = styled.div`
  display: flex;
  width: 60%;
  height: 6.3rem;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;
  background-color: var(--task-color-dark);
`;
const Button = styled.button`
  background-color: transparent;
  color: hsl(236, 9%, 61%);
  font-weight: 700;
  border: none;
  font-size: 1.5rem;
  &:focus {
    outline: none;
  }
`;
const PanelWrapper = styled.div`
  width: 100%;
  background-color: var(--task-color-dark);
  border-radius: 0.7rem;
`;

const TaskListPanel = ({ getRenderType, render }) => {
  const handleBtnClick = (e) => {
    const name = e.target.name;
    if (name === 'all') {
      getRenderType(0);
    } else if (name === 'active') {
      getRenderType(1);
    } else if (name === 'completed') {
      getRenderType(2);
    }
  };
  return (
    <PanelWrapper>
      <Panel>
        <Button
          style={render === 0 ? { color: 'hsl(220, 98%, 61%)' } : null}
          name="all"
          onClick={handleBtnClick}
        >
          All
        </Button>
        <Button
          name="active"
          onClick={handleBtnClick}
          style={render === 1 ? { color: 'hsl(220, 98%, 61%)' } : null}
        >
          Active
        </Button>
        <Button
          name="completed"
          onClick={handleBtnClick}
          style={render === 2 ? { color: 'hsl(220, 98%, 61%)' } : null}
        >
          Completed
        </Button>
      </Panel>
    </PanelWrapper>
  );
};
export default TaskListPanel;
