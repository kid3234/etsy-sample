// data.js
const productData = {
    products: [
      {
        product: {
          id:1,
          name: "Men's Running Shoes",
          price: {
            amount: 89.99,
            currency: "USD",
            price_details: "Free shipping on orders over $50",
          },
          availability: "In stock",
          item_condition: "New",
          seller: {
            name: "ShoeMart",
            rating: 4.7,
            total_reviews: 1023,
          },
          highlights: {
            material: "Mesh",
            size_range: "7-12 US",
            color: "Black",
            features: ["Breathable", "Lightweight", "Non-slip"],
          },
          item_details: {
            title: "Men's Lightweight Running Shoes - Breathable and Comfortable",
            description:
              "Perfect for daily runs, these shoes are lightweight and provide excellent support.",
            image_url: "s1.jpg",
            rating: {
              average: 4.7,
              quality: 4.8,
              comfort: 4.7,
              value_for_money: 4.6,
            },
          },
          reviews: [
            {
              rating: 5,
              text: "Extremely comfortable and perfect for my daily runs!",
            },
          ],
          options: ["Add to cart"],
          returns_and_exchanges: "30-day return policy",
          links: {
            report_item: "https://www.example.com/report",
            shop_link: "https://www.example.com/shop/ShoeMart",
          },
        },
      },
      {
        product: {
          id:2,
          name: "Graphic T-Shirt",
          price: {
            amount: 25.5,
            currency: "USD",
            price_details: "Local taxes included",
          },
          availability: "Limited stock",
          item_condition: "New",
          seller: {
            name: "TeeWorld",
            rating: 4.9,
            total_reviews: 523,
          },
          highlights: {
            material: "100% Cotton",
            sizes: ["S", "M", "L", "XL"],
            color: "White",
            features: ["Pre-shrunk", "Soft fabric"],
          },
          item_details: {
            title: "Classic Graphic T-Shirt - 100% Cotton",
            description:
              "Show off your style with this high-quality graphic tee, perfect for casual wear.",
            image_url: "/9704568.jpg",
            rating: {
              average: 4.9,
              comfort: 4.8,
              style: 4.9,
            },
          },
          reviews: [
            {
              rating: 5,
              text: "Great quality shirt, the print is vibrant and hasn't faded.",
            },
          ],
          options: ["Add to cart"],
          returns_and_exchanges: "Accepted within 14 days",
          links: {
            report_item: "https://www.example.com/report",
            shop_link: "https://www.example.com/shop/TeeWorld",
          },
        },
      },
      {
        "product": {
          id:3,
          "name": "Smartwatch",
          "price": {
            "amount": 149.99,
            "currency": "USD",
            "price_details": "Free shipping"
          },
          "availability": "In stock",
          "item_condition": "New",
          "seller": {
            "name": "GizmoTech",
            "rating": 4.6,
            "total_reviews": 964
          },
          "highlights": {
            "features": ["Heart Rate Monitor", "GPS", "Water Resistant"],
            "battery_life": "2 days"
          },
          "item_details": {
            "title": "Smartwatch with Heart Rate Monitor and GPS - Water Resistant",
            "description": "Track your fitness and stay connected with this feature-packed smartwatch.",
            "image_url": "/watch.jpg",
            "rating": {
              "average": 4.6,
              "usability": 4.7,
              "features": 4.5
            }
          },
          "reviews": [
            {
              "rating": 4,
              "text": "Great features, but the battery could last a bit longer."
            }
          ],
          "options": ["Add to cart"],
          "returns_and_exchanges": "Accepted within 60 days",
          "links": {
            "report_item": "https://www.example.com/report",
            "shop_link": "https://www.example.com/shop/GizmoTech"
          }
        }
      },
      {
        "product": {
          id:4,
          "name": "Ceramic Coffee Mug",
          "price": {
            "amount": 12.99,
            "currency": "USD",
            "price_details": "Local taxes included"
          },
          "availability": "In stock",
          "item_condition": "New",
          "seller": {
            "name": "HomeGoodsStore",
            "rating": 4.8,
            "total_reviews": 189
          },
          "highlights": {
            "material": "Ceramic",
            "capacity": "350ml",
            "features": ["Dishwasher Safe", "Microwave Safe"]
          },
          "item_details": {
            "title": "Dishwasher and Microwave Safe Ceramic Coffee Mug - 350ml",
            "description": "Enjoy your favorite beverage in this durable ceramic coffee mug.",
            "image_url": "/mug.jpg",
            "rating": {
              "average": 4.8,
              "quality": 4.9,
              "design": 4.7
            }
          },
          "reviews": [
            {
              "rating": 5,
              "text": "Beautiful mug, and it holds just the right amount of coffee."
            }
          ],
          "options": ["Add to cart"],
          "returns_and_exchanges": "Accepted within 30 days",
          "links": {
            "report_item": "https://www.example.com/report",
            "shop_link": "https://www.example.com/shop/HomeGoodsStore"
          }
        }
      },
      {
        "product": {
          id:5,
          "name": "Organic Cotton Bed Sheets",
          "price": {
            "amount": 79.99,
            "currency": "USD",
            "price_details": "Free shipping"
          },
          "availability": "In stock",
          "item_condition": "New",
          "seller": {
            "name": "BeddingWorld",
            "rating": 4.9,
            "total_reviews": 410
          },
          "highlights": {
            "material": "Organic Cotton",
            "size": "Queen",
            "features": ["Hypoallergenic", "Breathable"]
          },
          "item_details": {
            "title": "Queen Size Organic Cotton Bed Sheets - Hypoallergenic and Breathable",
            "description": "Sleep comfortably on these soft and breathable organic cotton bed sheets.",
            "image_url": "/bedsheet.jpg",
            "rating": {
              "average": 4.9,
              "comfort": 5.0,
              "durability": 4.8
            }
          },
          "reviews": [
            {
              "rating": 5,
              "text": "The most comfortable sheets I've ever owned."
            }
          ],
          "options": ["Add to cart"],
          "returns_and_exchanges": "Accepted within 30 days",
          "links": {
            "report_item": "https://www.example.com/report",
            "shop_link": "https://www.example.com/shop/BeddingWorld"
          }
        }
      },
      {
        "product": {
          id:6,
          "name": "Wireless Mouse",
          "price": {
            "amount": 24.99,
            "currency": "USD",
            "price_details": "Local taxes included"
          },
          "availability": "In stock",
          "item_condition": "New",
          "seller": {
            "name": "TechAccessories",
            "rating": 4.7,
            "total_reviews": 542
          },
          "highlights": {
            "features": ["Ergonomic Design", "Adjustable DPI"]
          },
          "item_details": {
            "title": "Ergonomic Wireless Mouse with Adjustable DPI",
            "description": "Navigate your computer with ease using this ergonomic wireless mouse.",
            "image_url": "/mouse.jpg",
            "rating": {
              "average": 4.7,
              "comfort": 4.8,
              "durability": 4.6
            }
          },
          "reviews": [
            {
              "rating": 4,
              "text": "Very comfortable to use, but battery life could be better."
            }
          ],
          "options": ["Add to cart"],
          "returns_and_exchanges": "Accepted within 30 days",
          "links": {
            "report_item": "https://www.example.com/report",
            "shop_link": "https://www.example.com/shop/TechAccessories"
          }
        }
      },
      {
        "product": {
          id:7,
          "name": "Gaming Keyboard",
          "price": {
            "amount": 69.99,
            "currency": "USD",
            "price_details": "Free shipping"
          },
          "availability": "In stock",
          "item_condition": "New",
          "seller": {
            "name": "GamerZone",
            "rating": 4.8,
            "total_reviews": 678
          },
          "highlights": {
            "features": ["Mechanical Keys", "RGB Lighting"]
          },
          "item_details": {
            "title": "Mechanical Gaming Keyboard with RGB Lighting",
            "description": "Enhance your gaming experience with this mechanical keyboard featuring customizable RGB lighting.",
            "image_url": "/keyboard.jpg",
            "rating": {
              "average": 4.8,
              "performance": 4.9,
              "build_quality": 4.7
            }
          },
          "reviews": [
            {
              "rating": 5,
              "text": "Excellent keyboard with responsive keys and beautiful lighting."
            }
          ],
          "options": ["Add to cart"],
          "returns_and_exchanges": "Accepted within 60 days",
          "links": {
            "report_item": "https://www.example.com/report",
            "shop_link": "https://www.example.com/shop/GamerZone"
          }
        }
      },
      {
        "product": {
          id:8,
          "name": "Noise Cancelling Headphones",
          "price": {
            "amount": 129.99,
            "currency": "USD",
            "price_details": "Free shipping"
          },
          "availability": "In stock",
          "item_condition": "New",
          "seller": {
            "name": "AudioPhile",
            "rating": 4.9,
            "total_reviews": 845
          },
          "highlights": {
            "features": ["Active Noise Cancelling", "Wireless", "20-hour Battery Life"]
          },
          "item_details": {
            "title": "Wireless Noise Cancelling Headphones with 20-hour Battery Life",
            "description": "Immerse yourself in your music with these wireless noise-cancelling headphones.",
            "image_url": "/hedset.jpg",
            "rating": {
              "average": 4.9,
              "sound_quality": 5.0,
              "comfort": 4.8
            }
          },
          "reviews": [
            {
              "rating": 5,
              "text": "Fantastic sound quality and the noise cancellation is top-notch."
            }
          ],
          "options": ["Add to cart"],
          "returns_and_exchanges": "Accepted within 60 days",
          "links": {
            "report_item": "https://www.example.com/report",
            "shop_link": "https://www.example.com/shop/AudioPhile"
          }
        }
      },
    ],
  };
  
  export default productData;
  