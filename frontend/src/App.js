import React from "react";
import GlassBoxUI from "material-react-glass-box";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#9695CB",
        width: "100%",
        height: "170vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "50px",
            paddingTop: "50px",
          }}
        >
          Material React Glass Box
        </h1>
        <h3
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "20px",
            paddingTop: "20px",
          }}
        >
          A simple glass box component for React
        </h3>
        <h3
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "20px",
            paddingTop: "20px",
          }}
        >
          <a
            href="https://www.npmjs.com/package/material-react-glass-box"
            target="_blank"
            style={{ color: "white" }}
          >
            NPM Package
          </a>
        </h3>
      </div>
      <GlassBoxUI sx={{ width: "300px", height: "300px", margin: "50px" }}>
        <h1>Hello, Glass Box!</h1>
      </GlassBoxUI>
      <img
        style={{
          margin: "50px",
          maxWidth: "80%",
          minHeight: "300px",
          objectFit: "cover",
          borderRadius: "10px",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src="/CodeSSDemo.png"
        alt="CodeSSDemo"
      />
    </div>
  );
};

export default App;
