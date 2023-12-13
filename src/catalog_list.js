import React, { useState, useEffect, useCallback } from "react";
import "./css/catalog_list.css";
import BankCard from "./catalog_card";
import NextButton from "./catalog_button_next";
import BackButton from "./catalog_button_back";
import getKuns, {
  getAges,
  getPrices,
  getFilteredByAge,
  getFilteredByPrice,
  searchKuns
} from "./api";
import Option from "./catalog_filter_option";
import SearchInput from "./catalog_search";
import ClearButton from "./catalog_button_clear";
import ApplyButton from "./catalog_button_apply";

const BankList = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ages, setAges] = useState([]);
    const [prices, setPrices] = useState([]);
    const [selectedAgeFilter, setSelectedAgeFilter] = useState("All");
    const [selectedPriceFilter, setSelectedPriceFilter] = useState("All");
    const [activeFilter, setActiveFilter] = useState("None");
    const [searchValue, setSearchValue] = useState("");
    const itemsPerPage = 4;
    const isFirstPage = currentPage === 1;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const displayItems = items.slice(startIdx, endIdx);
  
    const allItems = useCallback(() => {
        getKuns().then((data) => {
        setItems(data);
      });
    }, []);
  
    useEffect(() => {
      getAges().then((data) => {
        setAges(data);
      });
  
      getPrices().then((data) => {
        setPrices(data);
      });
    }, []);
  
    useEffect(() => {
      if (activeFilter !== "None") {
        if (activeFilter === "Age") {
          if (selectedAgeFilter === "All") {
            allItems();
          } else {
            setSelectedPriceFilter("All");
            getFilteredByAge(selectedAgeFilter).then((data) => {
              setItems(data);
            });
          }
        } else if (activeFilter === "Price") {
          if (selectedPriceFilter === "All") {
            allItems();
          } else {
            setSelectedAgeFilter("All");
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
      setSelectedAgeFilter("All");
      setSelectedPriceFilter("All");
      setSearchValue("");
      allItems();
    }
  
    function apply() {
        searchKuns(searchValue).then((data) => {
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
              {Option("All")}
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
              {Option("All")}
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