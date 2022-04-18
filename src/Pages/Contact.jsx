import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>This is the contact page</h1>
      <button onClick={() => navigate("/about")}>Change to about page</button>
    </div>
  );
};

export default Contact;
