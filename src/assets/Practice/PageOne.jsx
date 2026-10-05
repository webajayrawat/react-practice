import { Button, Form, Input, Checkbox } from 'antd';
import { useState } from 'react';

const PageOne = ({ onDataAdded }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const onFinish = () => {
    const client = {
      name,
      password,
      checked
    };

    onDataAdded(client);
  };

  return (
    <div className="queue-form-card">
      <Form
        className="queue-form"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: false }}
      >
        <Form.Item
          className="form_group"
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!'
            }
          ]}
        >
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          className="form_group"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          className="form_group"
          name="remember"
          valuePropName="checked"
        >
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          >
            Remember me
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <h1 className="form-title">
        {name.trim() === '' || password.trim() === ''
          ? 'Please enter your name and password'
          : `Hello, ${name}! Your password is ${password}`}
      </h1>
    </div>
  );
};

export default PageOne;


////////////////////////////////AntD style////////////////////////////////
// import { Button, Form, Input, Checkbox } from 'antd';

// const PageOne = ({ onDataAdded }) => {

//   const onFinish = (values) => {
//     console.log('Form values:', values);

//     onDataAdded({
//       name: values.name,
//       password: values.password,
//       checked: values.remember
//     });
//   };

//   return (
//     <div className="queue-form-card">

//       <Form
//         className="queue-form"
//         onFinish={onFinish}
//         labelCol={{ span: 24 }}
//         wrapperCol={{ span: 24 }}
//         initialValues={{ remember: false }}
//       >

//         <Form.Item
//           className="form_group"
//           label="Name"
//           name="name"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your name!'
//             }
//           ]}
//         >
//           <Input placeholder="Enter your name" />
//         </Form.Item>

//         <Form.Item
//           className="form_group"
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!'
//             }
//           ]}
//         >
//           <Input.Password placeholder="Password" />
//         </Form.Item>

//         <Form.Item
//           className="form_group"
//           name="remember"
//           valuePropName="checked"
//         >
//           <Checkbox>
//             Remember me
//           </Checkbox>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>

//       </Form>

//     </div>
//   );
// };

// export default PageOne;