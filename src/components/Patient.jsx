import { useEffect } from "react";

const Patient = ({ patient, setPatient, deletePatient }) => {
  const { name, owner, email, date, details, id } = patient;

  const handleDelete = () => {
    const answer = confirm("Are you sure you want to delete this patient?");

    if (answer) {
      deletePatient(id);
    }
  };

  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-grey-700 uppercase">
        {" "}
        Name: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-grey-700 uppercase">
        {" "}
        Owner: {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700 uppercase">
        {" "}
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700 uppercase">
        {" "}
        Date of Admission: {""}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700 uppercase">
        {" "}
        Details : {""}
        <span className="font-normal normal-case">{details}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-teal-600 hover:bg-teal-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-400 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
