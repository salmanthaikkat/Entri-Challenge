import React, { useState } from "react";
import SelectChip from "../chip";
import CustomInput from "../customInput";
import { CHIP_SELECT } from "./constants";

const Header = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [category, setCategory] = useState<string>("general");

  const handleSearchInputChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleChipClick = (key: any) => {
    setCategory(key);
  };

  return (
    <React.Fragment>
      <div className="header__title">Latest News</div>
      <div className="header__sub-title">Your insights to keep you afloat</div>
      <div className="header__tool">
        <div className="header__tool-search">
          <CustomInput
            label={"Search"}
            onChange={handleSearchInputChange}
            value={searchText}
          />
        </div>
        <div className="header__tool-chip">
          {CHIP_SELECT.map((chip) => (
            <SelectChip
              key={chip.id}
              label={chip.label}
              isSelected={category === chip.key}
              onClick={() => handleChipClick(chip.key)}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
