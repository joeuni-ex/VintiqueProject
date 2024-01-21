import "./Description.css";

const Description = ({ product }) => {
  return (
    <>
      <div style={{ width: "70%", color: "#9F9F9F" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          voluptas commodi cumque debitis, enim, ex ipsa repellat mollitia iste
          delectus illum accusamus blanditiis libero veniam distinctio dolore
          reiciendis ducimus temporibus!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, atque
          soluta! Dolorum sit, harum quo perspiciatis beatae cumque. Debitis
          tempora quidem voluptatem, quam nesciunt eligendi officia eos
          praesentium nulla rerum.
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
