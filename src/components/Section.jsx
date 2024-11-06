
// ...props :- This JS feature is called "Rest Property"

// This syntax groups all remaining object properties into a new object (named "props" in this case)

export default function Section({title, children, ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}