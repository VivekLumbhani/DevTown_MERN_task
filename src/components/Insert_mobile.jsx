    import React, { useState } from 'react';
    import "./formInput.css";

    function Insert_mobile() {
    const [mobile, setMobile] = useState({
        "namee": "",
        "price": 0,
        "typee": "",
        "processor": "",
        "memory": "",
        "OS": "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMobile(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
        const response = await fetch(`http://localhost:6969/mobiles`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(mobile)
        });
        
        alert("Inserted");
        console.log("Form Data:", mobile, "Response:", response);
        } catch (error) {
        alert("Something went wrong. Please try again.");
        console.error("Error:", error);
        }
    };

    return (
        <div className="card-container">
        <div className="card">
            <form onSubmit={handleSubmit}>
            <h1>Insert Mobile details</h1>

            <div className="formInput">
                <label>Name of Mobile</label>
                <input
                type='text'
                name='namee'
                onChange={handleChange}
                placeholder='Enter name'
                />
            </div>

            <div className="formInput">
                <label>Price</label>
                <input
                type='number'
                name='price'
                onChange={handleChange}
                placeholder='Enter price'
                />
            </div>

            <div className="formInput">
                <label>Type</label>
                <select
                name='typee'
                onChange={handleChange}
                >
                <option value=''>Select type</option>
                <option value='Android'>Android</option>
                <option value='iOS'>iOS</option>
                </select>
            </div>

            <div className="formInput">
                <label>Processor</label>
                <input
                type='text'
                name='processor'
                onChange={handleChange}
                placeholder='Enter processor'
                />
            </div>

            <div className="formInput">
                <label>Memory</label>
                <select
                name='memory'
                onChange={handleChange}
                value={mobile.memory}
                >
                <option value='32GB'>32GB</option>
                <option value='64GB'>64GB</option>
                <option value='128GB'>128GB</option>
                <option value='256GB'>256GB</option>
                <option value='512GB'>512GB</option>
                <option value='1TB'>1TB</option>
                </select>
            </div>

            <div className="formInput">
                <label>OS</label>
                <input
                type='text'
                name='OS'
                onChange={handleChange}
                placeholder='Enter OS'
                />
            </div>

            <button  type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
    }

    export default Insert_mobile;
