import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Tags = () => {

    const [tag, setTag] = useState([]);

    useEffect(()=>{
        axios
            .get('http://localhost:3000/api/tags')
            .then((data) => {
                setTag(data.data);
            })
            .catch(error => console.log(error))
    },[]);

    console.log(tag)

    return(
        <div>
            {tag.length > 0 ? tag.map((msg,j)=>
                <i className="fa fa-tags" key={j}>{msg.name}</i>
            ): ('')}
            </div>
    )
}

export default Tags;