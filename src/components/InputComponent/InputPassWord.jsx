import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";
import PropTypes from "prop-types";

const APP_COLOR = {
  ORANGE: "#FFA500",
  GREY: "#D3D3D3",
};

const InputPassWord = ({ title, value, onChangeText, onBlur, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="flex flex-col text-start h-[60px]">
      <Space direction="vertical">
        <Input.Password
          placeholder={title}
          value={value}
          onChange={onChangeText}
          onFocus={() => setIsFocus(true)}
          onBlur={onBlur}
          status={error ? "error" : ""}
          style={{
            border: `2px solid ${isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY}`,
            padding: "8px",
            borderRadius: "8px",
          }}
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        {error && <span style={{ color: "red" }}>{error}</span>}
      </Space>
    </div>
  );
};

InputPassWord.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

export default InputPassWord;
