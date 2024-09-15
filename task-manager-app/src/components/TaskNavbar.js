import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddTodoSlider from './AddTodoSlider';

function TaskNavbar({showAll,showAllTodo,showAllDone,showAllPending}) {
  return (
    <>
      <Navbar
        style={{ width: '100%',padding:'10px'}}
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand onClick={showAll} style={{fontSize:'40px'}}>Task Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{marginLeft:'40px', display:'flex',width:'30%',justifyContent:'space-around'}}>
              <Nav.Link  style={{fontSize:'20px'}} onClick={showAllTodo}>To-Do</Nav.Link>
              <Nav.Link style={{fontSize:'20px'}} onClick={showAllPending}>In-Progress</Nav.Link>
              <Nav.Link style={{fontSize:'20px'}} onClick={showAllDone}>Done</Nav.Link>
            </Nav>
            <AddTodoSlider />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TaskNavbar;
