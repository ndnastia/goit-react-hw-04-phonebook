import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        type="button"
        
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;