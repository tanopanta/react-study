const ColorfulMessage = (props) => {
  const { color, children } = props;

  const contectStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contectStyle}>{children}</p>;
};

export default ColorfulMessage;
