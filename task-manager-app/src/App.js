import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import ErrorBoundary from './components/ErrorBoundary';
const TaskBoard = lazy(() => import('./components/TaskBoard'));
const TaskDetails = lazy(() => import('./components/TaskDetails'));


function App() {
  return (
    <ErrorBoundary>

    <TaskProvider>
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" component={TaskBoard} />
          <Route path="/task/:id" component={TaskDetails} />
        </Routes>
      </Suspense>
      </Router>
    </TaskProvider>
    </ErrorBoundary>

  );
}

export default App;
