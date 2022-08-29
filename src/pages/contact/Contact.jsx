import "./contact.css";
import Navbar from "../../components/navbar/Navbar";

const Contact = ({username}) => {
  
  return (
    <div>
      <Navbar username = {username}/>
      <div className="homeContainer">
        <address>
	Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
	Visit us at:<br>
	Example.com<br>
	Box 564, Disneyland<br>
	USA
</address>
      </div>
    </div>
  );
};

export default Home;
