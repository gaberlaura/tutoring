/*
    The Directory component serves as a container for rendering a list of CategoryItem components based on the provided array of categories. 
    Each CategoryItem represents a specific category and is rendered within the "directory-container" div.
 */

import CategoryItem from '../components/category-item/category-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Directory