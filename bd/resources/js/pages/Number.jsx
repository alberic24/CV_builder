import React, { useState } from 'react';
import './number.css'

function Number() {
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people, formData]);
    setFormData({ name: '', age: '', email: '' });
  };

  return (
    <div>
      <h2>Enter Person's Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Old:
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Post:
          <input type="text" name="post" value={formData.post} onChange={handleChange} />
          </label>
        <button type="submit">Submit</button>
      </form>
      <h2>People</h2>
      <table>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Number;
