import React, { Suspense } from "react";
import { use } from "react";

const delayedPromise = (sec) => {
  return new Promise((resolve) => setTimeout(resolve, sec));
};

const SlowComponent = (props) => {
  use(delayedPromise(props.time));
  return <div>SlowComponent {props.time}</div>;
};

const SuspenseDemo = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SlowComponent time={1000} />
      <SlowComponent time={2000} />
      <SlowComponent time={3000} />
    </Suspense>
  );
};

export default SuspenseDemo;
