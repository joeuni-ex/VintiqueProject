export default class Product {
  constructor(
    name,
    description,
    category,
    price,
    stock,
    mainImage,
    boardImageList,
    id
  ) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.stock = stock;
    this.mainImage = mainImage;
    this.boardImageList = boardImageList || [];
    this.id = id;
  }
}
