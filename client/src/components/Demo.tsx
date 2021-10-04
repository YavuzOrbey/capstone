import {Expression, GraphingCalculator} from "desmos-react";

function Demo() {
  return (
      <GraphingCalculator
        attributes={{className: "calculator"}}
      >
        <Expression id="slider" latex="a=3"/>
      </GraphingCalculator>
  );
}

export default Demo;