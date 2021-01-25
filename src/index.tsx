import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "./config/store";
const HomePage = React.lazy(() => import("./pages/homepage"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<p>Loading..</p>}>
        <HomePage />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
