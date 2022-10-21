import React from "react";
import ReactDOM from "react-dom/client";
import App from './src/App';
import store from "./src/store/store";
import { Provider } from "react-redux";
import { fetchUsers } from './src/features/users/userSlice';

store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);