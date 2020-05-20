import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Layout(props) {
  const { children } = props;
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
