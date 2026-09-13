type VisualPlaceholderProps = {
  label: string;
  description: string;
  tone?: "charcoal" | "parchment" | "land" | "sea";
  className?: string;
};

export function VisualPlaceholder({
  label,
  description,
  tone = "charcoal",
  className = "",
}: VisualPlaceholderProps) {
  return (
    <div
      className={`visual-placeholder visual-placeholder--${tone} ${className}`.trim()}
      role="img"
      aria-label={`${label}. ${description}.`}
    >
      <span className="visual-placeholder__grid" aria-hidden="true" />
      <span className="visual-placeholder__copy" aria-hidden="true">
        <span className="visual-placeholder__label">{label}</span>
        <span>{description}</span>
      </span>
    </div>
  );
}
