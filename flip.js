// Data for Categories
const categories = [
    {
        img_src: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
        title: "Grocery",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
        title: "Mobiles",
    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
        title: "Fashion",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
        title: "Electronics",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
        title: "Home & Furniture",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
        title: "Appliances",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
        title: "Travel",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
        title: "Beauty, Toys & More",
    },
    {
        img_src: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
        title: "Two Wheelers",
    },
];

// Data for Products (Expanded with Categories)
const products = [
    // Electronics
    {
        img_src: "https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
        title: "Top Mirrorless Cameras",
        offer: "Shop Now!",
        tag: "Canon, Sony, Fujifilm...",
        category: "Electronics",
        price: 45000
    },
    {
        img_src: "https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",
        title: "Best of Action Cameras",
        offer: "From ₹3,999",
        tag: "GoPro, DJI & More",
        category: "Electronics",
        price: 3999
    },
    {
        img_src: "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
        title: "Printers",
        offer: "From ₹3,999",
        tag: "HP, Canon & More",
        category: "Electronics",
        price: 3999
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/role-play-toy/q/b/v/smart-kids-selfie-camera-birthday-gifts-for-hd-digital-video-original-imahfk6yckubqnz2.jpeg?q=70",
        title: "eyepro Kids Digital Camera",
        offer: "From ₹3,999",
        tag: "Effective Pixels: 16 MP",
        category: "Electronics",
        price: 3999
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/w/i/f/-original-imahagy2cefszqgy.jpeg?q=70&crop=false",
        title: "Monitors",
        offer: "From ₹7,949",
        tag: "Dell, Samsung & More",
        category: "Electronics",
        price: 7949
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/induction-cook-top/z/y/k/rapid-plus-rapid-plus-heavy-duty-3500-watt-electric-cooktop-with-original-imahbzkp4vy953f5.jpeg?q=70",
        title: "Rapid Plus Induction Cooktop",
        offer: "Min. 40% Off",
        tag: "3500 Watt",
        category: "Electronics",
        price: 2499
    },
    // Grocery
    {
        img_src: "https://www.bigbasket.com/media/uploads/p/l/126906_8-aashirvaad-whole-wheat-atta.jpg",
        title: "Aashirvaad Atta",
        offer: "Min. 20% Off",
        tag: "Premium Quality",
        category: "Grocery",
        price: 263
    },
    {
        img_src: "https://www.bigbasket.com/media/uploads/p/l/274145_14-fortune-sunlite-refined-sunflower-oil.jpg",
        title: "Fortune Oil",
        offer: "Min. 15% Off",
        tag: "Best Seller",
        category: "Grocery",
        price: 135
    },
    // Mobiles
    {
        img_src: "https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
        title: "Apple iPhone 15",
        offer: "From ₹65,999",
        tag: "Flagship Killer",
        category: "Mobiles",
        price: 65999
    },
    {
        img_src: "https://m.media-amazon.com/images/I/719zApN1mhL._AC_UY327_FMwebp_QL65_.jpg",
        title: "Samsung Galaxy S23",
        offer: "From ₹54,999",
        tag: "Top Rated",
        category: "Mobiles",
        price: 54999
    },
    {
        img_src: "https://m.media-amazon.com/images/I/61PBLEFPoKL._AC_UY327_FMwebp_QL65_.jpg",
        title: "Apple iPhone 15 Pro Max",
        offer: "From ₹1,59,900",
        tag: "Titanium Design",
        category: "Mobiles",
        price: 159900
    },
    {
        img_src: "https://m.media-amazon.com/images/I/81M4zm2+0FL._AC_UL480_FMwebp_QL65_.jpg",
        title: "Samsung Galaxy S24 Ultra",
        offer: "From ₹1,29,999",
        tag: "AI Phone",
        category: "Mobiles",
        price: 129999
    },
    {
        img_src: "https://m.media-amazon.com/images/I/712SuRmHG4L._AC_UL480_FMwebp_QL65_.jpg",
        title: "Apple iPhone 16",
        offer: "From ₹55,999*",
        tag: "Coming Soon",
        category: "Mobiles",
        price: 55999
    },
    {
        img_src: "https://m.media-amazon.com/images/I/61fyYieI5lL._AC_SX296_CB1169409_QL70_.jpg",
        title: "Itel Zeno 20",
        offer: "From ₹14,999*",
        tag: "Just Launched",
        category: "Mobiles",
        price: 14999
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/1/-original-imagy2v5ggthbvfe.jpeg?q=70",
        title: "vivo T4 Lite 5G",
        offer: "Just ₹10,999*",
        tag: "Best Value",
        category: "Mobiles",
        price: 10999
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imagy5wqg4z6k9g3.jpeg?q=70",
        title: "OPPO K13 5G",
        offer: "From ₹16,999*",
        tag: "SuperVOOC",
        category: "Mobiles",
        price: 16999
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/j/i/-original-imagwzrgue8mznqa.jpeg?q=70",
        title: "Galaxy S24 FE 5G",
        offer: "From ₹31,999",
        tag: "Fan Edition",
        category: "Mobiles",
        price: 31999
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/y/8/-original-imagtt4m42bzhb2d.jpeg?q=70",
        title: "Moto G96 5G",
        offer: "Just ₹17,999*",
        tag: "Moto Style",
        category: "Mobiles",
        price: 17999
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
        title: "moto g57 POWER",
        offer: "Just ₹12,999*",
        tag: "Powerhouse",
        category: "Mobiles",
        price: 12999
    },
    // Fashion
    {
        img_src: "https://m.media-amazon.com/images/I/51Xiyz4pCrL._AC_UL480_FMwebp_QL65_.jpg",
        title: "Puma Sneakers",
        offer: "Min. 40% Off",
        tag: "Men's Footwear",
        category: "Fashion",
        price: 1499
    },
    {
        img_src: "https://m.media-amazon.com/images/I/817Khp9dW3L._AC_UL480_FMwebp_QL65_.jpg",
        title: "AMAHA Pack of 2 Women Printed T-shirt",
        offer: "Min. 66% Off",
        tag: "Daily Wear",
        category: "Fashion",
        price: 416
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/g/a/m-ttts002070-tokyo-talkies-original-imahdbqzj3zh97wu.jpeg?q=70",
        title: "Tokyo Talkies Women Printed Grey T-shirt",
        offer: "Min. 76% Off",
        tag: "Trending",
        category: "Fashion",
        price: 175
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/e/k/n/s-wn-panther-pnk-houseofcommon-original-imahe4pyhr4pf7fh.jpeg?q=70",
        title: "Brokee Women Pink Panther T-shirt",
        offer: "Min. 77% Off",
        tag: "Graphic Print",
        category: "Fashion",
        price: 205
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/u/3/f/xl-happiness-hood-cream-kawachine-original-imahgfgypphegzyg.jpeg?q=70",
        title: "Men Full Sleeve Printed Hooded Sweatshirtt",
        offer: "Min. 89% Off",
        tag: "Best Seller",
        category: "Fashion",
        price: 261
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-t-shirt/o/k/9/xl-ts-3107-black-shopsy-tazo-original-imahfnxu9yfgdzps.jpeg?q=70",
        title: "Men's T-Shirts",
        offer: "Min. 50% Off",
        tag: "Top Brands",
        category: "Fashion",
        price: 499
    },
    // Home & Furniture
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/outdoor-set/v/v/m/0-white-4-0-wicker-609-d-8-white-urbanescape-762-d-8-4-1-clear-original-imagn2dsjhspxgpz.jpeg?q=70",
        title: "White Wicker Outdoor Set",
        offer: "Min. 40% Off",
        tag: "Outdoor Furniture",
        category: "Home & Furniture",
        price: 12999
    },
    {
        img_src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
        title: "Wakefit Fabric 3 Seater Sofa",
        offer: "Min. 30% Off",
        tag: "Best Seller",
        category: "Home & Furniture",
        price: 30439
    },
    {
        img_src: "https://www.nilkamalhomes.com/cdn/shop/files/FIAEROFLDCHGRN.jpg?v=1751015282",
        title: "Nilkamal Plastic Chair (Set of 2)",
        offer: "Min. 10% Off",
        tag: "Budget Friendly",
        category: "Home & Furniture",
        price: 2600
    },
    {
        img_src: "https://m.media-amazon.com/images/I/91JvMvT3lEL._AC_SX679_.jpg",
        title: "Engineered Wood Shoe Rack",
        offer: "Min. 50% Off",
        tag: "Space Saver",
        category: "Home & Furniture",
        price: 3999
    },
    {
        img_src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2191&auto=format&fit=crop",
        title: "Metal Queen Size Bed",
        offer: "Min. 20% Off",
        tag: "Durable Metal",
        category: "Home & Furniture",
        price: 15999
    },
    // Appliances
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/koudfgw0/pop-up-toaster/v/l/0/krispy-4-slice-pop-up-toaster-borosil-original-imag37f2r2fegmse.jpeg?q=70&crop=false",
        title: "Borosil Krispy Pop-up Toaster",
        offer: "Min. 30% Off",
        tag: "4 Slice Toaster",
        category: "Appliances",
        price: 2999
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/9/r/y/-original-imah3zfyza9avwyp.jpeg?q=70",
        title: "Voltas Beko 9 kg Washing Machine",
        offer: "From ₹18,890",
        tag: "Top Load",
        category: "Appliances",
        price: 18890
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/water-geyser/4/a/g/2016-compacto-3-0-liter-3000-hindware-3-original-imah2f6tqpvgtxa9.jpeg?q=70",
        title: "Hindware Storage water Gayser",
        offer: "From ₹17,999",
        tag: "RO + UV + Minerals",
        category: "Appliances",
        price: 17999
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/air-fryer/d/r/w/black-4-2-1350-prolife-vista-havells-original-imahezzh6yhedm7u.jpeg?q=70",
        title: "HAVELLS Prolife Delicia Air Fryer",
        offer: "From ₹13,163",
        tag: "85% Less Oil",
        category: "Appliances",
        price: 13163
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/hand-blender/2/m/p/agaro-royal-milk-frother-3-speed-electric-frother-for-coffee-original-imaha3vcpeczdvhx.jpeg?q=70&crop=false",
        title: "Agaro Royal Milk Frother",
        offer: "Min. 25% Off",
        tag: "Coffee Frother",
        category: "Appliances",
        price: 999
    },
    // Two Wheelers
    {
        img_src: "./images/electric_scooter_1764914087288.png",
        title: "Ampere Magnus Pro",
        offer: "From ₹75,000",
        tag: "Electric Scooter",
        category: "Two Wheelers",
        price: 75000
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/scooter-moped/h/9/g/-original-imahftzesfnthpcz.jpeg?q=70",
        title: "Bounce Infinity E1",
        offer: "From ₹80,000",
        tag: "Swap Battery",
        category: "Two Wheelers",
        price: 80000
    },
    {
        img_src: "./images/electric_scooter_1764914087288.png",
        title: "Ola S1 Pro",
        offer: "From ₹1,39,999",
        tag: "Hyper Mode",
        category: "Two Wheelers",
        price: 139999
    },
    {
        img_src: "./images/electric_scooter_1764914087288.png",
        title: "Ather 450X",
        offer: "From ₹1,25,000",
        tag: "Smart Scooter",
        category: "Two Wheelers",
        price: 125000
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/motorcycle/4/d/v/-original-imahfvsegdycfy6p.jpeg?q=70",
        title: "Motorcycle",
        offer: "Check Price",
        tag: "Best Seller",
        category: "Two Wheelers",
        price: 75000
    },
    // More Grocery
    {
        img_src: "./images/grocery_atta_pack_1764914054835.png",
        title: "Organic Wheat Atta",
        offer: "Min. 30% Off",
        tag: "Healthy Choice",
        category: "Grocery",
        price: 300
    },
    {
        img_src: "./images/grocery_atta_pack_1764914054835.png",
        title: "Basmati Rice (5kg)",
        offer: "Min. 25% Off",
        tag: "Premium Grain",
        category: "Grocery",
        price: 500
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/nut-dry-fruit/t/9/w/900-premium-natural-whole-kaju-1-pouch-happilo-original-imahffmzkrg7csj9.jpeg?q=70&crop=false",
        title: "Happilo Premium Natural Whole Kaju/ Cashews",
        offer: "Min.15%off",
        tag: "Premium Quality",
        category: "Grocery",
        price: 810
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/n/z/0/300-premium-whole-kaju-rich-in-protein-crunchy-natural-dry-fruit-original-imahh7fgwctfzfzu.jpeg?q=70",
        title: "Premium Whole Kaju",
        offer: "Min. 10% Off",
        tag: "Premium Quality",
        category: "Grocery",
        price: 349
    },
    // More Mobiles
    {
        img_src: "./images/modern_smartphone_1764914069485.png",
        title: "Google Pixel 8",
        offer: "From ₹69,999",
        tag: "Best Camera",
        category: "Mobiles",
        price: 69999
    },
    {
        img_src: "./images/modern_smartphone_1764914069485.png",
        title: "Nothing Phone (2)",
        offer: "From ₹39,999",
        tag: "Unique Design",
        category: "Mobiles",
        price: 39999
    },
    // Beauty, Toys & More
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/learning-toy/4/l/b/top-selling-baby-building-blocks-100-non-toxic-creative-learning-original-imah2fy5zguyaafs.jpeg?q=70",
        title: "Educational Toy Puzzle For Kids  (Multicolor)",
        offer: "From ₹99",
        tag: "Fun & Learning",
        category: "Beauty, Toys & More",
        price: 499
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/u/w/q/lavender-body-lotion-body-wash-skincare-combo-with-loofa-3-original-imagwztg6fyypaht.jpeg?q=70",
        title: "Skincare",
        offer: "Up to 60% Off",
        tag: "Face Wash, Lotions...",
        category: "Beauty, Toys & More",
        price: 299
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/diaper/e/h/r/s-easy-dry-pull-up-diaper-pants-small-size-4-8kg-78-little-angel-original-imahh45svmf8y9uf.jpeg?q=70&crop=false",
        title: "Baby Care",
        offer: "From ₹69",
        tag: "Diapers, Wipes...",
        category: "Beauty, Toys & More",
        price: 199
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/f/l/c/red-onion-black-seed-oil-ultimate-hair-care-kit-shampoo-hair-original-imahdnj2hfusbgy7.jpeg?q=70",
        title: "Hair Care",
        offer: "Up to 60% Off",
        tag: "Shampoo, Oil...",
        category: "Beauty, Toys & More",
        price: 249
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/soap/m/u/d/-original-imah3s8ctqzcyfum.jpeg?q=70&crop=false",
        title: "Daily Essentials",
        offer: "Up to 50% Off",
        tag: "Soaps..",
        category: "Beauty, Toys & More",
        price: 149
    },
    {
        img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/eye-liner/u/h/k/15-beauty-waterproof-36h-eyeliner-4pcs-red-edition-liquid-matte-original-imagsp5yhhxbau9p.jpeg?q=70",
        title: "Makeup & more",
        offer: "Up to 75% Off",
        tag: "Lipstick, Eyeliner...",
        category: "Beauty, Toys & More",
        price: 399
    },
    {
        img_src: "./images/beauty_toys_grid.png",
        title: "Health & Wellness",
        offer: "Up to 85% Off",
        tag: "Supplements...",
        category: "Beauty, Toys & More",
        price: 599
    },
    {
        img_src: "./images/beauty_toys_grid.png",
        title: "Food & Beverages",
        offer: "Up to 75% Off",
        tag: "Nuts, Tea, Coffee...",
        category: "Beauty, Toys & More",
        price: 299
    }
];

