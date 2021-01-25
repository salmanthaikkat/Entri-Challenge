import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "./config/store";
import "./index.scss";
import { ThemeProvider } from "@material-ui/core";
import theme from "./services/theme";
const HomePage = React.lazy(() => import("./pages/homepage"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<p>Loading..</p>}>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
