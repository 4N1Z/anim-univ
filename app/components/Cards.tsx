import React from "react";

interface UnivCards {
    key:number
    title : string,
    desc : string,
    courses : string,
    fee : string,
    image : string,
    color : string,
}

const Cards:React.FC<UnivCards> = ({
    title,desc,courses,fee,image,color
})=>{
    return (

        <div>
            <p>{title}</p>
        </div>

    )

}


export default Cards