import React, { Component } from 'react';
import { Container, Image, Header, Label } from 'semantic-ui-react';
import Moment from 'react-moment';

import { postPropType } from '../PostsCarousel/reducer';
import './style.css';

export default class PostView extends Component {
  render() {
    const { post } = this.props;
    const { author } = post._embedded;
    const categories = post._embedded['wp:term'];
    const featuredMedia = post._embedded['wp:featuredmedia'];

    function getImage(sourceImg) {
      let imageSource;
      if (sourceImg) {
        imageSource = sourceImg[0].source_url;
        return imageSource;
      }
      imageSource = 'https://placeholdit.co//i/555x650';
      return imageSource;
    }

    return (
      <Container className="post">
        <Image src={getImage(featuredMedia)} />
        <Container textAlign="justified">
          {categories[0].map(category => (
            <Label color="teal" key={Math.random()}>
              {category.name}
            </Label>
          ))}
          <Header>
            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </Header>
          <Header.Subheader>
            &nbsp;by&nbsp;<b>{author[0].name}</b>,&nbsp;<Moment format="MMMM DD, YYYY">{post.date}</Moment>
          </Header.Subheader>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Container>
      </Container>
    );
  }
}

PostView.propTypes = {
  post: postPropType.isRequired,
};
