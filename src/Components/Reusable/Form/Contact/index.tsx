
import styles from './style.module.scss'
import Input from '../../Inputs/index'
import Button from '../../Buttons/index'
// import map from '../map.json'
import {formApi} from '../../../api/getValue'
import { useCallback, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import {debounce} from '../../Addition/index'
const index = () => {
  const reF = useRef<HTMLInputElement | null>(null)
  const [load, setload] = useState(true)    
  const [phone,setphone] = useState('')
  const [selectOption, setSelectOption] = useState('');  
 
  const UseCallback = useCallback(debounce((form_value:any, keys: any, event: any) =>{
      formApi('google-api-create-row', form_value).then(res => {
        console.log('res', res)
        if(res){
          setload(true)
          if(res.response){
            toast.success(res.response)
            keys.map((data: any) => event[`${data}`].value = '');
            setphone('');  
            setSelectOption('')
          }else{
            toast.error(res.errors)
          }
        }else{
          toast.error('Something Went Wrong')
        }
      })
  }, 300),[])
  
  const form = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = new FormData(event.currentTarget)
      if(target){
          const object = Object.fromEntries(target.entries())
          const keys = Object.keys(object)
          // console.log(keys.map(data => event.currentTarget[`${data}`].value = ''))
          setload(false)
          const form_value: any = {...object,   "country": "USA",  "accept_privacy": reF.current?.checked ? 1 : 0}
          UseCallback(form_value, keys, event.currentTarget)
      }
  }
  useEffect(() => {
    console.log("Parent re-rendered! selectOption:", selectOption);
}, [selectOption, load]);
  const optional = [
    "Fraud & Dispute Support",
    "Other inquiries",
    // "Partnership",
    // "Supplier / Service Provider",
    // "Candidate / HR Related",
    // "Corporate Services"
  ]
  return (
    <div>
        <form onSubmit={form} className={styles.consult_form}>
            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Full Name' name="fullname" type="text"  />
            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Email Address' name="email" type="text"  />
            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Inquiry Type' name="inquiry_type" type="" setSelect={setSelectOption} selectOpt={selectOption} option={optional} />
            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Phone Number' name="phone" type="number" setPhone={setphone} phoneData={phone}  />
            {/* <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Country' name="country" type="" option={map} /> */}
            <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none h-32' placeholder='How we can help you? Please provide as much details as possible ' name="description" type="textarea"  />
            <div className="p-4"></div>
            <div className='flex gap-[.5rem] items-center'>
              <input type="checkbox" id='checkbox' name='checkbox' ref={reF}/>
              <span className={styles.privacy}>I accept Privacy Policy</span>
            </div>

            <Button element='input' text={load ? 'Submit': '...loading'}/>
        </form>
    </div>
  )
}

export default index
