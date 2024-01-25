import "./Description.css";

const Description = ({ product }) => {
  return (
    <>
      <div style={{ width: "70%", color: "#9F9F9F" }}>
        <p>
          우리 인테리어 소품 샵은 감각적이고 현대적인 공간을 추구하는 분들을
          위한 특별한 선물과 소품들을 모아놓은 곳입니다. 집이나 사무실, 카페 등
          어디에서든 잘 어울리는 아름다운 소품으로 여러분의 공간을 더욱 아름답게
          꾸며보세요."
        </p>

        <p>
          우리의 소품은 오롯이 당신을 위해 고안되었습니다. 세심한 디테일과
          창의적인 디자인이 어우러진 제품들은 단순한 소품 이상의 가치를
          전합니다. 각 소품은 특별한 순간을 감동적으로 연출해주며, 고객 여러분께
          특별한 경험을 선사합니다.
        </p>
      </div>
      <div>
        <img
          className="description_image"
          src={product[0]?.boardImageList}
          alt=""
        />
        {product[1]?.boardImageList ? (
          <img
            className="description_image"
            src={product[1]?.boardImageList}
            alt=""
          />
        ) : (
          <img
            className="description_image"
            src={product[0]?.mainImage}
            alt=""
          />
        )}
      </div>
    </>
  );
};

export default Description;
