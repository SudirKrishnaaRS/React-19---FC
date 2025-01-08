// Ref as Prop
const Child = ({ name, ref }) => {
  return (
    <div>
      <h2>Hello {name}!!</h2>
      <input type="text" ref={ref} />
    </div>
  );
};

export default Child;
