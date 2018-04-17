import React from 'react';
import { Item, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { categoryPropType } from '../../reducer';
import './style.css';

const CategoryCard = props => (
  <Link to={'/category/' + props.category.slug + '/' + props.category.id}>
    <Item>
      <Item.Header as={Header}>
        <h2 dangerouslySetInnerHTML={{ __html: props.category.name }} />
      </Item.Header>
    </Item>
  </Link>
);

CategoryCard.propTypes = {
  category: categoryPropType.isRequired,
};

export default CategoryCard;
