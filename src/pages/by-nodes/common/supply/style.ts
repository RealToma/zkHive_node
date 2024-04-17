import styled from "styled-components";

export const SupplyUI = styled("div")`
  width: 100%;
  .supply_title_wrapper h1 {
    font-family: Inter;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    text-align: left;
    color: #fbda00;
    margin-bottom: 0 !important;
    margin-top: 60px;
  }

  .supply_grid_buttons {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 32px;
    margin-top: 50px;
    .supply_text {
      grid-column: span 2 / span 2;
      font-family: Inter;
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      color: #08f02d;
    }
    button {
      width: 100%;
      position: relative;
      border: none;
      background: transparent;
      outline: none;
      color: #fbda00;
      font-family: Inter;
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 12px 0;
      img {
        position: absolute;
        width: 100%;
      }
      span {
        position: absolute;
        z-index: 100;
        color: black;
      }
    }
  }
`;
