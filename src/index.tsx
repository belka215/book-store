import ReactDom from 'react-dom/client';
import { Provider } from "react-redux";
import { App } from './components/app';
import store from './store';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)