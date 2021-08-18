import styled from 'styled-components';
import media from 'styled-media-query';
interface IProps {
  color?: string;
}

export const Container = styled.div<IProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.color};
  font-family: 'Quicksand', sans-serif;
  padding-top: 30px;
  font-size: 35px;
  align-items: center;

  ${media.lessThan('small')`
      font-size: 1.5em;
  `}

  span {
    font-size: 20px;
    margin: 0 16px;
  }
`;
