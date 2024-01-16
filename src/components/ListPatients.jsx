import { useEffect } from "react";
import Patient from "./Patient";

const ListPatients = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll flex flex-col gap-4">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            {" "}
            List of Patients{" "}
          </h2>

          <p className=" text-xl text-center">
            Manage Your {""}
            <span className="text-teal-600 font-bold">
              Patients and Appointment
            </span>
          </p>

          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            {" "}
            There are no Patients{" "}
          </h2>

          <p className=" text-xl text-center">
            Add Patients {""}
            <span className="text-teal-600 font-bold">to the List</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListPatients;
