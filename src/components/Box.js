function Box({ title, description }) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: "150px",
        height: "150px",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Box;
