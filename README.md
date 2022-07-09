# NVA computers 

You can view the deployed site here. [link](http://nva-computers.herokuapp.com/)

NVA Computers or Nikola Vukomanovic Arnhem Computers is made, designed and deployed as a final project at Code Institute. I chose this specific webshop because I like tech and I always like looking at the newest tech arround. The design is based of Code Institutes 'Boutique Ado' project with me adding some extra functions. Also minor visual changes have been made like the addition of a footer and certain elements change the way a user can explore the site. Ofcourse the colors have been changed completly and my persomnal favorite is the added darkmode which works on every page and remains in darkmode even when you go to another page of the site. The site has been made usable for all mobile devices and pc's.

![Am I Responcive Image](/readme_media/amiresponcive.png)

##  UX
### Visitor Goals 
    - To be able to register for an account
    - To see all orders a customer has orderd
    - To be able to see every detail about the product
    - To be able to add and/or update delivery information once signed in
    - To easely find what they are looking for and easely navigate the site
    - To be able to subscribe to a newsletter
    - To be able to contact the store owner for any questions with ease
    - To be able to make a wishlist of items on the store

### Business Goals
    - To be able to add, edit and remove products with ease
    - To be able to sell the products on the site
    - To be able to read customer questions and/or complains in the admin
    - To be able to confire once a complain or question has been handled with inside the admin
    - To be able to add more than one admin user if wanting to expand the team
    - To own a clear and easy website for customers to explore and buy items

### User Stories

#### Site navigation

| AS A    | I WANT TO BE ABLE TO ... | SO THAT I CAN... |
| ----------- | ----------- | ----------- |
| Site visitor | Easy acces to most pages on top and bottom of the site | Easely find tha page I'm looking for |
| Site visitor | Have quick acces for all products on the page | Make a quick purchase |
| Site visitor | Have quick acces to the shopping bag | See all items inside the shopping bag |
| Site visitor | Have quick acces to deals | Get the best deals avaliable |

#### Product Sorting and Searching
| AS A    | I WANT TO BE ABLE TO ... | SO THAT I CAN... |
| ----------- | ----------- | ----------- |
| Site visitor | Enter a search querie inside a search bar| Find what I'm looking for much easier |
| Site visitor | Categorise the products by price and name | See the cheapest or best reviewed item |
| Site visitor | Add items to a wishlist | Take a closer look later much easier |
| Site visitor | Have easi acces to all categories | Sort items out as soon as I get on the site |

#### Accounts 
| AS A    | I WANT TO BE ABLE TO ... | SO THAT I CAN... |
| ----------- | ----------- | ----------- |
| Site visitor | Make an account | Use all avaliable functions on the site |
| Site visitor | Easi login and out | Login and out quick and easy |
| Site visitor | Reset password | Get acces to my account back |
| Site visitor | Save and update shipping info | Buy much quicker |
| Site visitor | See all items I bought | See the purchase date and price of each order |

#### Shopping cart and Checkout
| AS A    | I WANT TO BE ABLE TO ... | SO THAT I CAN... |
| ----------- | ----------- | ----------- |
| Site visitor | View all items in the bag | See total cost and quantity |
| Site visitor | Adjust my cart | Remove or add more than one of the same item |
| Site visitor | Securely checkout | Be sure everything is in order |
| Site visitor | Recieve a confirmation mail | Get more confirmation that the order has been made |

#### Contact and services
| AS A    | I WANT TO BE ABLE TO ... | SO THAT I CAN... |
| ----------- | ----------- | ----------- |
| Site visitor | Easy contact the company | Ask my quiestions, complains etc.. |
| Site visitor | Recieve a confirmation mail | Get confirmation that the quiesion has been sent |
| Site visitor | Contact via social media | Get a faster responce |
| Site visitor | Subscribe to a newsletter | Get informaion on deals or other company information |

#### Admin
| AS A    | I WANT TO BE ABLE TO ... | SO THAT I CAN... |
| ----------- | ----------- | ----------- |
| Site visitor | Easely add, edit or remove products | Change the stock of my store |
| Site visitor | Add more categories | Expand to get more customers |
| Site visitor | Manage users accounts | Help my customers if something goes wrong |
| Site visitor | Manage customers that have contacted me | Respond to them |

### Color Scheme

#### Lightmode
    For the lightmode I used mostly white for the background and a dark color for the letters. Except for the footer where I used the yellow-orange background and black letters. The white and dark combination
    looks modern which fits the business. The added yellow on some parts was to add some contrast and because of the location on where the business is based. The colors almost that of the famous local 
    football club. I only used a slightly darker tone of yellow than that of the club to make it more pleasent to read. 

- Color Test

![Color test lightmode](/readme_media/colorcheck.png)

- Color Palet

![Color palet lightmode](/readme_media/colors.png)

#### Darkmode
    As for the darkmode I used a dark gray as the background and white font for easy reading. The yellow elements mostly remained the same. Some buttons have been changed to match the yellow and a hover effect
    of the same combination has been added other buttons.

- Color Test

![Color test darkmode](/readme_media/colorcheckdm.png)

- Color Palet

![Color palet darkmode](/readme_media/colorsdm.png)

### Wireframes
- Desktop wireframe

    ![Wireframe Desktop](/readme_media/nva-wireframe-desktop.pdf)

- Tablet wireframe

    ![Wireframe Tablet](/readme_media/nva-wireframe-tablet.pdf)

- Mobile wireframe

    ![Wireframe Mobile](/readme_media/nva-wireframe-mobile.pdf)



## Features

### Existing Features

#### Homepage
- The shop now button will take you to the all products page
- Underneath the shop now button there are 3 latest deals displayed to make it easier for the users to see them

![Homepage features](/readme_media/homepage.png)
#### Darkmode
- Within the header is a darkmode toggle button. The entirety of the page turns darker and makes all the text brighter so that it's stil readable. The darkmode also remembers it's last position for as long as the site is being used at least.

- Underneath is the darkmode disabled
![Darkmode feature disabled](/readme_media/darkmode-disabled.png)

- Underneath is the darkmode enabled
![Darkmode feature enabled](/readme_media/darkmode-enabled.png)

#### Header

- Besides the darkmode button the header contains a dropdown navbar. Within the navbar there is another dropdown that opens on the rightside of the first dropdown. In here you will find all the categories of the site.

![Dropdown Navbar](/readme_media/dropdown-navbar.png)

- In the middle there is a search bar that will search for titles and words that are within the product detail page of each product.

![Dropdown Navbar](/readme_media/searchbar.png)

- To the right there is a My Account which is another dropdown. Within a visitor will find a login and register buttons. Once the user is logged in he or she will find the My Profile/Wishlist pages aswell as a logout button. An admin once logged out will see the same buttons, however once logged in there is an extra button called product management which is a page for adding new products.

- Last but not least there is the shopping bag button which once clicked will take you to the shopping bag page. It will also count the total ammount inside the shopping bag.

![Dropdown Navbar](/readme_media/my-account-bag.png)

#### Header for Mobile

- All elements are in the same place except for the searchbar which is pushed under all the buttons and logo. Instead of the dropdown navbar there is a dropdown hamburger menu. The menu contains everything that is normaly inside the My Accound page and the entirety of the dropdown navbar.

![Mobile Header](/readme_media/mobile-navbar.png)

#### Footer

- On the very left there are links to every single cattegory that the site contains. Once hovered over them the background will turn white to make it easier to click the right one.
- In the middle you will find the My Account section which contains the same pages and buttons as the one found within the header. 
- Besides the My Account links the middle section also contains the Mailchimp button. Once clicked the form will appear where you can subscribe to the newsletter. If clicked on accedentaly there is a cancel button which will make the form dissapear.
- And on the far right of the footer there is a contact us section and within text explaining what the user can contact us for and a button beneath that will take you to the Contact Us page where you can fill in the form.
- Lastly inside the Contact Us section there is a link that will take you to the NVA Computers business page where users may also contact the business team.

- The picture below displays the entirety of the footer

![Footer](/readme_media/footer.png)

- Below here is the mailchimp form that appears within the footer

![Mailchimo Form](/readme_media/mailchimp-form.png)

#### Footer for mobile

- The mobile footer is just like the navbar different. You will find that the cattegries section has been removed. The reason being I didn't want the footer to be a mile long. The user on mobile can always use the navbar as it will follow you as you scroll down. All the other elements including the Mailchimp form are still there.

![Mobile Footer](/readme_media/footer-mobile.png)

#### All Products Page

- On the top right corner of the all products page there is a counter which counts how many products are on the page. This makes it easier for the admin to see how many products he or she has on theyr site.
- On the other side there is a sort by function. This can sort by price, rating, name and category. This makes things easier when trying to fine the best rated or cheapest items.
- The product cards contain the most basic infotmation which should be enough. This contains the product picture, price, rating and name.
- The admin of the page gets 2 additional buttons to the cards which are edit and remove. Edit will takw you to the editor of that product and remove will reemove the product.

![All Products Page](/readme_media/all-products.png)

#### Product Detail Page

- Here you will find all that there is to know about the product you clicked on. Things like specs, description as well as all the information present within the cards on the All Products page.
- Above all the information you will find a Add to Wishlist button. This does exakly that, it will add that product to the wishlist. Once added the button changes to Remove from Wishlist which removes that item from your wishlist.
- Under all the information there is a quantity section. Here you can add more than one product to the bag at the same time.
- Once selected how many products a user wants to add he or she can must press the add to bag button. After that that will be added to the bag. The user can than continue to Checkout or press the Keep Shopping button which takes you back to the All Products page.
- The rating per product is based on the Reviews a user leaves begind. If there if no review it will simply say No Rating and if someone leaves a Review with a Rating it will be counted up. The more Ratings the more the number will change, this is because the function behind this counts every rating and than takes an average which is then displayed.

![Product Detail Page](/readme_media/product-detail.png)

#### Reviews

- Located on the product detail page scrolling down will take you to the Reviews section. Here you will find  button named write a review. Once clicked if logged in the buttons takes you to the Review form on a different page. If not logged in it will take you to the login page.
- After the entire form has been filled out you will see a Title on top, besides that the Rating you left begind, underneath the Review text itself and lastly underneath all that the username, date and time of posting.

![Reviews](/readme_media/reviews.png)

#### Wishlist Page

- The Wishlist page looks exakly like the all products page except it depends on how many items the user has added.
- The product card is also the same except now it has a Remove from Wishlist button.

![Wishlist](/readme_media/wishlist.png)
#### Contact Page

- Like mentioned in the footer section of the features once the Ask us Anything button is clicked you will be taken here where you are presented with a form.
- The form contains a name, mail, product selector, title and description. All of those are required to be filled in except the product selector. As again mentioned in the footer the user may ask us anything related to this site. 
- Once sent a confirmation mail is being recieved with information on how many days it will take to respond.
- This is also being sent to the admin page so the site admin can easely find it.

![Contact Page](/readme_media/contactus.png)

#### Register Page

- If a user has no account he or she can register for one. This unlocks certain features like order history and wishlist feature.
- The form requires to be filled in completly for it to work.
- If the same email is being used twice the person trying to register will get an error letting them know.
- The password requires at least 8 characters before you may continue.

![Register Page](/readme_media/signup.png)

#### Login/out Pages

- If the user has no account there is a small link that will lead you to the Register page.
- If a user has an account he or she can login to their account. 
- If the user forgets the password there is a password reset link underneath.

- Login 
    ![Login Page](/readme_media/signin-png.PNG)

- Logout
    ![Logout Page](/readme_media/signout.png)

#### Account Page

- On the account page you will find delivery information that you can fill in so you dont have to fill it in every time you make a purchase. This information can be updated with the Update Information under that form.
- Underneath that you will see your order history of the items you purchased. Once the order number has been clicked you can see all details on that order.

![Account Page](/readme_media/account.png)

#### Shoppingbag Page

- The shopping bag page changes depending on if you have items or not. If not it will say your bag is empty with a keep shopping button beneath that which takes you to the All Products Page.
- Once some items have been added you will get the total price of the bag including the image and name of that product. Here you can also change the quantity per product.
- Keep shopping will once again take you back to All Products Page and Secure Checkout will take you to the Checkout page.

![Shoppingbag Page](/readme_media/bag.png)

#### Checkout

- This is the last step once placing an order. If logged in and the shipping informaion has been filled in it will automaticly be filled in here. Only your name and creditcard number is what remains to be filled in before you are allowed to continue.
- Here you will also get one last look at the product names and total price.
- Once succesfull you will be taken to a succes page with all order informartion.
- At the same time this information is being sent to the admin page.
- And lastly you will recieve a confirmation email with all the information about the order.

![Checkout Page](/readme_media/checkout.png)


#### Error Page

- If a certain product has for example been removed and a customer has saved the link, visiting that link after is has been removed this page will appear instead.
- There is a button on the page that will take you back to the homepage.

![Error Page](/readme_media/error.png)


### Future Features

- A Facebook and Google login method instead of the register page.
- Being able to make own wishlists instead of the one provided. 
- See the ammount of reviews on a product page. 
- A pc building system which allows users to build their own computer with the correct parts that are avaliable on the site.


## Information Architecture
### Business Model
### Database Choice
### Data Models
#### User
#### Products App Model
#### Checkout Models
#### User Profile Model
#### Reviews Model
#### Wishlist Model

## Technologies Used
### Tools

    Github projects and issues for agile
### Databases
### Libraries
### Languages

## Testing

## Deployment
### Local
### Heroku
### Stripe
### AWS

## Credits
### Content
### Images
### Code
### Acknowledgements
### Disclaimer