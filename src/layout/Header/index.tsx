import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import * as S from './styles';
const Header: React.FC = () => {
  return (
    <S.Container>
      <Link href="/">
        <a className="neonText">Psycho Animes</a>
      </Link>
      <Link href="/animes/list">
        <a className="link">
          <Button type="primary">Anime List</Button>
        </a>
      </Link>
    </S.Container>
  );
};

export default Header;
