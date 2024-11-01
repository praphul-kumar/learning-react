import { useState } from 'react';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data/data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(EXAMPLES['components']);

  const handleSelect = (selectedButton) => {
    setSelectedTopic(EXAMPLES[selectedButton]);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          <div id="tab-content">
            <h3>{selectedTopic.title}</h3>
            <p>{selectedTopic.description}</p>
            <pre>
              <code>{selectedTopic.code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
