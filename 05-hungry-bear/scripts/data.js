const menu = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: './images/item-1.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        price: 13.99,
        img: './images/item-2.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: './images/item-3.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        price: 20.99,
        img: './images/item-4.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: 'egg attack',
        category: 'lunch',
        price: 22.99,
        img: './images/item-5.jpeg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: 'oreo dream',
        category: 'shakes',
        price: 18.99,
        img: './images/item-6.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: 'bacon overflow',
        category: 'breakfast',
        price: 8.99,
        img: './images/item-7.jpeg',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: 'american classic',
        category: 'lunch',
        price: 12.99,
        img: './images/item-8.jpeg',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: 'quarantine buddy',
        category: 'shakes',
        price: 16.99,
        img: './images/item-9.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: 'bison steak',
        category: 'dinner',
        price: 22.99,
        img: './images/item-10.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: 'chicken fajitas',
        category: 'dinner',
        price: 14.99,
        img: './images/item-11.jpeg',
        desc: `Chicken fajitas are a flavorful and fun dinner option made with sliced chicken, peppers, and onions, served with tortillas and your choice of toppings.`,
    },
    {
        id: 12,
        title: 'spaghetti and meatballs',
        category: 'dinner',
        price: 12.99,
        img: './images/item-12.jpeg',
        desc: `Tote bag taiyaki keffiyeh, meditation artisan pitchfork offal seitan hexagon.`,
    },
    {
        id: 13,
        title: 'bacon and egg sandwich',
        category: 'breakfast',
        price: 8.99,
        img: './images/item-13.jpeg',
        desc: `Gastropub roof party art party, pitchfork fixie chambray enamel pin freegan irony vaporware succulents.`,
    },
    {
        id: 14,
        title: 'avocado toast',
        category: 'breakfast',
        price: 11.99,
        img: './images/item-14.jpeg',
        desc: `Avocado toast is a simple and delicious breakfast or lunch option made with mashed avocado, lemon juice, and spices on top of toasted bread.`,
    },
    {
        id: 15,
        title: 'acai bowl',
        category: 'breakfast',
        price: 12.99,
        img: './images/item-15.jpeg',
        desc: `An acai bowl is a refreshing breakfast or snack option made with frozen acai berries, topped with your choice of fruits, nuts, and granola.`,
    },
    {
        id: 16,
        title: 'grilled chicken salad',
        category: 'lunch',
        price: 13.99,
        img: './images/item-16.jpeg',
        desc: `A grilled chicken salad is a healthy and satisfying lunch option made with grilled chicken, mixed greens, and your choice of vegetables and toppings.`,
    },
    {
        id: 17,
        title: 'taco salad',
        category: 'lunch',
        price: 13.99,
        img: './images/item-17.jpeg',
        desc: `A taco salad is a flavorful and filling lunch option made with ground beef, lettuce, cheese, and your choice of toppings in a tortilla bowl.`,
    },
    {
        id: 18,
        title: 'meatlovers stir fry',
        category: 'lunch',
        price: 9.99,
        img: './images/item-18.jpeg',
        desc: `A meatlovers stir fry is a tasty and versatile lunch option made with your choice of meats and a flavorful sauce.`,
    },
    {
        id: 19,
        title: 'grilled salmon with roasted vegetables',
        category: 'dinner',
        price: 12.99,
        img: './images/item-19.jpeg',
        desc: `Grilled salmon with roasted vegetables is a healthy and delicious dinner option packed with protein and nutrients.`,
    },
    {
        id: 20,
        title: 'teriyaki chicken with rice and vegetables',
        category: 'dinner',
        price: 9.99,
        img: './images/item-20.jpeg',
        desc: `Teriyaki chicken with rice and vegetables is a tasty and filling dinner option made with grilled chicken, rice, and stir-fried vegetables coated in a sweet teriyaki sauce.`,
    },
    {
        id: 21,
        title: 'Meaty lasagna',
        category: 'dinner',
        price: 19.99,
        img: './images/item-21.jpeg',
        desc: `Vegetarian lasagna is a delicious and satisfying dinner option made with layers of pasta, ground beef, and cheese.`,
    },
    {
        id: 22,
        title: 'caramel shake',
        category: 'shakes',
        price: 8.99,
        img: './images/item-22.jpeg',
        desc: `A caramel shake is a rich and indulgent shake made with caramel ice cream and milk.`,
    },
    {
        id: 23,
        title: 'oatmeal with fruit and nuts',
        category: 'breakfast',
        price: 7.99,
        img: './images/item-23.jpeg',
        desc: `Oatmeal with fruit and nuts is a healthy and tasty breakfast option made with oats, your choice of fruit, and a sprinkle of nuts.`,
    },
    {
        id: 24,
        title: 'breakfast burrito',
        category: 'breakfast',
        price: 10.99,
        img: './images/item-24.jpeg',
        desc: `A breakfast burrito is a flavorful and filling breakfast option made with scrambled eggs, chorizo, and your choice of fillings wrapped in a warm tortilla.`,
    },
    {
        id: 25,
        title: 'sausage with eggs',
        category: 'breakfast',
        price: 11.99,
        img: './images/item-25.jpeg',
        desc: `Sausage with eggs is a hearty and filling breakfast for people who enjoy a protein rich breakfast with high fat content. `,
    },
    {
        id: 26,
        title: 'BLT sandwich',
        category: 'lunch',
        price: 12.99,
        img: './images/item-26.jpeg',
        desc: `A classic bacon, lettuce, and tomato sandwich on toasted bread with mayonnaise.`,
    },
    {
        id: 27,
        title: 'veggie wrap',
        category: 'lunch',
        price: 10.99,
        img: './images/item-27.jpeg',
        desc: `A healthy wrap filled with grilled vegetables, hummus, and mixed greens, wrapped in a whole wheat tortilla.`,
    },
    {
        id: 28,
        title: 'shrimp salad',
        category: 'lunch',
        price: 13.99,
        img: './images/item-28.jpeg',
        desc: `A refreshing salad with grilled shrimp, mixed greens, mango, and a citrus vinaigrette dressing.`,
    },
    {
        id: 29,
        title: 'beef and broccoli',
        category: 'dinner',
        price: 10.99,
        img: './images/item-29.jpeg',
        desc: `Beautifully seasoned beef, broccoli, cheese and plenty of rice covered with our best sauce.`,
    },
    {
        id: 30,
        title: 'pork chops and greens',
        category: 'dinner',
        price: 14.99,
        img: './images/item-30.jpeg',
        desc: `A hearty dinner of grilled pork chops with sweet and light greens`,
    },
    {
        id: 31,
        title: 'BBQ ribs and coleslaw',
        category: 'dinner',
        price: 11.99,
        img: './images/item-31.jpeg',
        desc: `A delicious dinner of tender BBQ ribs and a refreshing side of coleslaw.`,
    },
];

export { menu };
