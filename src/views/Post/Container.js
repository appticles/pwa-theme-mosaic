import React, { Component } from 'react';

export default class Container extends Component {
  render() {
    return (
      <div>
        <div className="ui fluid container">
          <h2 className="ui header">Dogs Roles with Humans</h2>
          <p>
            Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with
            complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness,
            and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has
            enabled them to become one of the most successful species on the planet today.
          </p>
          <p>
            The dogs&#x27; value to early human hunter-gatherers led to them quickly becoming ubiquitous across world cultures. Dogs perform many
            roles for people, such as hunting, herding, pulling loads, protection, assisting police and military, companionship, and, more recently,
            aiding handicapped individuals. This impact on human society has given them the nickname &quot;man&#x27;s best friend&quot; in the Western
            world. In some cultures, however, dogs are also a source of meat.
          </p>
        </div>
      </div>
    );
  }
}
