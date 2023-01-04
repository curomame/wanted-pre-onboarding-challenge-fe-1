import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";

function Signup() {
  const [inputValid, setInputValid] = useState(false);

  const [userNameVaild, setUserNameVaild] = useState(false);
  const [userPwdVaild, setUserPwdVaild] = useState(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const checkUserNameValid = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setUserNameVaild(true);
    } else {
      setUserNameVaild(false);
    }
  };

  const checkUserPwdValid = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 7) {
      setUserPwdVaild(true);
    } else {
      setUserPwdVaild(false);
    }
  };

  useEffect(() => {
    if (userNameVaild && userPwdVaild) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }, [userNameVaild, userPwdVaild]);

  return (
    <Form name="basic" onFinish={onFinish} autoComplete="off">
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
        hasFeedback={userNameVaild ? true : false}
        validateStatus={userNameVaild ? "success" : "error"}
        help={userNameVaild ? "" : "이메일 입력을 확인해주세요"}
      >
        <Input onChange={checkUserNameValid} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        hasFeedback={userPwdVaild ? true : false}
        validateStatus={userPwdVaild ? "success" : "error"}
        help={userPwdVaild ? "" : "8자 이상의 비밀번호를 입력해주세요"}
      >
        <Input.Password onChange={checkUserPwdValid} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!inputValid ? true : false}
        >
          SignUp
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Signup;
