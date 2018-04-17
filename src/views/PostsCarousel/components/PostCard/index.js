import React from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { postPropType } from '../../reducer';
import './style.css';

const PostCard = (props) => {
  let path = '';

  if (!_.isNil(props.category)) {
    path = path +
      '/category/' + props.category.params.categorySlug + '/' + props.category.params.categoryId;
  }

  path = path + '/post/' + props.post.slug + '/' + props.post.id;

  return (
    <Link to={path}>
      <Item className="posts">
        {props.post.title && <Item.Header dangerouslySetInnerHTML={{ __html: props.post.title.rendered }} />}
        <Item.Content>
          {props.post.featured_media ?
            <div
              className="image"
              style={{
                backgroundImage: 'url(' + props.post._embedded['wp:featuredmedia'][0].source_url + ')',
              }}
            /> : null}
          <Item.Description dangerouslySetInnerHTML={{ __html: props.post.excerpt.rendered }} />
        </Item.Content>
      </Item>
    </Link>
  );
};

PostCard.propTypes = {
  post: postPropType.isRequired,
  category: PropTypes.shape({
    params: PropTypes.shape({
      categorySlug: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostCard;