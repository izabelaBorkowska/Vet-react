import { useState, useEffect } from "react";
import Header from "./components/Header";
import Forms from "./components/Form";
import ListPatients from "./components/ListPatients";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      localStorage.setItem('patients', JSON.stringify( pacientesLS ));
      setPatients(pacientesLS)
    } 
    obtenerLS();
  }, []);

  const deletePatient = id => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-16">
      <Header />
      <div className="mt-12 md:flex">
        <Forms
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListPatients
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
