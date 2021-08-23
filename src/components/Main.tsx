import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

type Props = {
  className?: string;
  scrollTop?: number;
}

const Main: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {return;}
      mainRef.current.scrollTop = props.scrollTop!;
    }, 0);
  }, [props.scrollTop]);
  return (
    <MainWrapper ref={mainRef} className={props.className}>
      {props.children}
    </MainWrapper>
  );
};

Main.defaultProps = {
  scrollTop: 0
};
export {Main};