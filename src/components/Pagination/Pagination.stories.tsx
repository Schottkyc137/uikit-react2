import React from 'react';
import { Pagination } from './Pagination';
export default {
  title: 'Pagination',
  component: Pagination,
};

export const Basic = () => (
  <Pagination>
    <li>
      <a href="#">
        <span data-uk-pagination-previous />
      </a>
    </li>
    <li>
      <a>1</a>
    </li>
    <li className="uk-disabled">
      <span>...</span>
    </li>
    <li>
      <a>4</a>
    </li>
    <li>
      <a>5</a>
    </li>
    <li>
      <a>6</a>
    </li>
    <li className="uk-active">
      <span>7</span>
    </li>
    <li>
      <a>8</a>
    </li>
    <li>
      <a>9</a>
    </li>
    <li>
      <a>10</a>
    </li>
    <li className="uk-disabled">
      <span>...</span>
    </li>
    <li>
      <a>20</a>
    </li>
    <li>
      <a>
        <span data-uk-pagination-next />
      </a>
    </li>
  </Pagination>
);
