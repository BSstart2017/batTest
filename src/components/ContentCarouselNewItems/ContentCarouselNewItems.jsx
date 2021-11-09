import React from "react";
import { Col, Row } from "react-bootstrap";
import Products from "../commons/Products/Products";
import style from "./ContentCarouselNewItems.module.css";

const ContentCarouselNewItems = (props) => {

  const portiomProducts = (maxPortion, startPortion) => {
    let arrayOnePortion=[]
    if(maxPortion<=props.newProductsPopularityData.length)  
    for(let i=startPortion; i<maxPortion; i++){
      arrayOnePortion.push(props.newProductsPopularityData[i])
    }
    props.setArrayOnePortion(arrayOnePortion)
    props.setMaxPortion(maxPortion)
    props.setStartPortion(startPortion)
  }

  if(props.arrayOnePortion.length === 0){
    portiomProducts(props.maxPortion, props.startPortion)
  }

  
  const onPageLeft = () => {
    portiomProducts(props.maxPortion-1, props.startPortion -1)
  }

const onPageRight = () => {
  portiomProducts(props.maxPortion+1, props.startPortion + 1)
}

  return (
    <Row className="justify-content-md-center">
      <Col md={1}></Col>
      { props.newProductsPopularityData.length >= props.maxPortion ? 
        <>
          <Col md={1}>
            { props.startPortion === 0 ? <></> 
            : <div className="h-100 d-flex align-items-center justify-content-center" onClick={onPageLeft}>
              <button className={style.button}><span>Back</span></button></div>}
            </Col>
          <Col md={8}>
            <Products productsData={props.arrayOnePortion} />
          </Col>
          <Col md={1}>
          { props.maxPortion + props.startPortion > props.newProductsPopularityData.length ? <></>
            : <div className="h-100 d-flex align-items-center justify-content-center" onClick={onPageRight}>
              <button className={style.button}><span>Next</span></button></div>}
          </Col>
        </> :
        <Col md={8}>
        <Products productsData={props.newProductsPopularityData} />
      </Col>
      }
      <Col md={1}></Col>
    </Row>
  );
};

export default ContentCarouselNewItems;
