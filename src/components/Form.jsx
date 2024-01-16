import { useState, useEffect } from "react";
import Error from "./Error";

const Forms = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setDetails(patient.details);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, owner, email, date, details].includes("")) {
      console.log("Error");

      setError(true);
      return;
    }
    setError(false);

    //OBJECT -PATIENT
    const objectPatient = {
      name,
      owner,
      email,
      date,
      details,
    };

    //console.log(objectPatient)

    if (patient.id) {
      objectPatient.id = patient.id;
      const patientsUpdated = patients.map((patientState) =>
        patientState.id === patient.id ? objectPatient : patientState
      );

      setPatients(patientsUpdated);
      localStorage.setItem("patients", JSON.stringify(patientsUpdated));
      setPatient({});
    } else {
      objectPatient.id = generateId();
      setPatients([...patients, objectPatient]);
      localStorage.setItem(
        "patients",
        JSON.stringify([...patients, objectPatient])
      );
    }

    //Restart Form
    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setDetails("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 flex flex-col gap-4">
      <h2 className="font-black text-3xl text-center"> Patient Follow-Up </h2>

      <p className="text-lg text-center">
        Add {""}
        <span className="text-teal-600 font-bold"> Patients </span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounder-lg px-5 py-4"
      >
        {error && (
          <Error>
            <p>All fields must be completed</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-grey-700 uppercase font-bold"
          >
            {" "}
            Pet Name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Pet Name"
            className="border-2 w-full p-2 mt-2 placeholder-grey-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-grey-700 uppercase font-bold"
          >
            {" "}
            Owner Name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Owner Name"
            className="border-2 w-full p-2 mt-2 placeholder-grey-300 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-grey-700 uppercase font-bold"
          >
            {" "}
            Email{" "}
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-grey-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="admission"
            className="block text-grey-700 uppercase font-bold"
          >
            {" "}
            Admission Date{" "}
          </label>
          <input
            id="admission"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-grey-300 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="details"
            className="block text-grey-700 uppercase font-bold"
          >
            {" "}
            Details
          </label>
          <textarea
            id="details"
            className="border-2 w-full p-2 mt-2 placeholder-grey-300 rounded-md"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-teal-600 w-full p-3 text-white uppercase font-bold hover:bg-teal-700
        cursor-pointer transition-all rounded-md"
          value={patient.id ? "Edit Patient" : "Add Patient"}
        />
      </form>
    </div>
  );
};

export default Forms;
