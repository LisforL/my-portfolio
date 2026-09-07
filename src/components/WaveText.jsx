/* Splits text into per-letter spans so CSS can stagger a hover wave animation */
const WaveText = ({ text }) =>
  text.split("").map((char, i) => (
    <span key={i} className="char" style={{ "--i": i }}>
      {char === " " ? " " : char}
    </span>
  ));

export default WaveText;
