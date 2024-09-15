import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import CardFooter from "react-bootstrap/CardFooter";

function TaskCard({ task, cardType }) {
  const colorArr = ["#ea706f", "#e3d97b", "#a5e37f"];
  const textArr = ["Progress", "Done"];
const navigate =  useNavigate()
const handleDragStart = (e) => {
  e.dataTransfer.setData("taskId", task.id); 
};
  return (
    <Card  draggable
    onDragStart={handleDragStart}
     style={{ margin: "5px",backgroundColor:`${colorArr[cardType]}`,width:'100%' }}>
      <Card.Header>
        <b><p style={{whiteSpace:'nowrap',overflow:'hidden' ,textOverflow:'ellipsis',width:'100%'}}>{`Task Id : ${task.id}`}</p></b>
      </Card.Header>
      <Card.Body>
        <div><b>
        Description:
          </b></div>
        {`${task.todo}`}        
      </Card.Body>
      <CardFooter>
      <Button variant="primary" style={{width:'100%',margin:'1%'}} onClick={()=>{navigate(`/task/${task.id}`, { state: {cardType} })}}>
            Task Actions
        </Button>
      </CardFooter>
    </Card>
  );
}



export default TaskCard;
