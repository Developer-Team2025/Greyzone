  import React, { useEffect, useState } from 'react';

  interface InputType {
    type: string;
    name: string;
    placeholder: string;
    option?: string[];
    classess: string;
    setPhone?: (value: React.SetStateAction<string>) => void;
    phoneData?: any;
    setSelect?: (value: React.SetStateAction<any>) => void;
    selectOpt?: string;
  }

  const index: React.FC<InputType> = ({
    type,
    name,
    placeholder,
    option,
    classess,
    setPhone,
    phoneData,
    setSelect,
    selectOpt,
  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: '+27', name: 'South Africa' });
  const [searchQuery, setSearchQuery] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  const selectOption = (option: any) => {
    // console.log(option)
    setSelect && setSelect(option);
    setIsOpen(false);
  };

  // List of countries
  const countries = [
    { name: 'Afghanistan', code: '+93' },
    { name: 'South Africa', code: '+27' },
    { name: 'Argentina', code: '+54' },
    // Other countries...
  ];

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Select country from the list
  const selectCountry = (country: { name: string; code: string }) => {
    setSelectedCountry(country);
    setPhoneValue(country.code); // Set the country code in the phone number input
    setIsOpen(false);
  };

  // Handle phone number change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    if (rawValue.length <= 22) {
      setPhoneValue(rawValue);
      setPhone && setPhone(rawValue);
    }
  };

  // Handle backspace in phone number input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const pop_value = phoneValue.split('');
      const text_value = pop_value.filter((data, indx) => data && indx !== pop_value.length - 1);
      setPhoneValue(text_value.join(''));
      setPhone && setPhone(text_value.join(''));
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Debounce search query to optimize filtering
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // Adjust delay as necessary (500ms in this case)

    return () => clearTimeout(timer); // Clean up timeout on change
  }, [searchQuery]);

  // Filter countries based on the debounced search query
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <>
      {type === 'text' ? (
        <input
          type={type}
          className={`${classess}`}
          name={name}
          placeholder={placeholder}
          style={{ color: '#000' }}
          required
        />
      ) : type === 'number' ? (
        <div className="relative w-full"
        style={{ display: 'flex', alignItems: 'center' }}
        >
       
          {/* Country Code Input */}
          <input
            type="text"
            value={selectedCountry.code}
            name={name}
            placeholder={placeholder}
            className={`${classess} w-11 pr-1`}
            onClick={toggleDropdown}
            readOnly
            style={{ color: '#000', padding: '6px .2rem', cursor: 'pointer' }}
          />

          {/* Phone Number Input */}
          <input
            className={classess}
            value={phoneValue}
            name={name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Phone Number"
            style={{ color: '#000', padding: '6px .2rem' }}
            required
          />

          {/* Country Dropdown */}
          {isOpen && (
            <ul
              className="absolute left-0 w-full mt-2 bg-white text-[#000] border border-gray-300 rounded-md shadow-lg z-10 overflow-y-auto"
              style={{ maxHeight: '15rem', maxWidth: '100%' }}
            >
              {/* Search Input */}
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 w-full border-b-2 border-gray-300"
                placeholder="Search Country Name"
              />

              <div
                className="overflow-y-auto"
                style={{ maxHeight: '10rem', paddingRight: '10px' }}
              >
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <li
                      key={country.code}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() => selectCountry(country)}
                    >
                      {country.name} {country.code}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">No countries found</li>
                )}
              </div>
            </ul>
          )}
        </div>
      ) : type === 'textarea' ? (
        <textarea
          className={`${classess}`}
          name={name}
          placeholder={placeholder}
          style={{ color: '#000' }}
          required
        />
      ) : (
        <div className="relative w-full">
          <input
            type="text"
            value={selectOpt}
            name={name}
            placeholder={placeholder}
            className={classess}
            onClick={toggleDropdown}
            readOnly
            style={{ color: '#000' }}
          />
            {isOpen && (
              <ul
                className="absolute left-0 w-full mt-2 bg-white text-[#000] border border-gray-300 rounded-md shadow-lg z-10 overflow-y-auto"
                style={{ maxHeight: '20rem' }}
              >
                {option?.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => selectOption(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </>
    );
  };

  export default index;
