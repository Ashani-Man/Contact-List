const ContactorderedList = ({ contactList }) => {
  return (
    <ul>
      {
        contactList.map((users) => {
          return <li key={users.url}>{users.name}</li>
        })
      }
    </ul>
  )
}

export default ContactorderedList;