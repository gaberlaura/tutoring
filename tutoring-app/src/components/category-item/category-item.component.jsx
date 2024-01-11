/*
  This component is responsible for rendering a category card or item in a user interface. 
  It imports styles from the './category-item.styles.scss' file. 
  The component takes a 'category' prop, which includes information about the category, such as its image URL, title, and description.
  And then visually represents the category with a container that includes a background image, displaying the category's image dynamically using inline styles. 
  The category's title and description are presented in a separate section within the card.
*/

import './category-item.styles.scss';


const CategoryItem = ({ category }) => {
  const { imageUrl, title, desc } = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CategoryItem