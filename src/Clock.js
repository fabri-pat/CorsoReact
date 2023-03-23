import { useEffect, useState } from "react";


const Clock = ({timezone, country}) => {
    const t = Date.now()+3600*timezone*3600;
    const dateInit = new Date(t);

    const [date, setDate] = useState(dateInit);

    useEffect(() => {
      const interval = setInterval(() => {
        const time = date.getTime() + 1000
        setDate(new Date(time));
      }, 1000)
    
      return () => {
        clearInterval(interval);
      }
    }, [date])
    

    return (
        <div>
            <h3>
                In {country} è il {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </h3>
        </div>
    )
}
export default Clock;