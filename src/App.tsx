import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './router/routes';
import { Provider } from 'react-redux'
import {store} from './app/store'
const router = createBrowserRouter(routes)

function App() {
  return <Provider store={store}><RouterProvider router={router} /></Provider>;
}

export default App;
