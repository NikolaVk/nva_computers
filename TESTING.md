# NVA Computers - Testing

## Automated Testing

### HTML

- The HTML code was tested using [W3C Markup Validation Service](https://validator.w3.org/). I tested every single page using view page source for every page. 
All pages pass the test without Errors or Warnings.

### CSS

- The CSS code was tested using [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/). Just as the html code it passed all tests. I used direct input
to test the code. The code passed all tests without Errors.

### JS

- The JavaScript was tested using [JSHint](https://jshint.com/) All scripts and js files passed that test.

### Python

- The Python code was tested using [PEP8 online](http://pep8online.com/). I tested every Python file and removed all Errors I found.

### Lighthouse

I tested the site using Lighthouse and these we're the results.

![Lighthouse Results](/readme_media/lighthouse.png)

## User Stories Testing

### Site User

#### Site Navigation

1. Easy access to most pages on top and bottom of the site
    - There is easy access inside the navbar with the categories button. Here the user can view all available categories. The same when trying to access the profile and wishlist. The same can be said at the bottom as the footer contains the same links but without a dropdown. On mobile the categories disappear from the footer, however the easy accessible navbar that follows the user as they scroll makes up for this.

    - Conclusion: PASSED

2. Have quick access for all products on the page
    - The same as above all products links can be easily  accessed via the header and/or footer.

    - Conclusion: PASSED

3. Have quick access to the shopping bag	
    - The shopping bag as always accessible via the top right corner of the screen inside the navbar. The navbar follows the user on all screen types.

    - Conclusion: PASSED

4. Have quick access to deals
    - Upon arrival on the sites homepage 3 last added deals are displayed. Otherwise the navbar and footer contain the link for all deals.

    - Conclusion: PASSED

#### Product Sorting and Searching

1. Enter a search query inside a search bar
    - The searchbar is on top of every screen type so its always there when you need it. The navbar searches for titles and texts inside the product detail pages of each product.

    - Conclusion: PASSED

2. Categorize the products by price and name
    - On all products page there is a sorting function that sorts alphabetically, categories and probably most used rating and price. 

    - Conclusion: PASSED

3. Add items to a wishlist
    - Once the user has a registered account they can add products to a builtin wishlist function. These remain for as long as the account is active.

    - Conclusion: PASSED

4. Have easy access to all categories
    - The same is already mentioned above, but its very easy to sort out the categories with the navbar and footer links.

    - Conclusion: PASSED

#### Accounts

1. Make an account
    - Users are able to easily  create an account using their email address. This unlocks extra features on the site. Making an count is easy as the register page is always located in the navbar and footer. After few steps the account can be created within minutes.

    - Conclusion: PASSED

2. Easy login and out	
    - Just as the registration page the login and out buttons are at the same spot only replaced depending is user is registered, logged in or out.

    - Conclusion: PASSED

3. Reset password
    - On the login page there is a reset password function they will send you an email where the user can with ease reset their password.

    - Conclusion: PASSED

4. Save and update shipping info
    - On the profile page there is a shipping form which can optionally be filled in to save time when ordering. With an update button the user can with ease update that information at any given moment.

    - Conclusion: PASSED

5. See all items I bought
    - Also on the profile page underneath the shipping form there is an order history tabel which shows the order number, time of purchase and for how much. Once clicked on the order number all information will be displayed on a different page.

    - Conclusion: PASSED

#### Shopping cart and Checkout

1. View all items in the bag
    - As mentioned above the shopping bag is easily accessible at all the time so a user can check when ever they want what and how much is in the bag.

    - Conclusion: PASSED

2. Adjust my cart	
    - On the bag page there is a function added that allows for easy adding existing items and removing of items.

    - Conclusion: PASSED

3. Securely checkout
    - The checkoutis being handled with stripe and a webhook handler which makes sure everything is nicely secure. None not even the admin can access any personal card information.

    - Conclusion: PASSED

4. Receive a confirmation mail	
    - After every order a confirmation mail is being sent to the user with all information about the order.

    - Conclusion: PASSED

#### Contact and services

1. Easy contact the company
    - Contact can be made in 2 different ways. Via the contact form which the user can go to by clicking the button on the footer Ask us Anything. The other way is visiting the Facebook business page and starting a chat or calling the given number.

    - Conclusion: PASSED

2. Receive  a confirmation mail
    - After the contact form has been filled in the user trying to get in contact will receive a confirmation email with information about how many workdays it can take to get an answer.

    - Conclusion: PASSED

3. Contact via social media	
    - Like mentioned above the Facebook page that is accessible from within the footer the user can go ahead and ask away.

    - Conclusion: PASSED

4. Subscribe to a newsletter
    - Within the footer there is a form that is accessible once clicked on Subscribe to our Newsletter. The user can than leave behind their email address. If clicked accidentally it helps that there is an added cancel button within the form.

    - Conclusion: PASSED

### Admin

1. Easily  add, edit or remove products
    - Once admin inside the my account dropdown there is a button called Product Management which when clicked can add a new product to the store. A product can also be edited or removed by looking it up manually and clicking the Edit or Remove button. All of this can also be achieved within the admin page.

    - Conclusion: PASSED

2. Add more categories
    - This can only be done within the admin page. The admin can add or remove existing categories.

    - Conclusion: PASSED

3. Manage users accounts	
    - Again on the admin page the admin can manually confirm emails, delete users or give them staff status.

    - Conclusion: PASSED

4. Manage customers that have contacted me
    - There is a dedicated contact page on the admin site which shows all information the potential customer has left behind. Once the question or complaint has been doubt with the admin can conform that by checking the status box.

    - Conclusion: PASSED

## Manual Testing

### Desktop
- The site has been tested on Mozilla Firefox on a 17.3 inch screen and on Google chrome on a 24 inch screen. It looks like everything is in place.


- On the right side is the homepage on Firefox and the left Chrome

    ![Chrome Firefox Test](/readme_media/firefox-chrome-test.png)

### Tablet
- The site has also been tested on a 10.1 Android tabled on Chrome. This has been done in portrait and landscape mode.

- Portrait

    ![Portrait](/readme_media/tablet-chrome-portrait-test.png)

- Landscape 

    ![Landscape ](/readme_media/tablet-chrome-landschape-test.png)

### Mobile
- Mobile has been tested on a 6.1 inch android phone on Chrome and a 6.06 inch iOS device on Safari

- Android Chrome 

    ![Android](/readme_media/mobile-chrome-test.png)

- iOS Safari

    ![iOS](/readme_media/mobile-safari-test.png)


## Bugs Discovered

### Solved

- Once testing I found that once in darkmode the No rating on the product cards had the wrong class. I had dark-font instead of ldark-font 

### Unsolved

- On mobile when the navbar is open and the device is on landscape mode you cant see all links until you rotate the phone to portrait.  
- On tabled and mobile once in landscape mode the navbar is being pushed down a bit which then covers the Get the latest tech here! box. However the text is still
perfectly visible. 
- If a user wishes to type on mobile the nav bar is in the way because of the appearing keyboard on mobile

## Further Testing

- I asked my parents to create an account, check out the site, get in contact and purchase an item. The only frustration was typing on the phone due to the navbar being in the 
way and the phones keyboard on the bottom so the view of typing is very tiny. Sadly I dont have time 