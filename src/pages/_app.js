import Layout from '@/modules/app/App';
import PropTypes from 'prop-types';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

function MyApp({ Component }) {
  return (
    <Layout className={montserrat.className}>
      <Component />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
