import React from "react";

import "./Detail.scss";

import ProductImg from "../ProductImg/ProductImg";
import ChooseSize from "../ChooseSize/ChooseSize";
import AddPack from "../AddPack/AddPack";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductInstallment from "../ProductInstallment/ProductInstallment";
import BackToCatalog from "../BackToCatalog/BackToCatalog";

import imgDefault from "../../assets/images/img-default.svg";

const Detail = () => {
  return (
    <>
      <div className="detail">
        <ProductImg src={imgDefault} imgDesciption="Vestido Transpasse Bow" />
        <div className="detail__info">
          <div className="detail__box">
            <ProductName text="Vestido Transpasse Bow" size="large" />
            <div className="detail__prices">
              <ProductPrice price="199,90" size="medium" />
              <ProductInstallment text="3 x 68,90" />
            </div>
            <ChooseSize />
            <AddPack />
          </div>
          <div className="detail__box">
            <BackToCatalog />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
