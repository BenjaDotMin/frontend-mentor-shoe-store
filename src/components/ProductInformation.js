import ProductCTA from "./ProductCTA";
import "../styles/ProductInformation.scss";

function ProductInformation() {
    return (
    <div className="product-information">
      <label>Sneaker Company</label>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <h2>&#36;125<i>.00</i><span>50%</span></h2>
      <h3>&#36;250.00</h3>
      <ProductCTA/>
    </div>
    )
}

export default ProductInformation
