import React, { useState } from 'react';

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
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'USA' });
  const [searchQuery, setSearchQuery] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const countries = [
    { name: 'Afghanistan', code: '+93' },
    { name: 'Albania', code: '+355' },
    { name: 'Algeria', code: '+213' },
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'India', code: '+91' },
    { name: 'Australia', code: '+61' },
    { name: 'Canada', code: '+1' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCountry = (country: { name: string; code: string }) => {
    setSelectedCountry(country);
    setPhoneValue(country.code);
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    if (rawValue.length <= 22) {
      setPhoneValue(rawValue);
      setPhone && setPhone(rawValue);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {type === 'text' ? (
        <input
          type={type}
          className={classess}
          name={name}
          placeholder={placeholder}
          style={{ color: '#000' }}
          required
        />
      ) : type === 'number' ? (
        <div className="relative w-full">
          <div className="relative w-full" style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={selectedCountry.code}
              name={name}
              placeholder={placeholder}
              className={`${classess} w-10 pr-1`}
              onClick={toggleDropdown}
              readOnly
              style={{ color: '#000', padding: '6px .2rem', cursor: 'pointer' }}
            />
            <input
              className={classess}
              value={phoneValue}
              name={name}
              onChange={handleChange}
              placeholder="Phone Number"
              style={{ color: '#000', padding: '6px .2rem' }}
              required
            />
          </div>
          {isOpen && (
            <ul className="absolute left-0 w-full mt-2 bg-white text-[#000] border border-gray-300 rounded-md shadow-lg z-10 overflow-y-auto" style={{ maxHeight: '15rem' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 w-full border-b-2 border-gray-300"
                placeholder="Search Country Name"
              />
              <div className="overflow-y-auto" style={{ maxHeight: '10rem', paddingRight: '10px' }}>
                {filteredCountries.map((country) => (
                  <li
                    key={country.code}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => selectCountry(country)}
                  >
                    {country.name} {country.code}
                  </li>
                ))}
              </div>
            </ul>
          )}
        </div>
      ) : type === 'textarea' ? (
        <textarea
          className={classess}
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
            <ul className="absolute left-0 w-full mt-2 bg-white text-[#000] border border-gray-300 rounded-md shadow-lg z-10 overflow-y-auto" style={{ maxHeight: '20rem' }}>
              {option?.map((option, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => setSelect && setSelect(option)}
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
