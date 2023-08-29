import IconChevronDown from "./chevron-down";
import IconChevronUp from "./chevron-up";

export default function Panel({
  title,
  children,
  isActive,
  onShow,
  onClick,
}) {
  return (
    <section className="input-panel">
      <div className="panel-top">
        <h2>{title}</h2>
        {isActive ? (
          <button className="open-section-btn rotated-chevron" onClick={onShow}>
            <IconChevronDown />
          </button>
        ) : (
          <button className="open-section-btn" onClick={onShow}>
            <IconChevronDown />
          </button>
        )}
      </div>
      {isActive && (
        <>
        <div className="input-section">{children}</div>
        </>
      )}
    </section>
  );
}