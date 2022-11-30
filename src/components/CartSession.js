
export default function Batem(item) {

    return (
       
        <div>
            <h2>Cart</h2>
            {/* TODO: render a list of items in the cart */}
            {/* {console.log(numItemInCart)} */}
            {(item.numItemInCart === 0) ? <h5>No Items Added Yet</h5> : 
            <div>
                <ul class="list-group">
                    {Object.entries(item.cart).map(([key, value], index) =>(
                        <li class="list-group-item" key={index}>
                            {key}  ${value[1]}/each × {value[0]}
                        </li>
                    ))}
                </ul>
                <h3>Total: ${Math.round(Object.values(item.cart).reduce((all, cur) => all + cur[0]*cur[1], 0)*100)/100}</h3>
            </div>}
        </div>
              
    );
}