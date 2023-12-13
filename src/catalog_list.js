import React, { useState, useEffect, useCallback } from "react";
import "./css/catalog_list.css";
import BankCard from "./bank_card";
import NextButton from "./next_btn";
import BackButton from "./back_btn";
import getWaifus, {
  getAges,
  getPrices,
  getFilteredByAge,
  getFilteredByPrice,
  searchWaifus,
} from "../../../api";
import Option from "./filter_option";
import SearchInput from "./search";
import ClearButton from "./clear_btn";
import ApplyButton from "./apply_btn";

const BankList = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ages, setAges] = useState([]);
  const [prices, setPrices] = useState([]);
  const [selectedAgeFilter, setSelectedAgeFilter] = useState("None");
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("None");
  const [activeFilter, setActiveFilter] = useState("None");
  const [searchValue, setSearchValue] = useState("");
  const itemsPerPage = 4;
  const isFirstPage = currentPage === 1;
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayItems = items.slice(startIdx, endIdx);

  const allItems = useCallback(() => {
    getWaifus().then((data) => {
      setItems(data);
    });
  }, []);

  useEffect(() => {
    getAges().then((data) => {
      setAges(data["ages"]);
    });

    getPrices().then((data) => {
      setPrices(data["prices"]);
    });
  }, []);

  useEffect(() => {
    if (activeFilter !== "None") {
      if (activeFilter === "Age") {
        if (selectedAgeFilter === "None") {
          allItems();
        } else {
          getFilteredByAge(selectedAgeFilter).then((data) => {
            setSelectedPriceFilter("None");
            setItems(data);
          });
        }
      } else if (activeFilter === "Price") {
        if (selectedPriceFilter === "None") {
          allItems();
        } else {
          setSelectedAgeFilter("None");
          getFilteredByPrice(selectedPriceFilter).then((data) => {
            setItems(data);
          });
        }
      }
    }
    setCurrentPage(1);
  }, [activeFilter, selectedPriceFilter, selectedAgeFilter, allItems]);

  function handleClickNext() {
    if (currentPage * itemsPerPage < items.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleClickBack() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function clear() {
    setCurrentPage(1);
    setSelectedAgeFilter("None");
    setSelectedPriceFilter("None");
    setSearchValue("");
    allItems();
  }

  function apply() {
    searchWaifus(searchValue).then((data) => {
      setItems(data);
    });
    setCurrentPage(1);
  }

  return (
    <div className="second_section">
      <div className="filters_div">
        <div className="filters">
          Age Filter:
          <select
            className="filter"
            value={selectedAgeFilter}
            onChange={(e) => {
              setSelectedAgeFilter(e.target.value);
              setActiveFilter("Age");
            }}
          >
            {Option("None")}
            {ages.map((item) => Option(item))}
          </select>
          Price Filter:
          <select
            className="filter"
            value={selectedPriceFilter}
            onChange={(e) => {
              setSelectedPriceFilter(e.target.value);
              setActiveFilter("Price");
            }}
          >
            {Option("None")}
            {prices.map((item) => Option(item))}
          </select>
        </div>
        <div className="search_div">
          {SearchInput(setSearchValue, searchValue)}
          {ApplyButton(apply)}
        </div>
        {ClearButton(clear)}
      </div>
      <div className="bank_list2">
        {items.length > 0 ? (
          displayItems.map((item) => BankCard(item.id, item))
        ) : (
          <div className="loader">Loading...</div>
        )}
        {!isFirstPage && <BackButton func={handleClickBack} />}
        {currentPage * itemsPerPage < items.length && (
          <NextButton func={handleClickNext} />
        )}
      </div>
    </div>
  );
};

export default BankList;