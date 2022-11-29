# Development

### Link to Deployed Website
If you used the stencil code, this is deployed at here [`https://happydoggie666.github.io/bakery_dev/`]('https://happydoggie666.github.io/bakery_dev/')

### Goal and Value of the Application
This is a bakery web app where users can browse for food and buy it. It is not complete and only shows some basic functions which include add/remove items, sorting and filtering based on different categories.

### Usability Principles Considered
All the components are on one page so the users can easily browse for the information they want. <br>
The Filter and Sort function are on the left, which cater to the users habit (as some big websites also put it on the left and users are very used to it). <br>
The Products are in the middle and I add a state to each item that shows the number of them in the cart. Also, it enables users to add/remove items from cart very efficiently. <br>
The Cart is on the right which shows the item in the cart and the total price so that users can estimate the money they spend and decide whether they want to buy it or not.

### Organization of Components
Each bakery item is a component. And I use prop to pass item data to the components. <br>
For the other counter/filter setting, I use state to help me do it.

### How Data is Passed Down Through Components
I made a component called BakeryItem, just like what we did in ReactStudio Lab to render each item.
And BakeryItem (item) has the following prop/functions:

| Prop/Function name | Description                    |
| --------------- | ------------------------------ |
| `item.image`  | The image of the product      |
| `item.name`   | The name of the product     |
| `item.price`  | The price of the product      |
| `item.description`   | The description of the product     |
| `item.image`  | The image of the product      |
| `item.handleRemove`   | Remove the item from cart function    |
| `item.handleAdd`  | Add the item to cart function    |
| `item.nums`   | The number of item in cart     |

And in the `app.js`, I load the data from the `bakery-data.json` file and pass it to the BakeryItem component when rendering.

For the `item.handleRemove`, `item.handleAdd` and  `item.nums`. I use state to help me track the details.

### How the User Triggers State Changes
##### 1. If users 
