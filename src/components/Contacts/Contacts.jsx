const Contacts = ({ contacts, title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
      <ul>
        {contacts.length > 0
          ? contacts.map(({ id, name, number }) => (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
                <button type="button">Delete</button>
              </li>
            ))
          : 'There are no contacts'}
      </ul>
    </div>
  );
};

export default Contacts;
