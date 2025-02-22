import styles from "./style.module.scss";
import Input from "../../Inputs/index";
import Button from "../../Buttons/index";
import HttpService from "../../../api/HttpService";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { debounce } from "../../Addition/index";
import { ThemeContext } from "../../../../App";
const index = () => {
  const api = HttpService;

  const reF = useRef<HTMLInputElement | null>(null);
  const [load, setload] = useState(true);
  const [phone, setphone] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const themeContext = useContext(ThemeContext);

  useEffect(() => { }, [selectOption, load]);

  const UseCallback = useCallback(
    debounce((form_value: any, keys: any, event: any) => {
      api
        .post("google-api-create-row", form_value)
        .then((res) => {
          setload(true);
          if (res) {
            if (res.response) {
              toast.success(res.response);
              keys.forEach((data: any) => (event[`${data}`].value = ""));
              reF.current && (reF.current.checked = false);
              themeContext?.toggleTheme("Congrats");
              themeContext?.Animate(true);
              setphone("");
              setSelectOption("");
            } else {
              toast.error(res.errors);
            }
          } else {
            toast.error("Something Went Wrong");
          }
        })
        .catch((error) => {
          setload(true);
          toast.error("Error submitting form: " + error.message);
        });
    }, 300),
    []
  );

  const form = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = new FormData(event.currentTarget);
    if (target) {
      const object = Object.fromEntries(target.entries());
      const keys = Object.keys(object);
      setload(false);
      const form_value: any = {
        ...object,
        country: "USA",
        accept_privacy: reF.current?.checked ? 1 : 0,
      };
      UseCallback(form_value, keys, event.currentTarget);
    }
  };
  const optional = [
    "Fraud & Dispute Support",
    "Other inquiries",
    // "Partnership",
    // "Supplier / Service Provider",
    // "Candidate / HR Related",
    // "Corporate Services"
  ];
  return (
    <>
      <form onSubmit={form} className={styles.consult_form}>
        <Input
          classess="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Full Name"
          name="fullname"
          type="text"
        />
        <Input
          classess="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Email Address"
          name="email"
          type="text"
        />
        <Input
          classess="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Inquiry Type"
          name="inquiry_type"
          type=""
          setSelect={setSelectOption}
          selectOpt={selectOption}
          option={optional}
        />
        <Input
          classess="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Phone Number"
          name="phone"
          type="number"
          setPhone={setphone}
          phoneData={phone}
        />
        <Input
          classess="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none h-32"
          placeholder="How we can help you? Please provide as much details as possible "
          name="description"
          type="textarea"
        />
        <div className="p-4"></div>
        <div className="flex gap-[.5rem] items-center">
          <input type="checkbox" id="checkbox" name="checkbox" ref={reF} />
          <span
            className={styles.privacy}
            onClick={() => {
              window.location.pathname = "/privacy-policy";
            }}
          >
            I accept Privacy Policy
          </span>
        </div>
        <Button element="input" text={load ? "Submit" : "...loading"} />
      </form>
    </>
  );
};

export default index;