// Render Categories
const categoryList = document.getElementById("category-list");
categories.forEach((category) => {
    const item = document.createElement("div");
    item.classList.add("category-item");
    item.innerHTML = `
        <img src="${category.img_src}" alt="${category.title}">
        <p>${category.title}</p>
    `;

    // Add Click Event for Filtering
    item.addEventListener('click', () => {
        filterByCategory(category.title);
    });

    categoryList.appendChild(item);
});

// Cart Logic
let cart = JSON.parse(localStorage.getItem('flipkart_cart')) || [];

function updateCartCount() {
    const cartLink = document.querySelector(".cart-link span");
    if (cartLink) {
        cartLink.innerText = `Cart (${cart.length})`;
    }
}

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('flipkart_cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.title} added to cart!`);
}

// Render Products Function
const productGrid = document.getElementById("electronics-grid");
const sectionTitle = document.querySelector(".section-header h2");

function renderProducts(productsToRender) {
    productGrid.innerHTML = ""; // Clear existing content

    if (productsToRender.length === 0) {
        productGrid.innerHTML = "<p style='padding: 20px; text-align: center; width: 100%;'>No products found.</p>";
        return;
    }

    productsToRender.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        // Create card content
        const img = document.createElement("img");
        img.src = product.img_src;
        img.alt = product.title;

        const title = document.createElement("h3");
        title.classList.add("product-title");
        title.innerText = product.title;

        const offer = document.createElement("p");
        offer.classList.add("product-offer");
        offer.innerText = product.offer;

        const tag = document.createElement("p");
        tag.classList.add("product-tag");
        tag.innerText = product.tag;

        const addBtn = document.createElement("button");
        addBtn.innerText = "Add to Cart";
        addBtn.style.marginTop = "10px";
        addBtn.style.padding = "8px 16px";
        addBtn.style.backgroundColor = "#ff9f00";
        addBtn.style.border = "none";
        addBtn.style.color = "white";
        addBtn.style.cursor = "pointer";
        addBtn.style.fontWeight = "bold";
        addBtn.style.borderRadius = "2px";

        addBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent card click if we add one later
            addToCart(product);
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(offer);
        card.appendChild(tag);
        card.appendChild(addBtn);

        productGrid.appendChild(card);
    });
}

