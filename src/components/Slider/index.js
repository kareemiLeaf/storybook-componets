import { Range, getTrackBackground } from "react-range";
import PropTypes from "prop-types";
import { useState } from "react";

const Slider = ({
  max,
  min,
  defaultValue,
  onChange,
  step,
  color1,
  color2,
  ...props
}) => {
  const [values, setValue] = useState(defaultValue);
  const handleChange = (val) => {
    onChange(val);
    setValue(val);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "2em",
      }}
    >
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
        {...props}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: values,
                  colors: [color1, color2],
                  min: min,
                  max: max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: "30px" }} id="output">
        {values?.[0]?.toFixed(1)}
      </output>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.number,
  color1: PropTypes.string,
  color2: PropTypes.string,
};

Slider.defaultProps = {
  defaultValue: [50],
  max: 100,
  min: 0,
  onChange: () => {},
  step: 5,
  color1: "grey",
  color2: "black",
};
