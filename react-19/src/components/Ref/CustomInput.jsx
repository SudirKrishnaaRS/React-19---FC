// Ref as Prop
const CustomInput = (props) => {
  return <input type="email" ref={props.ref} {...props} />;
};

export default CustomInput;
