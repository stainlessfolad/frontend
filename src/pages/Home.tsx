import NavBar from "../components/NavBar";
import Header from "../page/home/Header";
import ProductSlideshow from "../page/home/ProductSlideshow";
import ProductUsecase from "../page/home/SteelUsecase";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <ProductUsecase />
      <ProductSlideshow />
    </div>
  );
}
export default HomePage;
