import { useState } from 'react';
import axios from 'axios';
import ICONS from '../../shared/icons';

const Table = ({ data, setData }) => {
  const [editRow, setEditRow] = useState(null);
  const [newData, setNewData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleDelete = async (id, e) => {
    try {
      e.preventDefault();
      await axios.delete(`/api/customers/${id}`);
      setData(
        data.filter((item) => {
          return item._id !== id;
        })
      );

      const response = await axios.get('/api/customers');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    setEditRow(id);
  };

  const handleSave = async (id) => {
    // Remove the newData parameter from handleSave function
    await axios.put(`/api/customers/${id}`, newData); // Use newData state variable here
    setEditRow(null);

    const response = await axios.get('/api/customers');
    setData(response.data);
  };

  const handleInputChange = (e, fieldName) => {
    // Add a new function to handle input changes
    setNewData({
      ...newData,
      [fieldName]: e.target.value,
    });
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <section>
      <div className='table__wrapper'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item) => (
              <tr key={item._id} className={`collapsible${editRow === item._id ? ' editable' : ''}`}>
                <td>{editRow === item._id ? <input defaultValue={item.name} onChange={(e) => handleInputChange(e, 'name')} /> : item.name}</td>
                <td>{editRow === item._id ? <input defaultValue={item.surname} onChange={(e) => handleInputChange(e, 'surname')} /> : item.surname}</td>
                <td>{editRow === item._id ? <input defaultValue={item.email} onChange={(e) => handleInputChange(e, 'email')} /> : item.email}</td>
                <td>{editRow === item._id ? <input defaultValue={item.age} onChange={(e) => handleInputChange(e, 'age')} /> : item.age}</td>
                <td className='action-btns'>
                  {editRow === item._id ? (
                    <span className='btn-save' onClick={() => handleSave(item._id)}>
                      {ICONS.save}
                    </span>
                  ) : (
                    <span className='btn-pencil' onClick={() => handleEdit(item._id)}>
                      {ICONS.pencil}
                    </span>
                  )}
                  <span className='btn-trash' onClick={(e) => handleDelete(item._id, e)}>
                    {ICONS.trash}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className='pagination'>
            <li className='page-item'>
              <p className='page-link page-prev' onClick={prevPage}>
                Prev
              </p>
            </li>
            {numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <p className='page-link' onClick={() => changeCurrentPage(n)}>
                  {n}
                </p>
              </li>
            ))}
            <li className='page-item'>
              <p className='page-link page-next' onClick={nextPage}>
                Next
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Table;
