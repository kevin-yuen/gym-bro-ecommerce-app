import React, { useContext } from "react";
import { LogoContext } from "../../context/LogoContextProvider";

export default function BrandComponent({
  customWidth,
  customHeight,
}) {
  const logoContext = useContext(LogoContext);

  return (
    <>
      Gym
      <img
        src={logoContext}
        alt="gym-bro-logo"
        className={`custom-width-${customWidth} custom-height-${customHeight}`}
      />
      Bro
    </>
  );
}
