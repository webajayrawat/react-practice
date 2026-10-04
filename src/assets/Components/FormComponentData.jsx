import React from "react";
import { Select } from "antd";

const FormComponentData = ({
    queue,
    onUpdateStatus,
    onRemoveFromQueue
}) => {
    return (
        <div className="queue-list-container">
            <h2>Queue List</h2>

            {queue.length === 0 ? (
                <p>No clients in the queue.</p>
            ) : (
                <ul className="queue-list">
                    {queue.map((customer) => (
                        <li
                            key={customer.id}
                            className="queue-item"
                        >
                            <div className="client-info">
                                <span className="client-name">
                                    {customer.name}
                                </span>

                                <span className="client-service">
                                    {customer.service}
                                </span>
                            </div>

                            <div className="queue-actions">

                                <Select
                                    value={customer.status}
                                    className={`status-select status-${customer.status}`}
                                    onChange={(value) =>
                                        onUpdateStatus(customer.id, value)
                                    }
                                    options={[
                                        {
                                            value: "pending",
                                            label: "Pending",
                                        },
                                        {
                                            value: "completed",
                                            label: "Completed",
                                        },
                                        {
                                            value: "cancelled",
                                            label: "Cancelled",
                                        },
                                    ]}
                                />

                                <button
                                    className="remove-btn"
                                    onClick={() =>
                                        onRemoveFromQueue(customer.id)
                                    }
                                >
                                    Remove
                                </button>

                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FormComponentData;