import React from 'react';
import { Comment } from './Comment';
import { CommentHeader } from './CommentHeader';
import { CommentBody } from './CommentBody';
import { Avatar } from './Avatar';
import { CommentTitle } from './CommentTitle';
import { CommentMeta } from './CommentMeta';
import { CommentList } from './CommentList';

export default {
  title: 'Comment',
  component: Comment,
};

export const Basic = () => (
  <Comment>
    <CommentHeader>
      <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
        <div className="uk-width-auto">
          <Avatar src="images/avatar.jpg" width="80" height="80" alt="" />
        </div>
        <div className="uk-width-expand">
          <CommentTitle>
            <a className="uk-link-reset" href="#">
              Author
            </a>
          </CommentTitle>
          <CommentMeta className="uk-subnav uk-subnav-divider uk-margin-remove-top">
            <li>
              <a href="#">12 days ago</a>
            </li>
            <li>
              <a href="#">Reply</a>
            </li>
          </CommentMeta>
        </div>
      </div>
    </CommentHeader>
    <CommentBody>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </CommentBody>
  </Comment>
);

export const Primary = () => (
  <Comment primary>
    <CommentHeader>
      <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
        <div className="uk-width-auto">
          <Avatar src="images/avatar.jpg" width="80" height="80" alt="" />
        </div>
        <div className="uk-width-expand">
          <CommentTitle>
            <a className="uk-link-reset" href="#">
              Author
            </a>
          </CommentTitle>
          <CommentMeta className="uk-subnav uk-subnav-divider uk-margin-remove-top">
            <li>
              <a href="#">12 days ago</a>
            </li>
            <li>
              <a href="#">Reply</a>
            </li>
          </CommentMeta>
        </div>
      </div>
    </CommentHeader>
    <CommentBody>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </CommentBody>
  </Comment>
);

export const List = () => (
  <CommentList>
    <Basic />
    <Basic />
    <Primary />
  </CommentList>
);

export const NestedList = () => (
  <CommentList>
    <>
      <Basic />
      <CommentList>
        <Basic />
        <Primary />
      </CommentList>
    </>
    <Primary />
  </CommentList>
);
