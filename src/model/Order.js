export default class Order {
  constructor(
    id,
    status,
    totalPrice,
    createDate,
    userId,
    userName,
    cartItemCount
  ) {
    this.id = id;
    this.status = status;
    this.totalPrice = totalPrice;
    this.createDate = createDate;
    this.userId = userId;
    this.userName = userName;
    this.cartItemCount = cartItemCount;
  }
}
