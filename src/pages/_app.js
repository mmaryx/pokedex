import Layout from '@/modules/app/App';
import PropTypes from 'prop-types';

function MyApp({ Component }) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
