const AuthLayout = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center h-screen  bg-slate-900 relative">
      <h1
        className="text-white text-center hidden md:flex"
        style={{
          fontSize: "13rem",
          position: "absolute",
          top: 0,
          opacity: 0.2,
          zIndex: 0,
        }}
      >
        Smart Library
      </h1>
      {children}
    </div>
  );
};

export default AuthLayout;
