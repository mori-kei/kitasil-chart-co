import Size from "./Size";

const Device = {
  mobileS: `(max-width: ${Size.modelS})`,
  tablet: `(max-width: ${Size.tablet})`,
  laptop: `(min-width : ${Size.tablet})`
}

export default Device;