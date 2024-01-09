Live demo: [github pages](https://thomasmcinnis.github.io/odin-restaurant/)

### About

Completed as part of The Odin Project Javascript [Restaurant Page assignment](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

The assignment was to create a mini SPA for a restaurant landing page. Navigating the contents (home, about, food menu) is done by removing and adding DOM elements with Javascript.

**Obviously this would be a terrible approach for a marketing site in the real-world!**

Thus I re-imagined the assignement as an app for a hotel running on in-room TVs rather than a marketing website. In this context new page loads and network calls may not be desired, and search engine crawling is irrelevant.

Guests can use the app to browse several dining venues within the hotel.

### Learnings

This part of the course introduces Webpack and Node.

-   I have some familiarity with Node package config from building an app in Next.js but it was good to handle the setup more directly
-   Webpack was new to me - I learnt a great deal about importing data, images, styles, fonts etc.
    -   even though Webpack drives bundling in Next.js I never looked at how it. I now have confidence diving into customising bundling in Next or other frameworks in the future
-   I found it increadibly valuable diving into the [Webpack docs](https://webpack.js.org/concepts/) to see what all the options were
-   I also enjoyed setting up distinct dev and prod webpack configs the way I like, and separate NPM scripts for each
    -   I prefer `npm run dev` over `npm run start` for a dev server!

This project also re-inforces manipulating the DOM using Javascript. Using JSX is so much easier but I'm absolutely learning a lot from touching the DOM more manually.

### Spec

I decided on the following capabilities for my implementation:

-   [x] Support multiple venues
-   [x] Venue and menu data imported from JSON files
    -   This mocks data coming from a CMS which a marketing team may update
-   [x] Images in a single directory
-   [x] Components for rendering the venue page sections (hero, menu, about)
    -   These take in a `menu` or `venue` object so as to uncouple view rendering from the app logic and data
-   [ ] Venue nav to update to highlight current

### Extending the project

If I come back to the project these are things I would like to tackle:

-   [ ] Create a real CMS database instead of mocked data in JSON files
-   [ ] Add menu categories
    -   Allow for filtering or grouping of the menus (by 'Mains', 'Beverages', 'Desert' etc.)
-   [ ] Support venues in the hotel which are not restaurants
    -   As guest guide it would make sense for the app to include spa facilities, conference facilities, bars, clubs and so on.
-   [ ] Build an ordering system
    -   Enable guests to add menu items to a room-service order and submit
-   [ ] Make the design responsive
    -   Although the app is imagined to be deployed on a known screen size, perhaps the hotel would like it to be useable on guest personal devices

### Design

I modified a Figma design of [Darya Kastsiukevich](https://www.behance.net/gallery/141847181/Asia-Restaurant-Website/modules/801353511).

Images from Unsplash.
