
//components
import Box1 from "./components/Box1";


//صفحه اصلی شروع
function App() {
  let now = new Date().toISOString(); 

  return (                 /* 20 or "20px" */
  <main style={{fontSize: "20px"}}>
    <Box1 now = {now} info={{ age: 30, name: 'hasan'}}/>   


   
  
  </main>
  );
}

export default App
