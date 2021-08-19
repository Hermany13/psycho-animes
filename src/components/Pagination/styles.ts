import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .button {
    display: flex;
    align-items: center;

    .number {
      min-width: 40px;
      height: 32px;
      border: 1px solid #f09;
      text-align: center;
      margin-left: 10px;
      margin-right: 10px;
      padding-top: 5px;
      border-radius: 2px;
      color: #f09;
    }

    .ant-btn {
      background-color: #f09;
      border: none;
    }
  }
`;
