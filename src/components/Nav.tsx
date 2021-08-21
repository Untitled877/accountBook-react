import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'components/Icon';

const NavWrapper = styled.nav`
  background: #F6F6F6;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;
    color: #999999;

    > li {
      width: 33.3333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;

        .icon {
          width: 24px;
          height: 24px;
          fill: #999;
        }

        &.selected {
          color: black;

          .icon {
            fill: black;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export {Nav};