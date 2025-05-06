export default function TechStack({ stack }: { stack: string[] }) {
    if (!stack?.length) return null;
    return (
        <>
            {stack.map((item, idx) => (
                <span key={item} className="text-neutral-100">
                    {item}
                    {idx < stack.length - 1 && ' - '}
                </span>
            ))}
        </>
    );
}