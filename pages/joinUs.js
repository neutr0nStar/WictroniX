import React from "react";
import { Widget } from "@typeform/embed-react";
import Head from "next/head";

export default function JoinUs() {
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <div>
      <Head>
        <title>Join Us - WictroniX</title>
        <meta name="title" content="WictroniX - Join Us" />
        <meta name="description" content="Join Us" />
      </Head>
      <div
        style={{
          height: isMobile ? "85vh" : "100vh",
          width: "100vw",
        }}
      >
        <Widget
          autoFocus
          id="kN71lCt8"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
