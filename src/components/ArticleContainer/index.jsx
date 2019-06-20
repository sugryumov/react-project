import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionArticle from '../../actions/article';
import Article from '../Article';
import './ArticleContainer.css';

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actionGetArticle.getArticles();
  }

  render() {
    const exeptText = (text) => {
      const size = 80;
      const newsContent = text;

      if(newsContent.length > size) {
        return newsContent.slice(0, size) + ' ...';
      }
    }

    const getImage = this.props.image.map(img => img.download_url);
    const getArticleList = this.props.article.map((articleData, index) => {
      return (
        <li className="articles__item" key={ articleData.id }>
          <div className="article">

            <img src={getImage[index]} alt="" className="article__img"/>

            <div className="article__data">
              <h3 className="article__title">{ articleData.title }</h3>

              <p className="article__excerpt">
                {exeptText(articleData.body)}
                <Link to={'/articles/' + articleData.id} className="link article__link">Читать дальше</Link>
              </p>

              <div className="article__info">
                <p className="article__meta">June 19, 2019</p>
                <p className="article__view">Like { this.props.countLike }</p>
              </div>
            </div>
          </div>
        </li>
      )
    })

    return (
      <>
        <Route path={ '/articles' } exact render={ () => {
          return (
            <section className="articles">
              <div className="container">
                <ul className="articles__list">
                  { getArticleList }
                </ul>

                <div className="articles__pagination">
                  <ul className="pagination__list">
                    <li className="pagination__item pagination__item--active">
                      <a className="pagination__link" href="#">1</a>
                    </li>
                    <li className="pagination__item">
                      <a className="pagination__link" href="#">2</a>
                    </li>
                    <li className="pagination__item">
                      <a className="pagination__link" href="#">3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )
        } } />

        <Route
          path={'/articles/:id'}
          exact
          render={ (props) => {
            const articleId = +props.match.params.id;
            const selectedArticle = this.props.article.find(article => article.id === articleId);
            
            return <Article selectedArticle={ selectedArticle }/>
          }}
        />
      </>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article.article,
  image: state.article.image,
  countLike: state.article.countLike,
});

const mapDispatchToProps = dispatch => ({
  actionGetArticle: bindActionCreators(actionArticle, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
