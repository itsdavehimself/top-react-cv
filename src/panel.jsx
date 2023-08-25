export default function Panel({
  title,
  children,
  isActive,
  onShow
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
          Show
        </button>
      )}
    </section>
  );
}