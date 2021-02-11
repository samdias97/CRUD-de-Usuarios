import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;

  table {
    width: 100%;
    thead {
      color: #fff;
      font-size: 15px;
      background: #006633;
      th {
        padding: 5px;
      }
    }

    tbody {
      text-align: center;
      font-size: 13px;
      tr {
        color: #fff;
        background: #00994d;
        td {
          padding: 5px;
          button {
            border: none;
            outline: none;
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
            width: 30px;
            cursor: pointer;
            svg {
              color: #fff;
            }
          }

          #btnEdit {
            background: #cccc00;
            transition: background 0.2s;
            &:hover {
              background: ${shade(0.2, '#cccc00')};
            }
          }

          #btnDelete {
            background: #e60000;
            transition: background 0.2s;
            &:hover {
              background: ${shade(0.2, '#e60000')};
            }
          }
        }
      }
    }
  }
`;
