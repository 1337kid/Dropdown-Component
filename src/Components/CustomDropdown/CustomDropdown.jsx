import './CustomDropdown.scss';
import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import PropTypes from 'prop-types';

const CustomDropdown = ({
    items,
    defaultSelected,
    showCheck,
    showSearchBar,
    openUpwards,
  }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchResults, setSearchResults] = useState(items);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    if (defaultSelected) {
        setSelectedItem(items[defaultSelected-1]);
    }
  },[defaultSelected, items])

  useEffect(() => {
    const newItems = items.filter((item) =>
        item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(newItems);
  },[searchTerm, items])

  const handleSelectItem = (item) => {
    if (item.disabled) return;
    setSelectedItem(item);
    setIsOpen(false);
  }

  const DropDownMenu = () => {
    return (isOpen && 
        <div className="dropdown__menu">
          {searchResults.map((item, index) => (
            <div 
              key={index}
              onClick={() => handleSelectItem(item)}
              className={
                item.disabled && 'disabled'
              }
            >
              {showCheck && 
                <span className='check'>
                  { selectedItem.label == item.label && <FaCheck /> }
                </span>
              }
              {item.icon && 
                <span className='icon'>
                  <item.icon />
                </span>
              }
              {item.label}
            </div>  
          ))}
        </div>
    )}

  return (
    <div className="dropdown">
        {openUpwards && <DropDownMenu />}
      <div
        className='dropdown__selected'
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        {isOpen && showSearchBar 
          ? (
            <input 
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search'
              onClick={(e) => e.stopPropagation()} 
            />
          )
          : selectedItem ? (
            <span>
              {selectedItem.icon && 
                <span className='icon'>
                  <selectedItem.icon />
                </span>
              }
              {selectedItem.label}
            </span>) : 'No Items Selected'
        }
        {isOpen 
          ? <IoIosArrowUp/>
          : <IoIosArrowDown/>
        }
      </div>
      {!openUpwards && <DropDownMenu />}
    </div>
  )
}

CustomDropdown.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.any,
        disabled: PropTypes.bool,
      })
    ).isRequired,
    defaultSelected: PropTypes.number,
    showCheck: PropTypes.bool,
    showSearchBar: PropTypes.bool,
    openUpwards: PropTypes.bool,
};
  

export default CustomDropdown;