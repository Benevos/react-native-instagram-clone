import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const HiDotsVertical = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    aria-hidden="true"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      stroke="none"
      d="M10 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
    />
  </Svg>
)
export default HiDotsVertical