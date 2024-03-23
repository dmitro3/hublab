const Tasks = () => {
  return (
    <section className="w-full h-full max-w-[1450px] mx-auto">
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="bg-task1 bg-no-repeat bg-center bg-cover w-full h-full aspect-square"></div>
        <div className="bg-task2 bg-no-repeat bg-center bg-cover w-full h-full aspect-square"></div>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="bg-task3 bg-no-repeat bg-center bg-cover w-full h-full aspect-square"></div>
        <div className="bg-task4 bg-no-repeat bg-center bg-cover w-full h-full aspect-square"></div>
      </div>
    </section>
  );
};

export default Tasks;
