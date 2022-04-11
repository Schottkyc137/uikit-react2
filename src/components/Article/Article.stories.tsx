import React from 'react';
import { Article } from './Article';
import { ArticleTitle } from './ArticleTitle';
import { ArticleMeta } from './ArticleMeta';

export default {
  title: 'Article',
  component: Article,
};

export const Basic = () => (
  <Article>
    <ArticleTitle>
      <a className="uk-link-reset" href="">
        Heading
      </a>
    </ArticleTitle>
    <ArticleMeta>
      Written by <a href="#">Super User</a> on 12 April 2012. Posted in{' '}
      <a href="#">Blog</a>
    </ArticleMeta>
    <p className="uk-text-lead">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
      <div>
        <a className="uk-button uk-button-text" href="#">
          Read more
        </a>
      </div>
      <div>
        <a className="uk-button uk-button-text" href="#">
          5 Comments
        </a>
      </div>
    </div>
  </Article>
);
