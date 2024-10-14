import logo from './logo.svg';
import './App.css';
import StringOperations from './StringOperations';
import LifeCycleExample from './LifecycleExamples';
import ComponentDidUpdateEx from './ComponentDidUpdateEx';
import ConditionalRenderingEx from './ConditionalRenderingEx';
import ListKeys from './ListKeys';
import Form from './Form';
import { UserProvider } from "./useContextex"; 
import Calculator from './Parent';
import ErrorBoundary from './ErrorBoundary';
import ForwardExParent from './ForwardExParent';
import Fragment from './Fragments';
import Modalpar from './Modalpar';
import { Profiler } from 'react';
import store from './Store.js'
import { Provider } from 'react-redux';
import Counter from './CounterRedux';
function App() {
  const onRenderCallback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (for initial mount) or "update" (for re-renders)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log(`Profiler ID: ${id}`);
    console.log(`Phase: ${phase}`);
    console.log(`Actual Duration: ${actualDuration}ms`);
    console.log(`Base Duration: ${baseDuration}ms`);
    console.log(`Start Time: ${startTime}`);
    console.log(`Commit Time: ${commitTime}`);
    console.log('------------------------------');
  };
  return (
    <div >
      <Profiler id="app-profiler" onRender={onRenderCallback}></Profiler>
      <ErrorBoundary>
      <Provider store={store}>
      <UserProvider>
      <StringOperations/>
      <Fragment/>
      <Counter/>
      <Modalpar/>
      <LifeCycleExample/>
      <ComponentDidUpdateEx/>
      <ConditionalRenderingEx/>
      <ListKeys/>
      <Form/>
      <Calculator/>
      <ForwardExParent/>
      </UserProvider>
      </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
