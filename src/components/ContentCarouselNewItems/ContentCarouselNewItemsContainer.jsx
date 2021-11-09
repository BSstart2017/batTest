import React from "react";
import { connect } from "react-redux";
import ContentCarouselNewItems from "./ContentCarouselNewItems";
import {setNewPrice} from "./../../redux/products-reducer";
import { setMaxPortion, setStartPortion,setArrayOnePortion} from "./../../redux/carouselNewItems-reducer"

class ContentCarouselNewItemsContainer extends React.Component {

  render() {
    let newProductsPopularityData = this.props.productsData
      .filter((el) => el.isNew)
      .map(
        (el) =>
          ({...el, popularity :
            el.howManySold +
            (el.like - el.doNotLike) * 2 +
            (el.positiveFeedback - el.negativeReviews) * 5 -
            el.purchaseReturns * 10})
      ).sort((a,b)=>b.popularity - a.popularity)
      
    return (
      <>
        <ContentCarouselNewItems {...this.props}
          newProductsPopularityData={newProductsPopularityData }
        />
      </>
    );
  }
}

let mapPropsToState = (state) => ({
  productsData: state.productsReducer.productsData,
  maxPortion: state.carouselReducer.maxPortion,
  startPortion: state.carouselReducer.startPortion,
  arrayOnePortion: state.carouselReducer.arrayOnePortion
});

export default connect(mapPropsToState, {setNewPrice, setMaxPortion,setArrayOnePortion, setStartPortion})(ContentCarouselNewItemsContainer);
