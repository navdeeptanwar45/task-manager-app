import Button from "react-bootstrap/Button";

const TaskCardButton = ({ cardType }) => {
  return (
    <>
      {cardType === 0 && (
        <Button style={{ width: "100%", margin: "1%" }} variant={"warning"}>
          Marked as In-Progress
        </Button>
      )}
      {cardType === 1 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{ marginTop: "1%", width: "13rem" }}
            variant={"danger"}
          >
            Marked as To-Do
          </Button>
          <Button
            style={{ marginTop: "1%", width: "13rem" }}
            variant={"success"}
          >
            Marked as Done
          </Button>
        </div>
      )}
      {cardType === 2 && <></>}
    </>
  );
};
export default TaskCardButton;
