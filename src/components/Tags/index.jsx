import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Tags = () => {

    const [tag, setTag] = useState([]);
    const data = useSelector((state) =>  state.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        //dispatch(getTags)
    },[]);

//    console.log(data)

    return(
        <div>
            {tag.length > 0 ? tag.map((msg,j)=>
                <i className="fa fa-tags" key={j}>{msg.name}</i>
            ): ('')}
            </div>
    )
}

export default Tags;

/*
axios
            .get('http://localhost:3000/api/tags')
            .then((data) => {
                setTag(data.data);
            })
            .catch(error => console.log(error))
*/