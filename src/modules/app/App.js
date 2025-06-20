import PropTypes from 'prop-types';
import GlobalStyle from './globalStyles';

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
