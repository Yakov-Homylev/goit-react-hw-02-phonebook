import React from "react";
import PropTypes from "prop-types";

export default function ContactList({ array, removeContact }) {
  return (
    <ul>
      {array.length > 0 ? (
        array.map((el) => {
          return (
            <li key={el.id}>
              {el.name + ":"} <span>{el.number}</span>
              <button type="button" onClick={() => removeContact(el.id)}>
                Delete
              </button>
            </li>
          );
        })
      ) : (
        <li>This list is empty</li>
      )}
    </ul>
  );
}

ContactList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
