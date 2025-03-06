import { Input } from "antd";
import { useState } from "react";
import PropTypes from "prop-types";

const APP_COLOR = {
  ORANGE: "#FFA500",
  GREY: "#D3D3D3",
};

function InputComponent({
  title,
  value,
  onChangeText,
  onBlur,
  keyboardType,
  error,
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="flex flex-col text-start h-[60px]">
      <Input
        placeholder={title}
        value={value}
        onChange={onChangeText}
        onFocus={() => setIsFocus(true)}
        style={{
          border: `2px solid ${isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY}`,
          padding: "8px",
          borderRadius: "8px",
        }}
        onBlur={(e) => {
          if (onBlur) onBlur(e);
          setIsFocus(false);
        }}
        type={keyboardType === "email-address" ? "email" : "text"}
      />
      {console.log("Error:", error)}
      {error && <span style={{ color: "red", marginTop: "2px" }}>{error}</span>}
    </div>
  );
}

InputComponent.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  keyboardType: PropTypes.string,
  error: PropTypes.string,
};

export default InputComponent;
