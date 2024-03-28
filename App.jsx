

 //   const [contactList, setcontactList] = useState(0)

 //   const BASE_CONTACT_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`

 //   useEffect = (() => {
 //     const getContacts = async() => {
 //       const response = await fetch(BASE_CONTACT_URL);
  //       const Json = await response.json();
 //       console.log(Json)



 //     }
  //   }
 // )
 
 import { useState, useEffect } from 'react';
import ContactorderedList from './Contact_List';
import './App.css';

function App() {
  const [contactList, setcontactList] = useState([]);

  const Contact_API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`;

  useEffect(() => {
    const getContacts = async() => {


      const response = await fetch(`${Contact_API_URL}`);
      console.log(response)
      const jsonObject = await response.json();
      console.log(jsonObject)
      const allContacts = jsonObject.results;
      console.log(allContacts)
      setcontactList(allContacts);
    }

    getContacts();
  }, []);

  return (
    <>
      <h1>Contact React</h1>
      <ContactorderedList contactList={contactList} />
    </>
  )
}

export default App