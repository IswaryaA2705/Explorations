import { useState } from "react";
import Modal from "./PortalExample";
import './App.css'
function Modalpar(){
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <h1>React Portals Example</h1>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal onClose={closeModal}>This is a modal content!</Modal>}
    </div>
  )

}
export default Modalpar;