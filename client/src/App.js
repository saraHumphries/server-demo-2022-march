import { useEffect, useState } from 'react'; 

function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  };

  return (
    <div>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
