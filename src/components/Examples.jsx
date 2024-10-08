import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { useState } from "react";
import { EXAMPLES } from "src/data";

export default function Examples() {
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
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => tabClicked("components")}
            >
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => tabClicked("jsx")}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => tabClicked("props")}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => tabClicked("state")}>
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
