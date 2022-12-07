import React from "react";
import { Widget } from "@typeform/embed-react";
import Head from "next/head";

export default function joinUs() {
  return (
    <div>
      <Head>
        <title>Join Us - WictroniX</title>
        <meta name="title" content="WictroniX - Join Us" />
        <meta name="description" content="Join Us" />
      </Head>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Widget id="kN71lCt8" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}
