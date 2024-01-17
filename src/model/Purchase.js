export default class Purchase {
  constructor(userId, productId, name, price, mainImage, purchaseTime) {
    this.userId = userId;
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.mainImage = mainImage;
    this.purchaseTime = purchaseTime;
  }
}
