import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.css';

let CommentForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" placeholder="Your name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" placeholder="Your email address" required />
      </div>
      <div>
        <label htmlFor="content">Leave a comment</label>
        <Field name="content" component="textarea" type="text" placeholder="Tell us what you think..." required />
      </div>
      <Button id="submit" type="submit" color="teal" compact>
        Submit
      </Button>
    </Form>
  );
};

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

CommentForm = reduxForm({
  form: 'comment',
})(CommentForm);

export default CommentForm;