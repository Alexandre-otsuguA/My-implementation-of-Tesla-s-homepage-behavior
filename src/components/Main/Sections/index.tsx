import { FC, MutableRefObject, useEffect } from 'react';
import * as Styled from './styles';
import Main from '../../Main';

interface IProps {
  containerRef: MutableRefObject<HTMLElement>;
  sections: typeof Main.defaultProps.sections;
}

const SectionHandler: FC<IProps> = ({ containerRef, sections }) => {
  const getProperties = ({ scrollTop, offsetHeight }: HTMLElement) => {
    let id = 0;
    const scrollTopBasedOnId = scrollTop - offsetHeight * id;
    let opacity = 1 - (scrollTopBasedOnId * 100) / (offsetHeight / 2) / 100;

    (function myFunc() {
      if (opacity < 0) {
        opacity *= -1;
        id++;
        if (opacity > 1) opacity = 1 - (opacity - 1);
        myFunc();
      }
    })();

    return { id, opacity };
  };

  const manageProperties = (Container: HTMLElement) => {
    const Sections = [...Container.firstChild.childNodes] as HTMLElement[];
    return (id: number, opacity: number) => {
      Sections.forEach((sec, idx) => {
        if (idx === id) {
          sec.style.visibility = `unset`;
          sec.style.opacity = `${opacity}`;
        } else sec.style.visibility = `hidden`;
      });
    };
  };

  const scrollHandler = (Container: HTMLElement) => {
    const updateSections = manageProperties(Container);

    return () => {
      const { id, opacity } = getProperties(Container);
      updateSections(id, opacity);
    };
  };

  useEffect(() => {
    const Container = containerRef.current;
    const onScroll = scrollHandler(Container);

    onScroll();
    Container.onscroll = onScroll;
  }, []);

  return (
    <Styled.Wrapper>
      {sections.map(({ title, subtitle, buttons }, idx) => (
        <Styled.Section key={title}>
          <Styled.Header>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Subtitle>
              {subtitle ?? (
                <>
                  Order Online for <a href=''>Touchless Delivery</a>
                </>
              )}
            </Styled.Subtitle>
          </Styled.Header>
          <Styled.Footer>
            {buttons ? (
              buttons.map(({ text, link }, idx) => (
                <Styled.Button key={idx} title={text}>
                  <a href={link}>{text}</a>
                </Styled.Button>
              ))
            ) : (
              <>
                <Styled.Button>
                  <a href=''>CUSTOM ORDER</a>
                </Styled.Button>
                <Styled.Button>
                  <a href=''>EXISTING INVENTORY</a>
                </Styled.Button>
              </>
            )}
            {idx === 0 && (
              <Styled.ArrowWrapper>
                <Styled.Arrow />
              </Styled.ArrowWrapper>
            )}
          </Styled.Footer>
        </Styled.Section>
      ))}
    </Styled.Wrapper>
  );
};

export default SectionHandler;
