// Import React Framework
import React from 'react';

// Import Antd
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

// Import Style
import style from './CreateCategory.module.css';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const CreateCategory: React.FC = () => (
  <>
    <label className={style.label}>新建分类</label>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 300 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={style.form}
    >
      <Form.Item<FieldType>
        label="名称"
        name="username"
        rules={[{ required: true, message: '名称不能为空!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  </>
);

export default CreateCategory;
