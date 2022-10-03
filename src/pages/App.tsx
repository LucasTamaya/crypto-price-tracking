import React, { LegacyRef, useEffect, useRef, useState } from "react";

const App: React.FC = () => {
  const [data, setData] = useState<number[]>([25, 14, 78, 36, 48, 12]);

  const svgRef = useRef();
  useEffect(() => {}, []);

  return (
    <main className="text-red-500">
      <h1 className="text-center mb-20">Crypto Price Tracking</h1>
      <svg ref={svgRef}></svg>
    </main>
  );
};

export default App;
