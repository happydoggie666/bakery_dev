import "./App.css";
import React, {useState} from 'react';
import bakeryData from "./assets/bakery-data.json";
import Batem from "./components/BakeryItem";

import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';



/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
});

/* ############################################################## */

function App() {
    // TODO: use useState to create a state variable to hold the state of the cart
    // initial cart value as zero
    const [cart, setCart] = useState({}); //[]  
    const [numItemInCart, setNumItemInCart] = useState(0);
    const [filters, setFilters] = useState({
        All:true,
    });
    const [sortProperty, setSortProperty] = useState("NA");

    function handleAdd(item) {
        // make a deep copy of the current cart
	    const newCart = { ...cart };
        // increment existing count, otherwise, set item count to 1 
        if (newCart[item.name] == undefined) {
            newCart[item.name] = [1, item.price]
        } else {
            newCart[item.name] = [newCart[item.name][0] + 1, item.price];   //{item_name：[num_in_cart，item.price]}
        }
        
        // console.log(newCart);
        // set the state of the cart to the updated copy
        setCart(newCart);

        setNumItemInCart(numItemInCart + 1);
    
    }

    function handleRemove(item) {

        const newCart = { ...cart };
        if (newCart[item.name] != undefined) {
            if (newCart[item.name][0] > 0) {
                newCart[item.name] = [newCart[item.name][0]-1, newCart[item.name][1]];
                setNumItemInCart(Math.max(numItemInCart-1, 0));
                //If num_in_cart = 0, delete item in dict
                if (newCart[item.name][0] == 0) { 
                     delete newCart[item.name];
                }
            }
        }
     
        setCart(newCart);

        // console.log(cart); 
        }


    function handleFilter(event) {
       setFilters({ ...filters, [event.target.name]: event.target.checked });
    };

    function matchesFilterType(item) {
        // all items should be shown when no filter is selected
        if(filters.All) { 
            return true
        } else if ((filters.Sweet) && ("Sweet"===item.type)){
            return true
        } else if ((filters.Cake) && ("Cake"===item.type)){
            return true
        } else if ((filters.Breakfast) && ("Breakfast"===item.type)){
            return true
        } else {
            return false
        }
    }

    // const myFilterFunction = item =>{
    //     //Checking multiple filter boxes should perform an and operation.
    //     matchesFilterType(item);
    // }
    // setData(bakeryData.filter(matchesFilterType));
    // console.log(data);
    // //For sorting
    // const ascend = array.sort((a, b) => {
    //     return a.price - b.price;
    // })

    // const decend = array.sort((a, b) => {
    //     return b.price - a.price;
    // })

    function sortProduct(data) {
        // console.log(sortProperty);
        let sorted = data
        if (sortProperty == "price") {
            sorted = data.sort((a, b) => b[sortProperty] - a[sortProperty]);
        } else if (sortProperty == "name") {
            sorted = data.sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
        }
        // console.log(sorted);
        return sorted;
    };  

    const filteredData = sortProduct(bakeryData.filter(matchesFilterType)); //myFilterFunction
    
//    filteredData = bakeryData.filter(sortArray);  

    return (
        <div className="APP">
       
            <img style={{resizeMode: "contain",height: 180,width: 450}} src="images/logo.png" class="card-img-top" alt={'Logo'}/>

            <div class="row">

                {/* Left Filter Session */}
                <div class="col-md-2">
                    <div>
                        <h2>Filter</h2>

                        <h5>Sort By</h5>
                        {/* onClick={(item) => item.sortArray(item, 'price')} */}
                        <div class="form-check"> 
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onChange={() => setSortProperty("price")}/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Price (Ascending)
                                </label>
                            {/* <select className="w-50">
                                <option>Default</option>
                                <option value="high-price">High Price</option>
                                <option value="low-price">Low Price</option>
                            </select> */}
                        </div>

                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => setSortProperty("name")} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Name
                                </label>
                        </div>



                        <h5>Types</h5>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox color="primary" checked={filters.All} name="All" size="small" onChange={handleFilter}/>} label="All" />
                            <FormControlLabel control={<Checkbox color="primary" name="Sweet" size="small" onChange={handleFilter}/>} label="Sweet" />
                            <FormControlLabel control={<Checkbox color="primary" name="Cake" size="small" onChange={handleFilter}/>} label="Cake"/>
                            <FormControlLabel control={<Checkbox color="primary" name="Breakfast" size="small" onChange={handleFilter}/>} label="Breakfast"/>
                        </FormGroup>

                    </div>
                </div>
                
                {/* Product Page */}
                <div class="col-md-8">
                    <div class="row">

                        {filteredData.map((item, index) => (

                        // {bakeryData.map((item, index) => (
                            <Batem
                                key={index}
                                name={item.name}
                                type={item.type}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                nums = {cart[item.name] != undefined ? cart[item.name][0] : 0 }
                                handleAdd={handleAdd}
                                handleRemove={handleRemove}
                            />
                            
                        ))}
                    </div>
                </div>

                {/* Right Cart Session */}
                <div class="col-md-2">
                    <div>
                        <h2>Cart</h2>
                        {/* TODO: render a list of items in the cart */}
                        {/* {console.log(numItemInCart)} */}
                        {(numItemInCart === 0) ? <h5>No Items Added Yet</h5> : 
                        <div>
                            <ul class="list-group">
                                {Object.entries(cart).map(([key, value], index) =>(
                                    <li class="list-group-item" key={index}>
                                        {key}  ${value[1]}/each × {value[0]}
                                    </li>
                                ))}
                            </ul>
                            <h3>Total: ${Math.round(Object.values(cart).reduce((all, cur) => all + cur[0]*cur[1], 0)*100)/100}</h3>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
