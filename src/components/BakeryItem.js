// TODO: create a component that displays a single bakery item
import {useState} from 'react';

export default function Batem(item) {

    // const [numInCart, setNumInCart] = useState(0);

    // function increaseNum(){
    //     setNumInCart(numInCart+1);
    // }

    // function decreaseNum(){
    //     if(numInCart >= 1){
    //         setNumInCart(numInCart-1);
    //     }
    // }

    return (
        <div class="col-md-5 col-lg-4">
            <div class="card h-100">
                <img src={item.image} class="card-img-top" alt={'unknown'}/>
                <div class="card-body">
                    <h3 class="card-title">{item.name}</h3>
                    <div class="card-text">Type: {item.type}</div>
                    <div class="card-text">{item.description}</div>
                    <div class="flex items-center justify-between">
                        <h5 class="card-text">${item.price}</h5>
                        <button class="btn btn-outline-danger" onClick={() => item.handleRemove(item)}>-</button>
                        <text>      </text>
                        <text>{item.nums}</text>
                        <text>      </text>
                        <button class="btn btn-outline-success" onClick={() => item.handleAdd(item)}>+</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
