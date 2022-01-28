import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
