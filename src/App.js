import './App.css';
import { DefaultLayout } from './components/layouts/defaultLayout';
import { TablePage } from './pages/table/tablePage';

function App() {
  return (
    <div>
      <DefaultLayout>
        <TablePage />
      </DefaultLayout>
    </div>
  );
}

export default App;
