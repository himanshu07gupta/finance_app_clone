// export function  Heading(props){
//     return <div>
//        {props.title}
//     </div>
// }
export const Heading = ({ text }) => {
    return (
      <h1 className="text-4xl font-bold text-gray-800 ">{text}</h1>
    );
  };