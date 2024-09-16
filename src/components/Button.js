export default function Button({ children, onClick, label }) {
  return (
    <button aria-label={label} className="button" onClick={onClick}>
      {children}
    </button>
  );
}
