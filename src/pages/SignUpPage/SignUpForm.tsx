import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputComponent from "../../components/InputComponent/InputComponent";
import LoginSchema from "../../utils/validateSchema";
import ButtonComponent from "../../components/ButtomComponent/ButtomComponent";
import { Checkbox } from "antd";
import { WrapperButtonShare } from "./SignUpPageStyle";
import Facebook from "../../components/SVGr/Facebook";
import Google from "../../components/SVGr/Google";

const SignInForm = () => {
  return (
    <WrapperButtonShare
      style={{
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      className="flex justify-center items-center border-none bg-white/70 z-50 h-[600px] w-[450px]"
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ isSubmitting, handleChange, handleBlur, values, errors }) => (
          <Form className="flex flex-col gap-4 p-4 border w-full h-full border-none ">
            <h1 className="flex text-[20px] font-bold">EDUHUB</h1>
            <h1 className="flex mb-[20px] text-[20px] font-medium">
              Đăng ký tài khoản mới hoàn toàn miễn phí!
            </h1>
            <div>
              <label className="flex text-[14px] font-bold">Email</label>
              <InputComponent
                title="Nhập email của bạn"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                error={errors.email}
              />
              <label className="flex text-[14px]  font-bold">Password</label>
              <InputComponent
                title="Nhập mật khẩu của bạn"
                keyboardType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                error={errors.password}
              />
              <label className="flex text-[14px] font-bold">
                Xác nhận mật khẩu
              </label>
              <InputComponent
                title="Nhập mật khẩu của bạn"
                keyboardType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                error={errors.password}
              />
            </div>

            <ButtonComponent
              textButton="Đăng nhập"
              sizeH={18}
              sizeW={150}
              type="submit"
              disabled={isSubmitting}
            ></ButtonComponent>
            <span className="font-bold mt-5">
              Đã có tài khoản?
              <span className="text-[#e9956b]"> Đăng nhập ngay!</span>
            </span>
            <div className="flex flex-row gap-8 justify-center ">
              <WrapperButtonShare style={{ padding: "15px 18px" }}>
                <Facebook />
              </WrapperButtonShare>
              <WrapperButtonShare style={{ padding: "15px 18px" }}>
                <Google></Google>
              </WrapperButtonShare>
            </div>
          </Form>
        )}
      </Formik>
    </WrapperButtonShare>
  );
};

export default SignInForm;
