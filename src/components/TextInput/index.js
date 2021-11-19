import PropTypes from "prop-types";
import React from "react";
import "./textinput.css";

export default function TextInput({
  value,
  placeholder,
  error,
  width,
  height,
  textArea,
  borderRadius,
  color,
  backgroundColor,
  onChange,
  border,
  label,
  cols,
  rows,
  ...props
}) {
  return (
    <>
      {textArea ? (
        <>
          <h4>{label}</h4>
          <textarea
            placeholder={placeholder}
            onChange={onChange}
            rows={rows}
            cols={cols}
            style={{
              height,
              backgroundColor,
              color,
              borderRadius,
              width,
              border,
            }}
            {...props}
          />
        </>
      ) : (
        <>
          <h4>{label}</h4>
          <input
            placeholder={placeholder}
            onChange={onChange}
            style={{
              height,
              backgroundColor,
              color,
              borderRadius,
              width,
              border,
            }}
            {...props}
          />
        </>
      )}
      {error && <pre className="error-text">{error}</pre>}
    </>
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  error: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  textArea: PropTypes.bool,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
};

TextInput.defaultProps = {
  placeholder: "",
  error: "",
  width: "100%",
  height: "25px",
  textArea: false,
  borderRadius: 0,
  border: "1px solid #f1f1f1",
  color: "#000",
  backgroundColor: "#fff",
  onChange: (e) => console.log(`e`, e),
  label: "label",
};