// Initial Render
renderProducts(products);
updateCartCount();

// Filter Logic
function filterByCategory(category) {
    const filtered = products.filter(p => p.category === category);

    if (category === "Travel") {
        // Special render for Travel
        sectionTitle.innerText = "Travel Booking";

        // Inject Travel HTML
        productGrid.innerHTML = `
            <div style="width: 100%;">
                <!-- Hero Section for Travel (Inline style to force full width in grid container if needed, but we rely on class) -->
                <section class="travel-hero-section">
                    <div class="travel-hero-overlay"></div>
                    <div class="travel-hero-content">
                        <h1 class="travel-hero-title">Get. Set. Travel.</h1>
                        
                        <!-- Flight Search Card -->
                        <div class="travel-search-card">
                            <div class="travel-trip-type">
                                <label class="travel-radio-group">
                                    <input type="radio" name="trip" value="one-way" checked>
                                    One Way
                                </label>
                                <label class="travel-radio-group">
                                    <input type="radio" name="trip" value="round-trip">
                                    Round Trip
                                </label>
                            </div>

                            <div class="travel-search-inputs">
                                <div class="travel-input-field">
                                    <span class="travel-input-label">From</span>
                                    <input type="text" class="travel-input-control" placeholder="City or Airport">
                                </div>

                                <div class="travel-input-field">
                                    <span class="travel-input-label">To</span>
                                    <input type="text" class="travel-input-control" placeholder="City or Airport">
                                </div>

                                <div class="travel-input-field">
                                    <span class="travel-input-label">Depart On</span>
                                    <input type="date" class="travel-input-control">
                                </div>

                                <div class="travel-input-field">
                                    <span class="travel-input-label">Return On</span>
                                    <input type="date" class="travel-input-control" disabled id="returnDate">
                                </div>

                                <div class="travel-input-field">
                                    <span class="travel-input-label">Travellers | Class</span>
                                    <select class="travel-input-control">
                                        <option>1 Traveller, Economy</option>
                                        <option>2 Travellers, Economy</option>
                                        <option>1 Traveller, Business</option>
                                    </select>
                                </div>

                                <button class="travel-search-btn">SEARCH</button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Offer Banner -->
                <div class="travel-offer-banner">
                    <div class="travel-offer-text">
                        <h2>Up to 24% Off – All Seats. All Flights.</h2>
                        <p>Fly to Kuala Lumpur · Bangkok · Phuket</p>
                    </div>
                    <div class="travel-offer-icons">
                        <div class="travel-generic-icon">✈️</div>
                        <div class="travel-generic-icon">🌏</div>
                        <div class="travel-generic-icon">🌴</div>
                    </div>
                </div>
            </div>
        `;

        // Re-attach listeners for Travel Page Logic if needed (like Return Date toggle)
        setTimeout(() => {
            const tripRadios = document.querySelectorAll('input[name="trip"]');
            const returnDateInput = document.getElementById('returnDate');
            if (tripRadios && returnDateInput) {
                tripRadios.forEach(radio => {
                    radio.addEventListener('change', (e) => {
                        if (e.target.value === 'round-trip') {
                            returnDateInput.disabled = false;
                            returnDateInput.focus();
                        } else {
                            returnDateInput.disabled = true;
                            returnDateInput.value = '';
                        }
                    });
                });
            }
        }, 0);

    } else if (filtered.length > 0) {
        renderProducts(filtered);
        sectionTitle.innerText = `Best of ${category}`;
    } else {
        // Fallback for categories with no data yet
        productGrid.innerHTML = `<p style='padding: 20px; text-align: center; width: 100%;'>No items available in ${category} yet.</p>`;
        sectionTitle.innerText = category;
    }
}

