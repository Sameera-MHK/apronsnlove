import "./FeaturedProducts.scss";
import Card from "../../components/Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="max-width">
      <div className="featuredProducts">
      <div className="heading">
        <h1>So much good stuff.</h1>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
    </div>
  );
};

export default FeaturedProducts;
