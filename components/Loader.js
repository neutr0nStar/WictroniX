import Image from "next/image";
import React from "react";
import dots from "../public/images/typing.svg";

export default function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        width: "99vw",
        zIndex: "1000",
        backgroundColor: "#001d3f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "absolute",
        top: "0",
      }}
    >
      <Image src={dots} alt="rocket" />
    </div>
  );
}
