import React from 'react';
import {
  BrowserRouter as Router ,
  Routes,
  Route,
} from "react-router-dom";
import routes from './Config/routes.js';
import { AuthProvider } from './Context/context.js';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.pathname}
            path={route.pathname}
            element={route.component}
          />
        ))}
      </Routes>
      </Router>
      </AuthProvider>
  );
}

export default App;
