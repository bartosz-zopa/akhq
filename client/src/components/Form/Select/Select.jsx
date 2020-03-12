import React from 'react';

const Select = ({ name, label, items, error, ...rest }) => {
  return (
    <div className="form-group">
      {label !== '' ? (
        <label htmlFor={name} className="col-sm-2 col-form-label">
          {label}
        </label>
      ) : (
        <div></div>
      )}
      <select className="form-control" id={name} name={name} {...rest}>
        {/* <option value="" /> */}
        {items.map(item => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
