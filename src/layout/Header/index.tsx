import React from 'react';
import Link from 'next/link';
import * as S from './styles';
const Header: React.FC = () => {
  return (
    <S.Container>
      <Link href="/">
        <a className="neonText">Psycho Animes</a>
      </Link>
    </S.Container>
  );
};

export default Header;
