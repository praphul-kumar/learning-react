import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data/data";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcept {...conceptItem} key={`concept-${index}`} />
        ))}
      </ul>
    </Section>
  );
}
