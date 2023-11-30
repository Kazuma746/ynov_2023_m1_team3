const Index = ({type, message}) => {

  const types = {
    error: "red",
    success: "green",
  }

  return (
    <div className={`bg-${types[type]} border border-${types[type]} text-${types[type]} px-4 py-3 rounded relative`} role="alert">
      <span className="block sm:inline">{message}</span>
    </div>
  );
}

export default Index;
