import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <div className="relative h-[400px] w-[300px] rounded-md ">
        <img
          src="https://th.bing.com/th/id/OIP.XxptqgH0ECWh6vM8Pw5OhAHaHa?pid=ImgDet&rs=1"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Muhammad Ranju</h1>
          <p className="mt-2 text-sm text-gray-300">
            A JavaScript Backend Developer at Node.js
          </p>
          <a href="https://github.com/muhammadranju">
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              View Github →
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
