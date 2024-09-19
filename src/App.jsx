import { useState } from "react";
import { EXAMPLES } from "./data";
import Header from "@components/Header/Header";
import CoreConcepts from "@components/CoreConcepts";
import TabButton from "@components/TabButton";
import Examples from "@components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
