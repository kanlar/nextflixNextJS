"use client";
import Link from "next/link";
import React from "react";

function Error() {
  return (
    <div>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>HATA!</h1>
        <Link
          href="/"
          style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}

export default Error;
