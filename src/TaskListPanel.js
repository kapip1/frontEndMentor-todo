import styled from 'styled-components';

const Panel = styled.div`
  display: flex;
  width: 60%;
  height: 5.3rem;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0 auto;
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
  );
};
export default TaskListPanel;
