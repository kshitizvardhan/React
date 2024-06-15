import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'


function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}

const Count = () => {
  console.log("render");   // problem solved... component not re-rendering again... (with context api it was rendering again)
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}

const CountRenderer = () => {
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);
  // when one depends on other state variable... just as in the case of useMemo(), here we uses selectors
  // it only re-renders if the count value is changed.. else not
  return (
    <div>
      {count}
      <br />
      <p>It is {(isEven ==  0) ? " Even" : " Odd"}</p>
    </div>
  )
}

const Buttons = () => {
  // const [count, setCount] = useRecoilState(countAtom); 
  // Here the optimization is that... as count is passed so recoil re-renders the button again
  // Which is not required as we are not showing count here... we are just updating and buttons are static..
  // So we can avoid re-rendering of buttons also... by only getting setCount and using a function to increment or decrement count.
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons render");
  return (
    <div>
      <button onClick={()=> {setCount((count) => count+1)}}>Increase</button>
      <button onClick={()=> {setCount((count) => count-1)}}>Decrease</button>
    </div>
  )
}



export default App
