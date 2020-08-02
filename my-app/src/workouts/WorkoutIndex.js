import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import WorkoutCreate from "./WorkoutCreate";
import WorkoutTable from "./WorkoutTable";

useEffect(() => {
  fetchWorkouts();
}, []);

const WorkoutIndex = (props) => {
  const [workouts, setWorkouts] = useState([]);
  const fetchWorkouts = () => {
    fetch("http://localhost:3000/api/log", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        setWorkouts(logData);
      });
  };

  return (
    <Container>
      <Row>
        <Col md="3">
          <WorkoutCreate fetchWorkouts={fetchWorkouts} token={props.token} />
        </Col>
        <Col md="9">
          <WorkoutTable
            workouts={workouts}
            fetchWorkouts={fetchWorkouts}
            token={props.token}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WorkoutIndex;
