import PropTypes from "prop-types";
import { Button } from "antd";
import { WrapperButtonShare, WrapperButtonText } from "./ButtomComponentStyle";

function ButtonComponent(props) {
  const { sizeW, sizeH, textButton } = props;

  return (
    <WrapperButtonShare>
      <Button
        className="bg-[#FF9966] shadow-none font-medium transition-colors hover:!bg-[#d87c5a] "
        style={{ padding: `${sizeH}px ${sizeW}px` }}
      >
        <WrapperButtonText>{textButton}</WrapperButtonText>
      </Button>
    </WrapperButtonShare>
  );
}

ButtonComponent.propTypes = {
  sizeW: PropTypes.number,
  sizeH: PropTypes.number,
  textButton: PropTypes.string,
};

export default ButtonComponent;