// Search Logic
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.tag.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    renderProducts(filtered);

    if (query === "") {
        sectionTitle.innerText = "Best of Electronics"; // Default or reset
    } else {
        sectionTitle.innerText = `Search Results for "${query}"`;
    }
});


// Hero Slider Logic
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-play slider
setInterval(nextSlide, 3000);

// Cart Modal Logic
const cartModalOverlay = document.getElementById('cart-modal-overlay');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartLink = document.querySelector('.cart-link');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPriceElement = document.getElementById('cart-total-price');

// Open Cart Modal
cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    renderCart();
    cartModalOverlay.classList.add('active');
});

// Close Cart Modal
closeCartBtn.addEventListener('click', () => {
    cartModalOverlay.classList.remove('active');
});

// Close on click outside
cartModalOverlay.addEventListener('click', (e) => {
    if (e.target === cartModalOverlay) {
        cartModalOverlay.classList.remove('active');
    }
});

function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
        cartTotalPriceElement.innerText = '₹0';
        return;
    }

    cart.forEach((product, index) => {
        let price = product.price || 0;
        total += price;

        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <img src="${product.img_src}" alt="${product.title}">
            <div class="cart-item-details">
                <div>
                    <h4 class="cart-item-title">${product.title}</h4>
                    <p class="cart-item-price">₹${price.toLocaleString('en-IN')}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(item);
    });

    cartTotalPriceElement.innerText = `₹${total.toLocaleString('en-IN')}`;
}

// Make removeFromCart global so it can be called from inline onclick
window.removeFromCart = function (index) {
    cart.splice(index, 1);
    localStorage.setItem('flipkart_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
};



