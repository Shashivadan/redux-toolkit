import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import {
  decrement,
  incrementByAmount,
  incrementByAsyc,
} from "./features/counter/counterSlice";

function App() {
  const { value } = useSelector((state: RootState) => state.counter);
  console.log(value);

  const dispatch = useDispatch();
  return (
    <>
      <div className=" m-auto p-6 mt-5 bg-red-100  max-w-screen-xl">
        <h1 className="text-center text-3xl font-bold  rounded-sm px-3 text-red-400">
          counter :{value}
        </h1>
        <div className=" flex gap-3 m-auto ">
          <button
            onClick={() => dispatch(incrementByAsyc())}
            className=" p-6 bg-transparent   border-2 border-red-400 rounded-xl"
          >
            increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className=" p-6 bg-transparent   border-2 border-red-400 rounded-xl"
          >
            decrement
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(10))}
            className=" p-6 bg-transparent   border-2 border-red-400 rounded-xl"
          >
            amonuntofincrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
