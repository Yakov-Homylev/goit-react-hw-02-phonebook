import React from "react";
import PropTypes from "prop-types";
import {
  List,
  Item,
  NumberSpan,
  DeleteButton,
  Notification,
} from "./ContactList.styled";

export default function ContactList({ array, removeContact }) {
  return (
    <List>
      {array.length > 0 ? (
        array.map((el) => {
          return (
            <Item key={el.id}>
              {el.name + ":"} <NumberSpan>{el.number}</NumberSpan>
              <DeleteButton type="button" onClick={() => removeContact(el.id)}>
                Delete
              </DeleteButton>
            </Item>
          );
        })
      ) : (
        <Notification>This list is empty</Notification>
      )}
    </List>
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
