export default function Panel({
  title,
  children,
  isActive,
  onShow,
  onClick,
}) {
  return (
    <section className="input-panel">
      <h2>{title}</h2>
      {isActive ? (
        <>
        <div>{children}</div>
        </>
      ) : (
        <button onClick={onShow}>
          Edit
        </button>
      )}
    </section>
  );
}