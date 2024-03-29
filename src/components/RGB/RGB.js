import { useParams } from 'react-router-dom';

export default function RGB() {
  const { r, g, b } = useParams();
  return (
    <>
      <div className="background" style={{ background: `rgb(${r}, ${g}, ${b})` }}>
        <p>{`rgb(${r}, ${g}, ${b})`}</p>
      </div>
    </>
  );
}