import React from 'react'
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;


const QuequeForm = ({ onAddToQueue }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        onAddToQueue(values);
    };

    return (
        <div className="queue-form-card">
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="queue-form"
            >
                {/* Name */}
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: "Please enter name" }]}
                >
                    <Input
                        placeholder="Enter customer name"
                        className="queue-input"
                    />
                </Form.Item>

                {/* Service */}
                <Form.Item
                    name="service"
                    label="Service"
                    rules={[{ required: true, message: "Please select a service" }]}
                >
                    <Select
                        placeholder="Select Service"
                        className="queue-select"
                        popupClassName="queue-select-dropdown"
                        placement="bottomLeft"
                    >
                        <Option value="consultation">Consultation</Option>
                        <Option value="payment">Payment</Option>
                        <Option value="support">Support</Option>
                    </Select>
                </Form.Item>

                <Button
                    htmlType="submit"
                    type="primary"
                    className="add-queue-btn"
                >
                    Add to Queue
                </Button>
            </Form>
        </div>
    )
}

export default QuequeForm
