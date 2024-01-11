import React from 'react';

const ContactList = ({ contacts, deleteContact, onEdit }) => {
  return (
    <div className="py-3">
      {contacts.map((contact) => (
        <div
          className="card p-2 mb-2 d-flex flex-row align-items-center justify-content-between"
          key={contact.id}
        >
          <div>
            <h3>
              {contact.firstName} {contact.lastName}
            </h3>
            <p>{contact.phone}</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-sm">🤍</button>
            <button
              onClick={() => onEdit(contact)}
              className="btn btn-sm btn-warning"
            >
              Edit
            </button>
            <button
              onClick={() => deleteContact(contact.id)}
              className="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
