import React, {useState} from 'react';

function AddItemForm( {onAddNewItem} ) {

    const [newItem, setNewItem] = useState({
        description: '',
        location: '',
        image: ''
    })

    function handleChange(e) {
        setNewItem({...newItem,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(newItem)
        onAddNewItem(newItem)
    }

    return (
        <form style={{padding: 10}} onSubmit={handleSubmit}
        >
            <label>
                Add Item:
                <input type="text" name="description" placeholder="description"
                onChange={handleChange}
                />
                <input type="text" name="location" placeholder="location"
                onChange={handleChange}
                />
                <input type="text" name="image" placeholder="image"
                onChange={handleChange}
                />

            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddItemForm;