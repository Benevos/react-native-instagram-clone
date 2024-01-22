import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const FiSearch = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <Circle cx={11} cy={11} r={8} />
    <Path d="m21 21-4.35-4.35" />
  </Svg>
)
export default FiSearch