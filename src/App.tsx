import { Layout } from './components/Layout';
import { PlanetarySystem } from './components/PlanetarySystem/PlanetarySystem';

function App() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <PlanetarySystem />
      </div>
    </Layout>
  );
}

export default App;
