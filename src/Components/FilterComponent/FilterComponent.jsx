import './FilterComponent.css'

const FilterComponent = ({ onFilter, onClear, filterText }) => {

  return (
    <div className="filter-container">
      <label htmlFor="nameInput" className="filter-label">Search :</label>
      <input
        type="text"
        name='nameInput'
        className="filter-input"
        onChange={onFilter}
        value={filterText}>
        </input>
        <div onClick={onClear}>
          <i className="fas fa-times filter-clear"></i>
        </div>
      </div>
  );
}

export default FilterComponent;