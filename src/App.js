import { RouterProvider } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import router from './Router/Routes';

function App() {
  return (
    <div className="max-w-screen-xl m-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
