import React, {useState, useEffect} from "react"

function BodyList ({selection}) {
    let [data, setData] = useState({})

    let type = selection

    useEffect(() => {
        fetch(`Item.json`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(`Error fetching data:`, error))
    }, [])

    //add button function
    //edit function
    //delete function

    return (
        <div id="body-list-container">
            <h1 id="list-category-name">Category</h1>
            <div>
                <ul id="items-list">
                    {data[type] && data[type].map(item => <li key={item.id}>{item.name} <i className="fa-solid fa-pencil"></i><i className="fa-solid fa-trash"></i></li>)}
                </ul>
                <input id="new-item-input" type="text" placeholder="Enter a new item"/>
                <button id="new-item-submit" type="submit"><i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )

}
export default BodyList