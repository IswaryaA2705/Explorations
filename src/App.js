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
function App() {
  return (
    <div >
      <UserProvider>
      <StringOperations/>
      <LifeCycleExample/>
      <ComponentDidUpdateEx/>
      <ConditionalRenderingEx/>
      <ListKeys/>
      <Form/>
      <Calculator/>
      </UserProvider>
    </div>
  );
}

export default App;
