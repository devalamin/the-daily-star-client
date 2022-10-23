import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
