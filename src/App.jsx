import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

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
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
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
