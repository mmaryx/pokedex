import PropTypes from 'prop-types';
import './globalStyles'

function Layout({ children }) {
    return (
      <>
        <div>
          {children}
        </div>
      </>
    );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
