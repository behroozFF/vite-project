import { Fragment } from "react";
// clg = console.log()
const Box1 = (prop) => {

   const {now, info} = prop   /* destracture  روش */
  return (
    <Fragment>
      <div>{now}</div>
      <div>{info.age}</div>  
    </Fragment>
  );
};

export default Box1;




// import { Fragment } from "react";

// const Box1 = (prop) => {

//   return (
//     <Fragment>
//       <div>{prop.name}</div>
//       <div>{prop.now}</div>  
//     </Fragment>
//   );
// };








// const Box1 = () => {
//   let now = new Date().toISOString();
  
//     return <Fragment> {/* or  <> </> */}
//             <div>{now}</div> 
//             <div>{now}</div> 
//             <div>{now}</div>
//             <div style={{backgroundColor: 'red', fontSize: '40px'}}>Hello Semantic Tag</div>
//     </Fragment>;
//   };
  
//   export default Box1