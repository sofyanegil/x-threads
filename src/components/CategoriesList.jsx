import React from 'react';
import PropTypes from 'prop-types';

export default function CategoriesList({ categories, selectedCategoryHandler }) {
  const { values, selectedCategory } = categories;

  return (
    <div className="card">
      <p className="card-header text-center text-center fs-5">Popular Category</p>
      <div className="card-body p-2 rounded">
        {values.map((category) => (
          <button
            type="button"
            key={category}
            className={`btn btn-sm btn-outline-dark m-1  ${selectedCategory === category ? 'active shadow' : ''}`}
            onClick={() => selectedCategoryHandler(category)}
            data-bs-toggle="button"
            aria-pressed="true"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.shape({
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCategory: PropTypes.string,
  }).isRequired,
  selectedCategoryHandler: PropTypes.func.isRequired,
};
