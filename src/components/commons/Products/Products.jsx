import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./Products.module.css";

const Products = (props) => {
  if(props.productsData.length >0){
  let elementProducts = props.productsData.map((el,i) => {
    return (
      <Col md={2} key={el.id} className={
          el.discount === "red"
            ? style.discountBGColorRed + " " + style.itemBlock
            : el.discount === "yellow"
            ? style.discountBGColorYellow + " " + style.itemBlock
            : style.itemBlock
        }>
        <Row className="justify-content-md-center text-center">
          {el.isNew ? (
            <div className={style.newProduct + " w-50"}>New product</div>
          ) : (
            <></>
          )}
          <img src={el.photoImg} alt="noPhoto" />
        </Row>
        <Row className="justify-content-md-center text-center">
          <p className={style.priceFirm}>{el.firm}</p>
        </Row>
        <Row className="justify-content-md-center text-center">
          <p className={style.priceModel}>{el.model+' '+ el.color }</p>
        </Row>
        <Row className="justify-content-md-center text-center">
          {el.discount === "red" ? (
            <>
              <p className={style.priceAppearance + " " + style.textThrough}>
                {el.price} zl
              </p>
              <p
                className={style.priceAppearance + " " + style.noThrough}
              >{`${el.price} zł - 10 zł`}</p>
            </>
          ) : el.discount === "yellow" ? (
            <>
              <p className={style.priceAppearance + " " + style.textThrough}>
                {el.price} zl
              </p>
              <p
                className={style.priceAppearance + " " + style.noThrough}
              >{`${el.price} zł - 5 zł`}</p>
            </>
          ) : (
            `${el.price} zł`
          )}
        </Row>
      </Col>
    );
  });

  return (
    <Row className="justify-content-md-center text-center">
      {elementProducts}
    </Row>
  );
}else{ return <></>}
};

export default Products;
