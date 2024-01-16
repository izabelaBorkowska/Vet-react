const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white text-center p-2 mb-2 uppercase font-bold m-3 rounded ">
      {children}
    </div>
  );
};

export default Error;
