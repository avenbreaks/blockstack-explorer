import React from 'react';
import { Flex, Box, Card } from 'blockstack-ui';
import { fetchName } from '@client/api';

class NamesSinglePage extends React.Component {
  static async getInitialProps({ req, query }) {
    const name = req && req.params ? req.params.name : query.name;
    const data = await fetchName(name);
    return {
      user: {
        id: name,
        ...data,
      },
      meta: {
        title: name,
      },
    };
  }

  render() {
    return (
      <Flex p={5} flexDirection="row" width={1}>
        data for {this.props.user.id}
        <pre>
          <code>{JSON.stringify(this.props.user, null, 2)}</code>
        </pre>
      </Flex>
    );
  }
}

export default NamesSinglePage;
