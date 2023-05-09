import styled from 'styled-components';

export const StyledTable = styled.div`
  section {
    width: 300px;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.582);
    box-shadow: rgba(223, 223, 223, 0.15) 0px 15px 25px, rgba(196, 194, 194, 0.05) 0px 5px 10px;
    border-radius: 8px;
    overflow: hidden;
  }

  table th {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #ffffff46;
    color: white;
  }

  table td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid #eee;
  }

  table tbody tr {
    transition: all 100ms ease-in;
  }

  table tbody tr:hover {
    background-color: #ffffff13;
  }

  .action-btns {
    justify-content: center;
  }

  .table__wrapper {
    width: 100%;
  }

  .btn-pencil,
  .btn-trash,
  .btn-save {
    cursor: pointer;
    transition: all 300ms ease-in;
  }

  .btn-trash {
    color: rgb(231, 74, 74);
  }

  .btn-pencil {
    color: #ffffff8c;
    padding-right: 1rem;
  }

  .btn-save {
    color: rgba(114, 182, 114, 0.664);
    padding-right: 1rem;
  }

  .editable input {
    text-align: center;
    background-color: #eee;
    border: none;
    background-color: transparent;
    letter-spacing: 1px;
    outline: none;
    box-shadow: rgba(239, 239, 241, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    padding: 5px 0px 5px 0px;
    width: 80%;
    color: white;

    font-size: 14px;
  }

  span:hover {
    scale: 1.2;
  }

  .pagination {
    display: flex;
    gap: 1rem;
    list-style: none;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }

  .active {
    color: white;
    padding: 0.1rem 0.3rem 0.1rem 0.3rem;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .pagination .page-link {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.815);
  }

  .page-prev,
  .page-next {
    padding: 0.2rem 0.8rem 0.2rem 0.8rem;
    background-color: red;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 768px) {
    table {
      border-collapse: collapse;
      width: 100%;
      text-align: center;
      color: rgba(255, 255, 255, 0.582);
      box-shadow: rgba(223, 223, 223, 0.15) 0px 15px 25px, rgba(196, 194, 194, 0.05) 0px 5px 10px;
      border-radius: 8px;
      overflow: hidden;
    }

    table th {
      padding-top: 1rem;
      padding-bottom: 1rem;
      background-color: #ffffff46;
      color: white;
    }

    table td {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      border: none;
      border-bottom: 1px solid #eee;
    }

    table tbody tr {
      transition: all 100ms ease-in;
    }

    table tbody tr:hover {
      background-color: #ffffff13;
    }

    section {
      width: 768px;
    }

    .action-btns {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 768px), (max-device-width: 768px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    .table__wrapper {
      width: 100%;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      margin: 0 0 1rem 0;
    }

    tr:nth-child(odd) {
      background: transparent;
      margin-bottom: 2rem;
    }

    td {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      color: rgba(255, 255, 255, 0.582);
    }

    td:before {
      position: absolute;
      top: 0;
      left: 06px;
      padding-right: 10px;
      white-space: nowrap;
    }

    td:nth-of-type(1):before {
      content: 'Name';
      font-weight: 600;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    td:nth-of-type(2):before {
      content: 'Surname';
      font-weight: 600;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    td:nth-of-type(3):before {
      content: 'Email';
      font-weight: 600;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    td:nth-of-type(4):before {
      content: 'Age';
      font-weight: 600;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    td:nth-of-type(5):before {
      content: 'Actions';
      font-weight: 600;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
`;
