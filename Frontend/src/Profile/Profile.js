import React,{useState,useEffect} from 'react';
import Navbar from '../Navigation/Navbar';
import './profile.css';
import axios from 'axios';
import {FiSettings} from 'react-icons/fi';
import {BiHelpCircle} from'react-icons/bi';
import {AiOutlineHistory} from'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {GoNumber} from 'react-icons/go';
import {BsTelephoneFill } from 'react-icons/bs';
import {FaAddressBook} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'
import {MdReviews} from 'react-icons/md'
import {GrGallery} from 'react-icons/gr'
import EditForm from './EditForm';

export const Profile = () => {
  const[data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
const [editedName, setEditedName] = useState('');
const [editedPhone, setEditedPhone] = useState('');
const [editedAddress, setEditedAddress] = useState('');
const [editedEmail, setEditedEmail] = useState('');


    useEffect(() => {
        axios.get('http://localhost:8080/getcustid/2')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[]);
    useEffect(() => {
      if (editing) {
        setEditedName(data.custname);
        setEditedPhone(data.custphone);
        setEditedAddress(data.custaddress);
        setEditedEmail(data.custemail);
      }
    }, [editing, data]);
    const handleSave = () => {
      // Send the PUT request to update the customer data
      const updatedData = {
        custname: editedName,
        custphone: editedPhone,
        custaddress: editedAddress,
        custemail: editedEmail,
      };
    
      axios
        .put(`http://localhost:8080/upcus/${data.custid}`, updatedData)
        .then((response) => {
          console.log(response.data); // Log success message or handle success as needed
          setEditing(false); // Exit editing mode
        })
        .catch((error) => {
          console.error(error); // Handle error if needed
        });
    };
    
    const handleEditToggle = () => {
      setEditing((prevState) => !prevState);
    };
    const handleDelete = () => {
      // Send the DELETE request to the backend to delete the customer profile
      axios.delete(`http://localhost:8080/delcust/1`)
        .then((response) => {
          console.log(response.data); // Log success message or handle success as needed
        })
        .catch((error) => {
          console.error(error); // Handle error if needed
        });
    };
  return (
    <div>
      <div>
        <Navbar />
        </div>
        <br /><br /><br /><br /><br />
        < div id="list-whole">
          <br /><br /><br /><br /><br /><br /><br /><br />
          <ul>
           <div id="ul-whole">
            <div id="tex-div">
            <li id="text-li">
              <div id="set-icon">
              <FiSettings size={30}/>
              </div>
              Settings
            </li>
            </div><br /><br />
            <div id="tex-div">
            <li id="text-li">
              <div id="help-icon">
              <BiHelpCircle size={30}/>
              </div>
              Help
            </li>
            </div><br /><br />
            <div id="tex-div">
            <li id="text-li">
              <div id="his-icon">
              <AiOutlineHistory  size={30}/>
              </div>
              Order history
            </li>
            </div><br /><br />
            <div id="tex-div">
            <li id="text-li">
            <div id="his-icon">
              <MdReviews size={30}/>
              </div>
             Reviews
            </li>
            </div><br /><br />
            <div id="tex-div">
            <li id="text-li">
            <div id="his-icon">
              <GrGallery size={30}/>
              </div>
              Gallery
            </li>
            </div><br /><br />
            </div>
          </ul>
        </div>
        
        <div>
         <img src="https://media.istockphoto.com/id/638000936/photo/vegan-and-vegetarian-indian-cuisine-hot-spicy-dishes.jpg?s=612x612&w=0&k=20&c=ISxBGeKALq9c11v05BbNw2XtRzQaGn4BddU8BHF9ANk=" id="img-grad"/>
     
        
      <img src=" https://png.pngtree.com/element_our/20190529/ourmid/pngtree-flat-user-pattern-round-avatar-pattern-image_1200096.jpg" id="pro-pro"/>
      
      <div id="hov-text">
        Hi {data.custname}!!
        </div>
        </div>
        <div id="prof-box">
        <div id="box-text">
  <br />
  {editing ? (
    <>
      
      <EditForm
              editedName={editedName}
              setEditedName={setEditedName}
              editedPhone={editedPhone}
              setEditedPhone={setEditedPhone}
              editedAddress={editedAddress}
              setEditedAddress={setEditedAddress}
              editedEmail={editedEmail}
              setEditedEmail={setEditedEmail}
              handleSave={handleSave}
            />
    </>
  ) : (
    <>
      <div id="fill-icon">
        <BsFillPersonFill size={20} />
      </div>
      <div id="name-text">{data.custname}</div><hr id="line-hor"/>
      <br />
      <div id="fill-icon">
        <GoNumber />
      </div>
      <div id="name-text">{data.custid}</div><hr id="line-hor"/>
      <br />
      <div id="fill-icon">
        <BsTelephoneFill />
      </div>
      <div id="name-text">{data.custphone}</div><hr id="line-hor"/>
      <br />
      <div id="fill-icon">
        <FaAddressBook />
      </div>
      <div id="name-text">{data.custaddress}</div><hr id="line-hor"/>
      <br />
      <div id="fill-icon">
        <MdEmail />
      </div>
      <div id="name-text">{data.custemail}</div><hr id="line-hor"/>
      <br />
    </>
  )}
</div>

  {editing ? (
    <center>
    <button type="button" id="save-but" onClick={handleSave}>
      Save
    </button>
    </center>
  ) : (
    <button type="button" id="edi-but" onClick={handleEditToggle}>
      Edit
    </button>
  )}
</div>
       <div >
       <button type="button"  id="del-but"onClick={handleDelete}>Delete</button>

       </div>
       <br /><br /><br />
      
       
        </div>
             
                          
                        
                   
    
  )
}







