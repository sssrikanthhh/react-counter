const Counter = ({ intValue, handleCount, mulDouble }) => {
  return (
    <div>
      <h1 style={{
        color: intValue % 2 === 0 ? "green" : "red"
      }}>{intValue}</h1>
      <button onClick={() => handleCount(1)}>Incremenet</button>
      <button onClick={() => handleCount(-1)}>Decrement</button>
      <button onClick={mulDouble}>double</button>
    </div>
  );
};

export default Counter;