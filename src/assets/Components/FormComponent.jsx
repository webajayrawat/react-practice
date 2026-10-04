import { useState } from "react";
import { Input, Select, Button } from "antd";

const FormComponent = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [service, setService] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !service.trim()) {
            console.log("Please fill in all fields");
            return;
        }

        console.log(name, service);

        onAdd({
            name,
            service,
        });

        // Reset form
        setName("");
        setService("");
    };

    return (
        <div className="queue-form-card">
            <form className="queue-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>

                    <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="queue-input"
                        placeholder="Enter name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="service">Service:</label>

                    <Select
                        id="service"
                        value={service || undefined}
                        onChange={(value) => setService(value)}
                        className="queue-select"
                        placeholder="Select Service"
                    >
                        <Select.Option value="consultation">
                            Consultation
                        </Select.Option>

                        <Select.Option value="payment">
                            Payment
                        </Select.Option>

                        <Select.Option value="support">
                            Support
                        </Select.Option>
                    </Select>
                </div>

                <Button
                    htmlType="submit"
                    className="add-queue-btn"
                >
                    Add to Queue
                </Button>

            </form>
        </div>
    );
};

export default FormComponent;