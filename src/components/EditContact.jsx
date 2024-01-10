import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const EditContact = ({ show, setShow, contactEditing, editContact }) => {
  const contactComing = contactEditing ?? {
    firstName: '',
    lastName: '',
    phone: '',
    category: 'Other',
    favorite: false,
  };

  const [data, setData] = useState(contactComing);

  useEffect(() => {
    setData(contactComing);
  }, [contactEditing]);

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="firstName">
                Firstname
              </label>
              <input
                className="form-control"
                type="text"
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="lastName">
                Lastname
              </label>
              <input
                className="form-control"
                type="text"
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">
                Phone
              </label>
              <input
                className="form-control"
                type="tel"
                id="phone"
                name="phone"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="category">
                Category
              </label>
              <select
                className="form-select"
                name="category"
                id="category"
                value={data.category}
                onChange={(e) => setData({ ...data, category: e.target.value })}
              >
                <option value="Other">Other</option>
                <option value="Relatives">Relatives</option>
                <option value="Family">Family</option>
                <option value="Friends">Friends</option>
              </select>
            </div>
            <div className="mb-3 form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="favorite"
                name="favorite"
                checked={data.favorite}
                onChange={(e) =>
                  setData({ ...data, favorite: e.target.checked })
                }
              />
              <label className="form-check-label" htmlFor="favorite">
                Favorite
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => editContact(data)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditContact;
