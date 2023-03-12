const Contacts = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name }) => (
          <li key={id}>
            <p>name: {name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
