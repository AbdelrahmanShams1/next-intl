import { useState } from 'react';
import axios from 'axios';

type TStatus = "idle" | "checking" | "available" | "Unavailable" | "failed";

const useCheckEmailAvailability =  () => {
    const [isAvailable, setIsAvailable] = useState<TStatus>('idle');
    const [perEmail, setPerEmail] = useState<null|string>(null);

    const checkEmail = async (emailToCheck: string) => {
        setIsAvailable('checking');
        setPerEmail(emailToCheck);
       try {
         const res = await axios.get('https://jsonplaceholder.typicode.com/users?email=' + emailToCheck);
         if(res.data.length > 0) {
            setIsAvailable('Unavailable');
         } else {
            setIsAvailable('available');
            }
       } catch (error) {
            setIsAvailable('failed');
       }
        
    }

    const resetStatus = () => {
        setIsAvailable('idle');
        setPerEmail(null);
    }

    return { isAvailable, perEmail, checkEmail, resetStatus };
};

export default useCheckEmailAvailability;