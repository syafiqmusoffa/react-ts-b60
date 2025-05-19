interface TittleProps {
  title: string;
  color: string;
  subtitle: string;
}

function JudulHalaman({ color, title, subtitle }: TittleProps) {
  return (
    <div style={{ paddingBottom: 40, backgroundColor: "brown" }}>
      <h1
        style={{
          color: color,
        }}
      >
        {title}
      </h1>
      <h3>{subtitle}</h3>
    </div>
  );
}

export default JudulHalaman;
