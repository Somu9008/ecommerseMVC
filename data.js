const AllItems = [
  {
    title: "Laptop",
    description: "High-performance laptop with 16GB RAM and a fast processor.",
    image: {
      url: "https://th.bing.com/th/id/OIP.bH5JTgQRtlti-uWUEpQ4GAHaFj?w=272&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/laptop1.jpg",
    },
    price: 1200,
    category: "electronics",
  },
  {
    title: "Smartphone",
    description:
      "Latest model smartphone with a 48MP camera and 128GB storage.",
    image: {
      url: "https://th.bing.com/th/id/OIP.T5-L1uxVIttWwEZofCQ_DwHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/smartphone1.jpg",
    },
    price: 799,
    category: "electronics",
  },
  {
    title: "Headphones",
    description: "Noise-cancelling headphones with a 30-hour battery life.",
    image: {
      url: "https://th.bing.com/th/id/OIP.qNGswysCT9dtyDF2RDz5ngHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/headphones1.jpg",
    },
    price: 150,
    category: "electronics",
  },
  {
    title: "Smartwatch",
    description:
      "Sleek smartwatch with fitness tracking and heart rate monitor.",
    image: {
      url: "https://th.bing.com/th/id/OIP.tRm7dMQVPh1pstGu8TgnBgHaHa?w=188&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/smartwatch1.jpg",
    },
    price: 250,
    category: "electronics",
  },
  {
    title: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with rich sound and long battery life.",
    image: {
      url: "https://th.bing.com/th/id/OIP.B7WpWpfaShPsMV-WVuPJGAHaHa?w=150&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/speaker1.jpg",
    },
    price: 100,
    category: "electronics",
  },
  {
    title: "Tablet",
    description:
      "10-inch tablet with 64GB storage and high-definition display.",
    image: {
      url: "https://th.bing.com/th/id/OIP.4jFAvm0bIe3JqKaUVvitpgAAAA?w=192&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/tablet1.jpg",
    },
    price: 499,
    category: "electronics",
  },
  {
    title: "Laptop Stand",
    description: "Adjustable laptop stand for better ergonomics and comfort.",
    image: {
      url: "http://ts4.mm.bing.net/th?id=OIP.pzENKCwVHkzLog5okVrajgHaIJ&pid=15.1",
      filename: "ecommerce/laptopstand1.jpg",
    },
    price: 25,
    category: "accessories",
  },
  {
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI settings.",
    image: {
      url: "https://th.bing.com/th/id/OIP.erW-hH-pP-CJBtLmNsu8NgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/mouse1.jpg",
    },
    price: 30,
    category: "accessories",
  },
  {
    title: "Keyboard",
    description: "Wireless keyboard with a sleek design and responsive keys.",
    image: {
      url: "https://th.bing.com/th/id/OIP.EXwXr2Brthq9d2kMfkqSGQHaF6?w=229&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/keyboard1.jpg",
    },
    price: 50,
    category: "accessories",
  },
  {
    title: "Smart Light Bulb",
    description:
      "Energy-efficient smart light bulb with color-changing features.",
    image: {
      url: "https://th.bing.com/th/id/OIP._0yVECh8Urtu5eYXarwJMQHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/lightbulb1.jpg",
    },
    price: 35,
    category: "home",
  },
  {
    title: "Air Purifier",
    description: "Air purifier with HEPA filter for cleaner indoor air.",
    image: {
      url: "https://th.bing.com/th/id/OIP.ufzEefDcVqEUjjo6ekNx0gHaIn?w=162&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/airpurifier1.jpg",
    },
    price: 199,
    category: "home",
  },
  {
    title: "Electric Kettle",
    description:
      "Fast-boiling electric kettle with automatic shut-off feature.",
    image: {
      url: "https://th.bing.com/th/id/OIP.olDE_9VDr0K44IlGkm6s5AHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/kettle1.jpg",
    },
    price: 45,
    category: "home",
  },
  {
    title: "Blender",
    description: "High-speed blender for smoothies and soups.",
    image: {
      url: "https://th.bing.com/th/id/OIP.jplaYoVGFMKmByP2-hCj0AHaKx?w=124&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/blender1.jpg",
    },
    price: 75,
    category: "home",
  },
  {
    title: "Coffee Maker",
    description:
      "Drip coffee maker with programmable settings and a large carafe.",
    image: {
      url: "https://th.bing.com/th/id/OIP.fQGjMfxGhwGWZ_l_w6qTjQHaI5?w=152&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/coffeemaker1.jpg",
    },
    price: 100,
    category: "home",
  },
  {
    title: "Cookware Set",
    description: "Non-stick cookware set for easy cooking and cleaning.",
    image: {
      url: "https://th.bing.com/th/id/OIP.AaXnFyc7EuR8KP0TbvaGuAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/cookware1.jpg",
    },
    price: 120,
    category: "home",
  },
  {
    title: "Winter Jacket",
    description:
      "Warm winter jacket with a waterproof exterior and insulated lining.",
    image: {
      url: "https://th.bing.com/th/id/OIP.0XMv09z7rie_QslDMsyH6AAAAA?w=159&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/jacket1.jpg",
    },
    price: 150,
    category: "clothing",
  },
  {
    title: "Sneakers",
    description:
      "Comfortable sneakers with a breathable upper and cushioned sole.",
    image: {
      url: "https://th.bing.com/th/id/OIP.ha8UC5oYdKakSKflOc5ocAHaFj?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/sneakers1.jpg",
    },
    price: 80,
    category: "clothing",
  },
  {
    title: "Dress Shoes",
    description: "Elegant leather dress shoes perfect for formal occasions.",
    image: {
      url: "https://th.bing.com/th/id/OIP.RNE8t2wQpLzK_EWb7EXVmwHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/shoes1.jpg",
    },
    price: 120,
    category: "clothing",
  },
  {
    title: "T-Shirt",
    description: "Soft cotton T-shirt available in multiple colors and sizes.",
    image: {
      url: "https://th.bing.com/th/id/OIP.6w5SA3F4dXdSAiImxe2q7wHaHa?w=205&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/tshirt1.jpg",
    },
    price: 20,
    category: "clothing",
  },
  {
    title: "Jeans",
    description: "Comfortable denim jeans with a slim fit design.",
    image: {
      url: "https://th.bing.com/th/id/OIP.25e-OUxj8NdYDIqxzmXU5QHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/jeans1.jpg",
    },
    price: 40,
    category: "clothing",
  },
  {
    title: "Sunglasses",
    description: "UV-protective sunglasses with stylish frames.",
    image: {
      url: "https://th.bing.com/th/id/OIP.YtgR-8izAqRXYC1it4lDQwHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.77",
      filename: "ecommerce/sunglasses1.jpg",
    },
    price: 60,
    category: "accessories",
  },
  {
    title: "Backpack",
    description:
      "Spacious backpack with multiple compartments for travel or school.",
    image: {
      url: "https://th.bing.com/th/id/OIP.RjqQilh7nWxASCrbzNBgpwHaHa?w=217&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/backpack1.jpg",
    },
    price: 50,
    category: "accessories",
  },
  {
    title: "Wallet",
    description:
      "Genuine leather wallet with multiple card slots and a sleek design.",
    image: {
      url: "https://th.bing.com/th/id/OIP.hwL3Aulk6id2loWYuH2KmQHaH2?w=186&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/wallet1.jpg",
    },
    price: 30,
    category: "accessories",
  },
  {
    title: "Laptop Sleeve",
    description:
      "Protective laptop sleeve with a slim profile and soft interior lining.",
    image: {
      url: "http://ts4.mm.bing.net/th?id=OIP.-aHuIU5sP0AkrHZKJTKTHgHaHa&pid=15.1",
      filename: "ecommerce/laptopsleeve1.jpg",
    },
    price: 20,
    category: "accessories",
  },
  {
    title: "Travel Pillow",
    description: "Memory foam travel pillow for added comfort during flights.",
    image: {
      url: "http://ts1.mm.bing.net/th?id=OIP.78kdLmVXQmjt-NTsCJ3oXAHaHa&pid=15.1",
      filename: "ecommerce/travelpillow1.jpg",
    },
    price: 25,
    category: "accessories",
  },
  {
    title: "Camera",
    description: "Digital camera with 20MP resolution and 4K video recording.",
    image: {
      url: "https://th.bing.com/th/id/OIP.cagdP_0RFeTCANJ9dB-BTwHaGm?w=210&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/camera1.jpg",
    },
    price: 500,
    category: "electronics",
  },
  {
    title: "Action Camera",
    description:
      "Compact action camera with waterproof casing and wide-angle lens.",
    image: {
      url: "https://th.bing.com/th/id/OIP.E0IJU-Q6H3JCYXvjLZM3aAHaHa?w=217&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/actioncamera1.jpg",
    },
    price: 120,
    category: "electronics",
  },
  {
    title: "Drone",
    description: "High-quality drone with HD camera and long flight time.",
    image: {
      url: "https://th.bing.com/th/id/OIP.b_VOxDAdxzaMM-Z_Luz39gHaEn?w=294&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/drone1.jpg",
    },
    price: 450,
    category: "electronics",
  },
  {
    title: "Game Console",
    description:
      "Next-gen game console with 4K resolution and powerful graphics.",
    image: {
      url: "https://th.bing.com/th/id/OIP.F8FEpcKkmHZQ97FwexyhfQHaEL?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      filename: "ecommerce/console1.jpg",
    },
    price: 350,
    category: "electronics",
  },
];

module.exports = AllItems;
