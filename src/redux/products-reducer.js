const SET_NEW_PRICE = "SET_NEW_PRICE"

let defaultState =  {
  productsData: [
    { id: 1, firm: "Armac", model:"MULTI M6 5M", color: "BLACK", price: 55.98 ,
     isNew: true, discount: "red", isHover: false, popularity:0, howManySold: 23, like: 121, 
     doNotLike: 20, purchaseReturns: 1, positiveFeedback: 4, negativeReviews: 1,
    photoImg: 'https://www.batna24.com/img2/200/331245_1.webp' },
     { id: 2, firm: "Armac", model:"MULTI M6 1.5M", color: "BLACK", price: 40.64 ,
     isNew: true, discount: "yellow", isHover: false, popularity:0, howManySold: 14, like: 201, 
     doNotLike: 45, purchaseReturns: 3, positiveFeedback: 2, negativeReviews: 6,
     photoImg: 'https://www.batna24.com/img2/200/331245_1.webp' },
     { id: 3, firm: "Armac", model:"R5 1.5M", color: "GRAY", price: 34.44 ,
     isNew: true, discount: "noDiscount", isHover: false, popularity:0, howManySold: 43, like: 101, 
     doNotLike: 2, purchaseReturns: 3, positiveFeedback: 14, negativeReviews: 5,
     photoImg: 'https://www.batna24.com/img2/200/331246_1.webp' },
     { id: 4, firm: "Armac", model:"MULTI M6 3M", color: "BLACK", price: 48.12 ,
     isNew: true, discount: "red", isHover: false, popularity:0, howManySold: 56, like: 321, 
     doNotLike: 24, purchaseReturns: 3, positiveFeedback: 2, negativeReviews: 11,
     photoImg: 'https://www.batna24.com/img2/200/331245_1.webp'  },
     { id: 5, firm: "TOTOLINK", model:"A8000RU", color: "BLACK", price: 799 ,
     isNew: false, discount: "red", isHover: false, popularity:0, howManySold: 73, like: 441, 
     doNotLike: 56, purchaseReturns: 4, positiveFeedback: 41, negativeReviews: 14,
     photoImg:'https://www.batna24.com/img2/200/331230_1.webp' },
     { id: 6, firm: "AQARA", model:"HE1-G01", color: "WHITE", price: 109 ,
     isNew: false, discount: "yellow", isHover: false, popularity:0, howManySold: 233, like: 54, 
     doNotLike: 20, purchaseReturns: 6, positiveFeedback: 2, negativeReviews: 0,
     photoImg:'https://www.batna24.com/img2/200/331228_155234.webp' },
     { id: 7, firm: "Armac", model:"MULTI M3 1.5M", color: "BLACK", price: 33.03 ,
     isNew: true, discount: "yellow", isHover: false, popularity:0, howManySold: 63, like: 421, 
     doNotLike: 120, purchaseReturns: 15, positiveFeedback: 10, negativeReviews: 8,
     photoImg: 'https://www.batna24.com/img2/200/331245_1.webp'  },
     { id: 8, firm: "Armac", model:"R5 5M", color: "GRAY", price: 48.61 ,
     isNew: true, discount: "noDiscount", isHover: false, popularity:0, howManySold: 63, like: 321, 
     doNotLike: 43, purchaseReturns: 4, positiveFeedback: 14, negativeReviews: 0,
     photoImg: 'https://www.batna24.com/img2/200/331246_1.webp' },
     { id: 9, firm: "Armac", model:"R5 5M", color: "BLACK", price: 49.19 ,
     isNew: true, discount: "noDiscount", isHover: false, popularity:0, howManySold: 43, like: 161, 
     doNotLike: 20, purchaseReturns: 3, positiveFeedback: 34, negativeReviews:21,
     photoImg: 'https://www.batna24.com/img2/200/331245_1.webp' }
  ],
  noPhotoImg: 'https://www.pikpng.com/pngl/m/106-1069399_iam-add-group1-sorry-no-image-available-clipart.png'
}

const productsReducer = (state = defaultState, action) => {
  switch (action.type){
    case SET_NEW_PRICE :
    return {...state, price: action.price}
    default : 
      return state
  }
}
    
export const setNewPrice = (price) => ({type : SET_NEW_PRICE, price})

export default productsReducer;
