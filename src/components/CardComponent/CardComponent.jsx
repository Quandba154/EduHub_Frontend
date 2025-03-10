import { Card } from "antd";
import {
  StyleNameProduct,
  WrapperProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperDiscountText,
  WrapperStyleTextSell,
} from "./CardComponentStyle";

import { StarFilled } from "@ant-design/icons";

function CardComponent() {
  return (
    <WrapperProduct className="relative">
      <span className="z-10 absolute right-0 top-0 block w-fit text-[10px] bg-[#FF9966] px-4 py-3 text-xs font-bold shadow-md rounded-bl-lg">
        Thông Dụng
      </span>
      <Card
        headStyle={{ width: "200px", height: "200px" }}
        hoverable
        style={{
          width: 200,
        }}
        bodyStyle={{ padding: "10px" }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <StyleNameProduct>Toán</StyleNameProduct>
        <WrapperReportText>
          <span>
            <span>4.96</span>
            <StarFilled
              style={{ fontSize: "12px", color: "yellow", marginRight: "4px" }}
            />
          </span>
          <WrapperStyleTextSell> | Đã Bán 1000+</WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
          1.000.000 đ{" "}
          <WrapperDiscountText>
            <span style={{ marginRight: "5px" }}></span>
            -20%
          </WrapperDiscountText>
        </WrapperPriceText>
      </Card>
    </WrapperProduct>
  );
}

export default CardComponent;
