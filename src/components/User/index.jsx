import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

export const CURRENT_USER = gql`
  query CURRENT_USER {
    me {
      name
      email
    }
  }
`;
const User = props => (
  <Query {...props} query={CURRENT_USER}>
    {payload => {
      return props.children(payload.data);
    }}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
