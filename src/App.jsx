import { useState } from "react";
import { EXAMPLES } from "./data";
import Header from "@components/Header/Header";
import CoreConcepts from "@components/CoreConcepts";
import TabButton from "@components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function tabClicked(selectedTab) {
    setSelectedTopic(selectedTab);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => tabClicked("components")}
            >
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => tabClicked("jsx")}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => tabClicked("props")}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => tabClicked("state")}>
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
