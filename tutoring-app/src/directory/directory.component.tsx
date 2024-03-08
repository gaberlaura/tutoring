import React from 'react';
import CategoryItem from '../components/category-item/category-item.component';

import './directory.styles.scss';

interface Category {
    id: string; 
    imageUrl: string;
    title: string;
    desc: string;
}

interface DirectoryProps {
    categories: Category[];
}

const Directory: React.FC<DirectoryProps> = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Directory;
