import React from "react";
import classnames from "classnames";

interface Props {
  label: string;
  isSelected: boolean;
  onClick: (e: any) => void;
}

const SelectChip: React.FC<Props> = ({ label, isSelected, onClick }) => {
  return (
    <div
      className={classnames({
        "select-chip": true,
        "select-chip--selected": isSelected,
      })}
      onClick={onClick}
    >
      <span className="select-chip__label">{label}</span>
    </div>
  );
};

export default SelectChip;
