import React from 'react';
import ReactDOM from 'react-dom';

/* import styles */
import './styles/fonts.css'
import './styles/variables.css'
import './styles/global.css'

/* import images */
import './img/favicon.ico'

/* import articles */
import articles from './fixtures'

/* import components */
import Header from './components/Header';
import Intro from './components/Intro'
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';

ReactDOM.render(
  <div>
    <Header />
    <Intro />
    <ArticleList articles={ articles } />
    <Footer />
  </div>,
  document.getElementById('app')
);
