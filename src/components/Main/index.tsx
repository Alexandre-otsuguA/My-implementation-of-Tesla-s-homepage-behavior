import { FC, useRef } from 'react';
import * as Styled from './styles';
import Sections from './Sections';

interface IProps {
  sections: {
    title: string;
    subtitle?: string;
    background: string;
    buttons?: { text: string; link: string }[];
  }[];
}

const Main: FC<IProps> = ({ sections }) => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <Styled.Wrapper ref={mainRef}>
      <Sections sections={sections} containerRef={mainRef} />
      {sections.map(({ title, background }) => (
        <Styled.Background key={title} color={background} />
      ))}
    </Styled.Wrapper>
  );
};

export default Main;
