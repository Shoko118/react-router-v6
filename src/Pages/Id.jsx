import { useParams } from "react-router-dom";

const Id = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>This is the id of {id}</h1>
    </div>
  );
};

export default Id;
