import 'react-router-modal/css/react-router-modal.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Image, Header, Button } from 'semantic-ui-react';
import Moment from 'react-moment';

import { pagePropType } from '../SideMenu/reducer';
import './style.css';

class PageDetails extends Component {
  getImage(sourceImg) {
    let imageSource;
    if (sourceImg) {
      imageSource = sourceImg[0].source_url;
      return imageSource;
    }
    return imageSource;
  }

  render() {
    const { page } = this.props;
    const { author } = page._embedded;
    const featuredMedia = page._embedded['wp:featuredmedia'];

    return (
      <Container className="page">
        {featuredMedia ? <Image src={this.getImage(featuredMedia)} /> : ''}
        <Container textAlign="justified">
          <Header>
            <Link to="/">
              <Button icon="close" />
            </Link>
            <div dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
          </Header>

          <Header.Subheader>
            &nbsp;by&nbsp;<b>{author[0].name}</b>,&nbsp;<Moment format="MMMM DD, YYYY">{page.date}</Moment>
          </Header.Subheader>

          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </Container>
      </Container>
    );
  }
}

PageDetails.propTypes = {
  page: pagePropType.isRequired,
};

const mapStateToProps = state => ({
  sideMenuVisible: state.sideMenuVisible,
});

export default connect(mapStateToProps, null)(PageDetails);
