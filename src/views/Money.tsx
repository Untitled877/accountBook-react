import React from 'react';
import {TopBar} from 'components/TopBar';
import {Wrapper} from 'components/Wrapper';
import {Nav} from 'components/Nav';
import {Main} from 'components/Main';
import {TagsSection} from 'components/Money/TagsSection';
import {NoteSection} from 'components/Money/NoteSection';
import {NumberPadSection} from 'components/Money/NumberPadSection';
import styled from 'styled-components';

const Space = styled.div`
  flex-grow: 1;
`;

const Money: React.FC = () => {
  return (
    <Wrapper>
      <TopBar title="记一笔帐"/>
      <Main>
        <TagsSection/>
        <Space/>
        <NoteSection/>
        <NumberPadSection/>
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export {Money};