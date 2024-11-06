import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data/data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>

      <ul>
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcept {...conceptItem} key={`concept-${index}`} />
        ))}
      </ul>
    </section>
  );
}
