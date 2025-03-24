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

    // List of countries and their codes
    const countries = [
      { name: 'Afghanistan', code: '+93' },
      { name: 'Albania', code: '+355' },
      { name: 'Algeria', code: '+213' },
      { name: 'Andorra', code: '+376' },
      { name: 'Angola', code: '+244' },
      { name: 'Australia', code: '+61' },
      { name: 'Austria', code: '+43' },
      { name: 'Antigua and Barbuda', code: '+1268' },
    { name: 'Argentina', code: '+54' },
    { name: 'Armenia', code: '+374' },
    { name: 'Aruba', code: '+297' },
    { name: 'Australia', code: '+61' },
    { name: 'Austria', code: '+43' },
    { name: 'Azerbaijan', code: '+994' },
    { name: 'Bahamas', code: '+1242' },
    { name: 'Bahrain', code: '+973' },
    { name: 'Bangladesh', code: '+880' },
    { name: 'Barbados', code: '+1246' },
    { name: 'Belarus', code: '+375' },
    { name: 'Belgium', code: '+32' },
    { name: 'Belize', code: '+501' },
    { name: 'Benin', code: '+229' },
    { name: 'Bermuda', code: '+1441' },
    { name: 'Bhutan', code: '+975' },
    { name: 'Bolivia', code: '+591' },
    { name: 'Bonaire, Sint Eustatius and Saba', code: '+599' },
    { name: 'Bosnia and Herzegovina', code: '+387' },
    { name: 'Botswana', code: '+267' },
    { name: 'Bouvet Island', code: '+55' },
    { name: 'Brazil', code: '+55' },
    { name: 'British Indian Ocean Territory', code: '+246' },
    { name: 'Brunei Darussalam', code: '+673' },
    { name: 'Bulgaria', code: '+359' },
    { name: 'Burkina Faso', code: '+226' },
    { name: 'Burundi', code: '+257' },
    { name: 'Cambodia', code: '+855' },
    { name: 'Cameroon', code: '+237' },
    { name: 'Canada', code: '+1' },
    { name: 'Cape Verde', code: '+238' },
    { name: 'Cayman Islands', code: '+1345' },
    { name: 'Central African Republic', code: '+236' },
    { name: 'Chad', code: '+235' },
    { name: 'Chile', code: '+56' },
    { name: 'China', code: '+86' },
    { name: 'Christmas Island', code: '+61' },
    { name: 'Cocos (Keeling) Islands', code: '+672' },
    { name: 'Colombia', code: '+57' },
    { name: 'Comoros', code: '+269' },
    { name: 'Congo', code: '+242' },
    { name: 'Congo, Democratic Republic of the Congo', code: '+242' },
    { name: 'Cook Islands', code: '+682' },
    { name: 'Costa Rica', code: '+506' },
    { name: "Cote D'Ivoire", code: '+225' },
    { name: 'Croatia', code: '+385' },
    { name: 'Cuba', code: '+53' },
    { name: 'Curacao', code: '+599' },
    { name: 'Cyprus', code: '+357' },
    { name: 'Czech Republic', code: '+420' },
    { name: 'Denmark', code: '+45' },
    { name: 'Djibouti', code: '+253' },
    { name: 'Dominica', code: '+1767' },
    { name: 'Dominican Republic', code: '+1809' },
    { name: 'Ecuador', code: '+593' },
    { name: 'Egypt', code: '+20' },
    { name: 'El Salvador', code: '+503' },
    { name: 'Equatorial Guinea', code: '+240' },
    { name: 'Eritrea', code: '+291' },
    { name: 'Estonia', code: '+372' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Falkland Islands (Malvinas)', code: '+500' },
    { name: 'Faroe Islands', code: '+298' },
    { name: 'Fiji', code: '+679' },
    { name: 'Finland', code: '+358' },
    { name: 'France', code: '+33' },
    { name: 'French Guiana', code: '+594' },
    { name: 'French Polynesia', code: '+689' },
    { name: 'French Southern Territories', code: '+262' },
    { name: 'Gabon', code: '+241' },
    { name: 'Gambia', code: '+220' },
    { name: 'Georgia', code: '+995' },
    { name: 'Germany', code: '+49' },
    { name: 'Ghana', code: '+233' },
    { name: 'Gibraltar', code: '+350' },
    { name: 'Greece', code: '+30' },
    { name: 'Greenland', code: '+299' },
    { name: 'Grenada', code: '+1473' },
    { name: 'Guadeloupe', code: '+590' },
    { name: 'Guam', code: '+1671' },
    { name: 'Guatemala', code: '+502' },
    { name: 'Guernsey', code: '+44' },
    { name: 'Guinea', code: '+224' },
    { name: 'Guinea-Bissau', code: '+245' },
    { name: 'Guyana', code: '+592' },
    { name: 'Haiti', code: '+509' },
    { name: 'Heard Island and McDonald Islands', code: '+0' },
    { name: 'Holy See (Vatican City State)', code: '+39' },
    { name: 'Honduras', code: '+504' },
    { name: 'Hong Kong', code: '+852' },
    { name: 'Hungary', code: '+36' },
    { name: 'Iceland', code: '+354' },
    { name: 'India', code: '+91' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Iran, Islamic Republic of', code: '+98' },
    { name: 'Iraq', code: '+964' },
    { name: 'Ireland', code: '+353' },
    { name: 'Isle of Man', code: '+44' },
    { name: 'Israel', code: '+972' },
    { name: 'Italy', code: '+39' },
    { name: 'Jamaica', code: '+1876' },
    { name: 'Japan', code: '+81' },
    { name: 'Jersey', code: '+44' },
    { name: 'Jordan', code: '+962' },
    { name: 'Kazakhstan', code: '+7' },
    { name: 'Kenya', code: '+254' },
    { name: 'Kiribati', code: '+686' },
    { name: 'Korea, Democratic People\'s Republic of', code: '+850' },
    { name: 'Korea, Republic of', code: '+82' },
    { name: 'Kosovo', code: '+383' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Kyrgyzstan', code: '+996' },
    { name: 'Lao People\'s Democratic Republic', code: '+856' },
    { name: 'Latvia', code: '+371' },
    { name: 'Lebanon', code: '+961' },
    { name: 'Lesotho', code: '+266' },
    { name: 'Liberia', code: '+231' },
    { name: 'Libyan Arab Jamahiriya', code: '+218' },
    { name: 'Liechtenstein', code: '+423' },
    { name: 'Lithuania', code: '+370' },
    { name: 'Luxembourg', code: '+352' },
    { name: 'Macao', code: '+853' },
    { name: 'Macedonia, the Former Yugoslav Republic of', code: '+389' },
    { name: 'Madagascar', code: '+261' },
    { name: 'Malawi', code: '+265' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Maldives', code: '+960' },
    { name: 'Mali', code: '+223' },
    { name: 'Malta', code: '+356' },
    { name: 'Marshall Islands', code: '+692' },
    { name: 'Martinique', code: '+596' },
    { name: 'Mauritania', code: '+222' },
    { name: 'Mauritius', code: '+230' },
    { name: 'Mayotte', code: '+262' },
    { name: 'Mexico', code: '+52' },
    { name: 'Micronesia, Federated States of', code: '+691' },
    { name: 'Moldova, Republic of', code: '+373' },
    { name: 'Monaco', code: '+377' },
    { name: 'Mongolia', code: '+976' },
    { name: 'Montenegro', code: '+382' },
    { name: 'Montserrat', code: '+1664' },
    { name: 'Morocco', code: '+212' },
    { name: 'Mozambique', code: '+258' },
    { name: 'Myanmar', code: '+95' },
    { name: 'Namibia', code: '+264' },
    { name: 'Nauru', code: '+674' },
    { name: 'Nepal', code: '+977' },
    { name: 'Netherlands', code: '+31' },
    { name: 'Netherlands Antilles', code: '+599' },
    { name: 'New Caledonia', code: '+687' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Nicaragua', code: '+505' },
    { name: 'Niger', code: '+227' },
    { name: 'Nigeria', code: '+234' },
    { name: 'Niue', code: '+683' },
    { name: 'Norfolk Island', code: '+672' },

    ];

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const selectCountry = (country: { name: string; code: string}) => {
      setSelectedCountry(country);
      setPhoneValue(country.code); // Set the country code in the phone number input
      setIsOpen(false);
    };

    const selectOption = (option: any) => {
      // console.log(option)
      setSelect && setSelect(option);
      setIsOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      if (rawValue.length <= 22) {
        setPhoneValue(rawValue);
        setPhone && setPhone(rawValue);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        const pop_value = phoneValue.split('');
        const text_value = pop_value.filter((data, indx) => data && indx !== pop_value.length - 1);
        setPhoneValue(text_value.join(''));
        setPhone && setPhone(text_value.join(''));
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
            className={`${classess}`}
            name={name}
            placeholder={placeholder}
            style={{ color: '#000' }}
            required
          />
        ) : type === 'number' ? (
          <div className="relative w-full">
            {/* Country Code Select */}
            <div
              className="relative w-full"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {/* Country Code Input */}
              <input
                type="text"
                value={selectedCountry.code}
                name={name}
                placeholder={placeholder}
                className={`${classess} w-10 pr-1`} // Added padding-right for the arrow
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
            </div>

            {/* Country Dropdown */}
            {isOpen && (
              <ul
                className="absolute left-0 w-full mt-2 bg-white text-[#000] border border-gray-300 rounded-md shadow-lg z-10 overflow-y-auto"
                style={{ maxHeight: '15rem', maxWidth: '100%' }}
              >
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
