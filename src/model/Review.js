export default class Review {
  constructor(orderItemId, reviewContent, rate, productId) {
    this.orderItemId = orderItemId;
    this.reviewContent = reviewContent;
    this.rate = rate;
    this.productId = productId;
  }
}
