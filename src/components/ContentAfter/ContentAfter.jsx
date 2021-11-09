import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./ContentAfter.module.css";

const ContentAfter = () => {
  return (
    <Row className="justify-content-md-center pt-4">
      <Col md={1}></Col>
      <Col md={10} className={style.contentAfter}>
        <div className="text-center">Content After</div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        accusamus itaque nulla cum iure autem, nemo tempore quis ullam dolorum,
        quas consectetur distinctio in quod aperiam veritatis ex, et quia! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Expedita accusamus
        itaque nulla cum iure autem, nemo tempore quis ullam dolorum, quas
        consectetur distinctio in quod aperiam veritatis ex, et quia! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Expedita accusamus
        itaque nulla cum iure autem, nemo tempore quis ullam dolorum, quas
        consectetur distinctio in quod aperiam veritatis ex, et quia! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Expedita accusamus
        itaque nulla cum iure autem, nemo tempore quis ullam dolorum, quas
        consectetur distinctio in quod aperiam veritatis ex, et quia! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Expedita accusamus
        itaque nulla cum iure autem, nemo tempore quis ullam dolorum, quas
        consectetur distinctio in quod aperiam veritatis ex, et quia!
      </Col>
      <Col md={1}></Col>
    </Row>
  );
};

export default ContentAfter;
