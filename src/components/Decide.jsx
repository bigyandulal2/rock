export default function Decide({ name, setOption }) {
  function handleClick() {
    setOption(null);
  }
  const value = name === "You Lose";

  return (
    <div className="decide">
      <h2 className="text-5xl font-bold text-white">{name}</h2>
      <button
        onClick={handleClick}
        className={`uppercase text-2xl font-semibold
         bg-white py-4 px-12 rounded-lg`}
        style={value ? { color: "red" } : { color: "blue" }}
      >
        play Again
      </button>
    </div>
  );
}
