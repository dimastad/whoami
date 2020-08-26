import React, { useState } from 'react'

const UploadImage = (props) => {
  const fieldValues = {
    url: ''
  }

  const [ values, setValues ] = useState(fieldValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addUrl(values);
  }

  return (
    <form className="form-inline justify-content-center" onSubmit={handleFormSubmit}>
      <fieldset className='row border px-3 pb-3'>
        <legend className="px-3">enter URL</legend>
        <input 
          className="form-control mb-3"
          name="url"
          value={values.url} 
          onChange={handleInputChange} />
        <button type='submit' className="btn btn-dark mx-auto">Add</button>
      </fieldset>
    </form>
  )
}

export default UploadImage;
