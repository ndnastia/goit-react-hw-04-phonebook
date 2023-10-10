import PropTypes from 'prop-types';


const Filter = ({ value, onChange }) => (
  <div>
    <h4>Find contacts by name</h4>
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Search..."
    />
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;