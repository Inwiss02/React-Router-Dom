import { useParams, useNavigate } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const navigateTo = useNavigate();
  const redirectToProducts = () => {
    navigateTo("/products", { replace: true });
  };
  return (
    <>
      <h4>Product #{id} details </h4>
      <button onClick={redirectToProducts}>back</button>
    </>
  );
};

export default ProductDetails;
