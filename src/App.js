import { motion } from "framer-motion";
import Box from "./components/Box";

function App() {
  const data = [
    { title: "Framer-Motion", description: "React Animation" },
    { title: "Framer-Motion", description: "React Animation" },
    { title: "Framer-Motion", description: "React Animation" },
    { title: "Framer-Motion", description: "React Animation" },
    { title: "Framer-Motion", description: "React Animation" },
    { title: "Framer-Motion", description: "React Animation" },
  ];
  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {data.map((data, index) => (
          <motion.article
            initial={{
              opacity: 0,
              translateX: index % 2 === 0 ? -50 : 50,
              translateY: 150,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <Box title={data.title} description={data.description} />
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default App;
