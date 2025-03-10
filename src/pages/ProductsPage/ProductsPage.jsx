import CardComponent from "../../components/CardComponent/CardComponent";
import ButtomComponent from "../../components/ButtomComponent/ButtomComponent";

function ProductsPage() {
  return (
    <div>
      <div className="h-[620px] bg-[#F5F3EA] gap-[60px] flex flex-wrap">
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
      </div>
      <ButtomComponent
        sizeW={70}
        sizeH={25}
        textButton="Xem Thêm"
      ></ButtomComponent>
    </div>
  );
}

export default ProductsPage;
