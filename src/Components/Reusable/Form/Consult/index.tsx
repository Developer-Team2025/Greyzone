
import classNames from 'classnames'
import styles from './style.module.scss'
import Input from '../../Inputs/index'
import Button from '../../Buttons/index'
import React, { useCallback, useEffect, useState } from 'react'
import {formApi} from '../../../api/getValue'
import toast from 'react-hot-toast';
import {debounce} from '../../Addition/index'
const index = () => {
    const today = new Date()
    const [phone,setphone] = useState('')
    const [load, setload] = useState(true)
    const [selectOption, setSelectOption] = useState('');     
    useEffect(() => {
        console.log("Parent re-rendered! selectOption:", selectOption);
    }, [selectOption]);
    const UseCallback = useCallback(debounce((form_value:any) =>{
        formApi('google-api-create-row', form_value).then(res => {
            console.log(res, 'res')
            if(res){
                res.response ? toast.success(res.response) : toast.error(res.errors),setTimeout(() =>{res.response && setload(false)},300 )                
            }else{
                console.log('err')
            }

        
        })
        
    }, 300),[])
    
    const form = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const target = new FormData(event.currentTarget)

        if(load){
            if(target){
                setload(false)
                const object = Object.fromEntries(target.entries())
                const keys = Object.keys(object)
                // console.log(keys.map(data => event.currentTarget[`${data}`].value = ''))
                load && keys.map(data => event.currentTarget[`${data}`].value = '') && setphone(''), setSelectOption('')
                const form_value: any = {...object,   "country": "USA",  "accept_privacy": 1}
                UseCallback(form_value)
            }
        }
    }
    const optional = [
        "Fraud & Dispute Support",
        "Other inquiries",
        // "Partnership",
        // "Supplier / Service Provider",
        // "Candidate / HR Related",
        // "Corporate Services"
    ]
    return (
        <>
            <section className={styles.banner_consult}>
                <div className={styles.container}>
                    <div className={styles.consult_wrapper}>
                        <div className={classNames(`${styles.consult_col} wow  animate__fadeInLeft animate__animated`)}>
                            <span className={styles.consult__subtitle}>Still have questions?</span>
                            <h2 className={styles.consult__title}>Get a free consultation</h2>
                            <div>
                                <form onSubmit={form} className={styles.consult_form}>
                                    <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Full Name' name="fullname" type="text"  />
                                    <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Email Address' name="email" type="text"  />
                                    <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Inquiry Type' name="inquiry_type" type="" setSelect={setSelectOption} selectOpt={selectOption} option={optional} />
                                    <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Phone Number' name="phone" type="number" setPhone={setphone} phoneData={phone} />
                                    {/* <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' placeholder='Country' name="country" type="" option={map} /> */}
                                    <Input classess='w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none h-32' placeholder='How we can help you? Please provide as much details as possible ' name="description" type="textarea"  />
                                    
                                    <div className="p-4"></div>
                                    <span className={styles.privacy}>I accept Privacy Policy</span>
                                    <Button element='input' text={load ? 'Submit': '...Loading'}/>
                                </form>
                            </div>
                        </div>
                        <div className={classNames(`${styles.consult_col}  wow  animate__fadeInRight animate__animated`)}>
                            <span className={styles.consult__subtitle}>REVIEWS</span>
                            <h2 className={styles.consult__title}>We are recommended</h2>
                            <div className='text-white border-b-2 border-white leading-9'>
                                <p >Alexandra</p>
                                <p>{today.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
                                <p className='pb-6'>Excellent!!!</p>
                            </div>
                            <div className='text-white border-b-2 border-white leading-9 pt-4'>
                                <p >Ahmed</p>
                                <p>{today.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
                                <p className='pb-6'>Thank you Jennifer for your help, it was really helpful</p>
                            </div>
                            <div className={classNames(styles.extra, 'text-white ')}>
                                <div className='flex gap-4'>
                                <span>Give feedback</span><i className={styles.plus_icon}></i>
                                </div>
                                <div className='p-2 border-white border-2' onClick={UseCallback}>
                                    <span>TRUSTPILOT</span> <i className={styles.arrow_right_icon}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>

    )
}

export default index
