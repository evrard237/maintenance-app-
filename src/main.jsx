// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter as Router } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals.jsx";

import { persistStore } from "redux-persist";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import { store } from "./store/store";
import App from "./App"

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store)
root.render(
  <Provider store={store} >
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <PersistGate persistor={persistor} >
          <App />
      </PersistGate>
       
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
