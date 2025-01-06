import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        const URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_y5gu5xbGKjVSmSKrh7BNWJJKHecyIzCtSw3PlwDZ&base_currency=${fromCurr.value}&currencies=${toCurr.value}`
        fetch(URL)
            .then((res) => res.json()) // Parse the JSON response
            .then((res) => setData(res.data[toCurr.value].value)) // Access the INR value / INR is just an example
        console.log(data); // Output only the INR value / INR is just an example
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;

