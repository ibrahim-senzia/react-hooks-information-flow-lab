import React from "react";

function Filter ({ selectedCategory, onCategoryChange}) {

    function handleCategoryChange(e) {
        onCategoryChange(e.target.value)
    }
    
    return (
        <div>
            <div className="Filter">
                <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
                </select>
            </div>
        </div>
    )
}

export default Filter;