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
function App() {
  return (
    <div >
      <ErrorBoundary>
      <UserProvider>
      <StringOperations/>
      <Fragment/>
      <LifeCycleExample/>
      <ComponentDidUpdateEx/>
      <ConditionalRenderingEx/>
      <ListKeys/>
      <Form/>
      <Calculator/>
      <ForwardExParent/>
      </UserProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
