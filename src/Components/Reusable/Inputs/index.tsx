import React, { useState} from 'react'

interface InputType{
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

const index: React.FC<InputType> = ({type, name, placeholder, option, classess, setPhone, phoneData, setSelect, selectOpt}) => {
      const [isOpen, setIsOpen] = useState(false);
      // const [selectedOption, setSelectedOption] = useState();     
      const options = !option ? [""] : option;
    
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const selectOption = (option: any) => {
        // console.log(option)
        setSelect && setSelect(option);
        setIsOpen(false);
      };


      // const [phoneNumber, setPhoneNumber] = useState("");

      const formatPhoneNumber = (value: string) => {
        // Remove all non-numeric characters except "+"
        const sanitizedValue = value.replace(/[^0-9+]/g, "");
    
        // If the user deletes back to "+", keep it as is
        if (sanitizedValue === "+") return "+";
    
        // Ensure the number starts with "+" if it's not empty
        if (!sanitizedValue.startsWith("+") && sanitizedValue.length > 0) {
          return `+${sanitizedValue}`;
        }
    
        // Apply formatting
        const match = sanitizedValue.match(
          /^(\+\d{1,3})?(\d{1,3})?(\d{1,3})?(\d{1,4})?(\d{1,2})?$/
        );
    
        if (!match) return sanitizedValue; // Return sanitized value if it doesn't match the format
    
        const [, countryCode, areaCode, firstPart, secondPart, extension] = match;
    
        let formatted = "";
        if (countryCode) formatted += `${countryCode} `;
        if (areaCode) formatted += `(${areaCode}) `;
        if (firstPart) formatted += `${firstPart}-`;
        if (secondPart) formatted += `${secondPart}`;
        if (extension) formatted += `-${extension}`;
    
        return formatted.trim();
      };
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        // Only format if it's not just the plus sign "+"
        if(rawValue.length <= 22){
          if (rawValue !== "+") {
            const formattedValue = formatPhoneNumber(rawValue);
            setPhone && setPhone(formattedValue.toString());
          } else {
            setPhone && setPhone(rawValue.toString());
          }
          // const regex = /[0-9]/g;
          // const match = rawValue.toString().match(regex)?.join('')
          // return match
        }
      };
    
      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
          const pop_value = phoneData.split('')
          const text_value = pop_value.filter((data: any,indx: number) => data && indx !== pop_value.length -1 )
          setPhone && setPhone(text_value.join(''))
        }
      };
    
  return (
    <>
    {
      type === 'text'  ? 
      <input type={type} className={`${classess}`} name={name} placeholder={placeholder} style={{color:"#000"}} />
      :
      type === 'number' ? 
      <input  className={`${classess}`} value={phoneData} name={name}  onChange={handleChange} onKeyDown={handleKeyDown} placeholder={placeholder} style={{color:"#000"}}/> 
      :
      type === 'textarea' ?
      <textarea className={`${classess}`} name={name} placeholder={placeholder} style={{color:"#000"}} />
      :
      <div className="relative w-full">
        <input
        type="text"
        value={selectOpt}
        name={name}
        placeholder={placeholder}
        className={classess}
        onClick={toggleDropdown}
        readOnly
        style={{color:"#000"}}
        />
        {isOpen && (
          <ul className="absolute left-0 w-full mt-2 bg-white text-[#000] border border-gray-300 rounded-md shadow-lg z-10 overflow-y-auto" style={{maxHeight: '20rem'}}>
              {options.map((option, index) => (
              <li
                  key={index}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => {selectOption(option)}}
              >
                  {option}
              </li>
              ))}
          </ul>
        )}
      </div>

    }
    </>
  )
}

export default index
