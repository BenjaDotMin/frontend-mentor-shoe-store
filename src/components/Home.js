
import ProductCarousel from "./ProductCarousel";
import ProductInformation from "./ProductInformation";
import "../styles/pages/Home.scss";

function Home() {
    return (        
        <div className="home">
            <ProductCarousel/>
            <ProductInformation/>
        </div>
    )
}

export default Home
