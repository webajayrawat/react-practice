import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input
                ref={ref}
                type="text"
                className="queue-input ant-input"
                placeholder={props.placeholder}
            />
        </div>
    );
});

export default Input;