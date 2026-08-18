import { useState, useEffect } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setBackendStatus(data.message))
      .catch(() => setBackendStatus("Backend not reachable"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center pt-20">Welcome to DevTrack</h1>
      <p className="text-center text-gray-600 mt-4">Your project management tool.</p>
      <p className="text-center mt-8 text-sm text-gray-500">Backend status: {backendStatus}</p>
    </div>
  );
}

export default App;