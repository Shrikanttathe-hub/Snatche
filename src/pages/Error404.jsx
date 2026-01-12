import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/error404.css';

const Error404 = () => {
  return (
   <>
     <Header/>
      <main>
    <section class="error404">
        <div class="errorContent">
            <h1>Page Not Found</h1>
            <p>Seems like the shark ate your page</p>
        </div>
    </section>
    </main>
     <Footer/>
   </>
  )
}

export default Error404;
