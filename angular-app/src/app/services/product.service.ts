// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 13',
      description:
        'The latest iPhone with A15 Bionic chip and advanced dual-camera system.',
      price: 999,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      description:
        'High-end Android phone with stunning display and powerful processor.',
      price: 899,
    },
    {
      id: 3,
      name: 'Sony WH-1000XM4',
      description:
        'Industry-leading noise-canceling headphones with superior sound quality.',
      price: 349,
    },
    {
      id: 4,
      name: 'Dell XPS 13',
      description:
        'Compact and powerful laptop with a stunning 13.4-inch display.',
      price: 1299,
    },
    {
      id: 5,
      name: 'Apple MacBook Air',
      description: 'Lightweight laptop with M1 chip and all-day battery life.',
      price: 999,
    },
    {
      id: 6,
      name: 'Samsung QLED TV',
      description: '4K QLED TV with vibrant colors and smart features.',
      price: 1199,
    },
    {
      id: 7,
      name: 'Bose QuietComfort 35 II',
      description:
        'Comfortable noise-canceling headphones with Alexa voice control.',
      price: 299,
    },
    {
      id: 8,
      name: 'Amazon Echo Dot',
      description: 'Smart speaker with Alexa for voice control of your home.',
      price: 49,
    },
    {
      id: 9,
      name: 'Fitbit Charge 5',
      description:
        'Advanced fitness tracker with heart rate monitoring and built-in GPS.',
      price: 179,
    },
    {
      id: 10,
      name: 'Nikon D3500',
      description:
        'Beginner-friendly DSLR camera with excellent image quality.',
      price: 499,
    },
    {
      id: 11,
      name: 'Apple iPad Pro',
      description:
        'Powerful tablet with M1 chip and stunning Liquid Retina display.',
      price: 1099,
    },
    {
      id: 12,
      name: 'GoPro HERO9',
      description:
        'Versatile action camera with 5K video and HyperSmooth stabilization.',
      price: 399,
    },
    {
      id: 13,
      name: 'Microsoft Surface Pro 7',
      description:
        '2-in-1 laptop with a high-resolution touch screen and detachable keyboard.',
      price: 899,
    },
    {
      id: 14,
      name: 'Dyson V11',
      description:
        'High-performance cordless vacuum cleaner with advanced filtration.',
      price: 599,
    },
    {
      id: 15,
      name: 'Sony PlayStation 5',
      description:
        'Next-gen gaming console with lightning-fast loading and immersive gameplay.',
      price: 499,
    },
    {
      id: 16,
      name: 'Xbox Series X',
      description:
        'Powerful gaming console with 12 teraflops of processing power.',
      price: 499,
    },
    {
      id: 17,
      name: 'LG OLED TV',
      description: '4K OLED TV with perfect blacks and stunning colors.',
      price: 1499,
    },
    {
      id: 18,
      name: 'Canon EOS R5',
      description: 'High-end mirrorless camera with 8K video recording.',
      price: 3899,
    },
    {
      id: 19,
      name: 'Apple AirPods Pro',
      description:
        'Wireless earbuds with active noise cancellation and transparency mode.',
      price: 249,
    },
    {
      id: 20,
      name: 'Google Pixel 6',
      description:
        'Advanced Android phone with Google Tensor chip and superior camera.',
      price: 699,
    },
    {
      id: 21,
      name: 'HP Spectre x360',
      description:
        '2-in-1 laptop with 4K OLED display and powerful performance.',
      price: 1399,
    },
    {
      id: 22,
      name: 'DJI Mavic Air 2',
      description: 'Compact drone with 4K camera and intelligent flight modes.',
      price: 799,
    },
    {
      id: 23,
      name: 'Razer Blade 15',
      description: 'High-end gaming laptop with NVIDIA GeForce RTX graphics.',
      price: 1799,
    },
    {
      id: 24,
      name: 'Asus ROG Strix',
      description: 'Gaming desktop with AMD Ryzen processor and RGB lighting.',
      price: 1499,
    },
    {
      id: 25,
      name: 'Logitech MX Master 3',
      description:
        'Advanced wireless mouse with ergonomic design and customizable buttons.',
      price: 99,
    },
    {
      id: 26,
      name: 'Keurig K-Elite',
      description: 'Single serve coffee maker with iced coffee capability.',
      price: 169,
    },
    {
      id: 27,
      name: 'JBL Charge 4',
      description:
        'Portable Bluetooth speaker with powerful sound and long battery life.',
      price: 149,
    },
    {
      id: 28,
      name: 'Nintendo Switch',
      description: 'Hybrid gaming console for home and on-the-go play.',
      price: 299,
    },
    {
      id: 29,
      name: 'Ring Video Doorbell',
      description: 'Smart doorbell with HD video and two-way talk.',
      price: 99,
    },
    {
      id: 30,
      name: 'Philips Hue Starter Kit',
      description: 'Smart lighting system with color-changing LED bulbs.',
      price: 179,
    },
    {
      id: 31,
      name: 'Instant Pot Duo',
      description: 'Multi-use pressure cooker with 7 cooking functions.',
      price: 89,
    },
    {
      id: 32,
      name: 'Anker PowerCore',
      description: 'Portable charger with high capacity and fast charging.',
      price: 39,
    },
    {
      id: 33,
      name: 'Roku Streaming Stick+',
      description: '4K streaming device with voice remote and TV controls.',
      price: 49,
    },
    {
      id: 34,
      name: 'Nest Learning Thermostat',
      description:
        'Smart thermostat that learns your schedule and saves energy.',
      price: 249,
    },
    {
      id: 35,
      name: 'Beats Solo3',
      description:
        'Wireless on-ear headphones with Apple W1 chip and long battery life.',
      price: 199,
    },
    {
      id: 36,
      name: 'Samsung Galaxy Tab S7',
      description: 'High-performance Android tablet with S Pen included.',
      price: 649,
    },
    {
      id: 37,
      name: 'Sonos One',
      description: 'Smart speaker with voice control and rich sound.',
      price: 199,
    },
    {
      id: 38,
      name: 'Tile Mate',
      description: 'Bluetooth tracker for finding lost items easily.',
      price: 24,
    },
    {
      id: 39,
      name: 'Nespresso Vertuo',
      description:
        'Deluxe coffee and espresso machine with smart brewing technology.',
      price: 199,
    },
    {
      id: 40,
      name: 'Wyze Cam v3',
      description: 'Affordable smart home camera with color night vision.',
      price: 35,
    },
    {
      id: 41,
      name: 'Garmin Forerunner 245',
      description: 'GPS running watch with advanced training features.',
      price: 299,
    },
    {
      id: 42,
      name: 'HyperX Cloud II',
      description: 'Gaming headset with virtual 7.1 surround sound.',
      price: 99,
    },
    {
      id: 43,
      name: 'Belkin Boost Up',
      description: 'Wireless charging stand with fast charging capabilities.',
      price: 49,
    },
    {
      id: 44,
      name: 'Black+Decker Air Fryer',
      description: 'Versatile air fryer with multiple cooking functions.',
      price: 99,
    },
    {
      id: 45,
      name: 'Oculus Quest 2',
      description:
        'All-in-one VR headset with immersive games and experiences.',
      price: 299,
    },
    {
      id: 46,
      name: 'Eero Mesh WiFi System',
      description:
        'Whole-home mesh WiFi system for fast and reliable internet.',
      price: 199,
    },
    {
      id: 47,
      name: 'Canon PIXMA TR8520',
      description: 'All-in-one printer with wireless printing and scanning.',
      price: 179,
    },
    {
      id: 48,
      name: 'Samsung Galaxy Watch 4',
      description:
        'Smartwatch with advanced health tracking and fitness features.',
      price: 249,
    },
    {
      id: 49,
      name: 'Lenovo ThinkPad X1 Carbon',
      description:
        'Business laptop with robust security features and powerful performance.',
      price: 1499,
    },
    {
      id: 50,
      name: 'Corsair K95 RGB',
      description: 'Mechanical gaming keyboard with customizable RGB lighting.',
      price: 199,
    },
    {
      id: 51,
      name: 'TP-Link Kasa Smart Plug',
      description: 'Wi-Fi smart plug for controlling devices remotely.',
      price: 17,
    },
    {
      id: 52,
      name: 'Bose SoundLink Revolve',
      description: 'Portable Bluetooth speaker with 360-degree sound.',
      price: 199,
    },
    {
      id: 53,
      name: 'Sony Alpha a6400',
      description: 'Mirrorless camera with fast autofocus and 4K video.',
      price: 899,
    },
    {
      id: 54,
      name: 'Asus TUF Gaming Monitor',
      description: '27-inch gaming monitor with 144Hz refresh rate and HDR.',
      price: 329,
    },
    {
      id: 55,
      name: 'Anova Culinary Sous Vide',
      description: 'Precision cooker for perfectly cooked meals.',
      price: 199,
    },
    {
      id: 56,
      name: 'Samsung Portable SSD T5',
      description: 'High-speed portable storage with compact design.',
      price: 129,
    },
    {
      id: 57,
      name: 'Fitbit Versa 3',
      description: 'Health and fitness smartwatch with built-in GPS.',
      price: 229,
    },
    {
      id: 58,
      name: 'Apple TV 4K',
      description: 'Streaming device with 4K HDR and Dolby Atmos support.',
      price: 179,
    },
    {
      id: 59,
      name: 'Breville Barista Express',
      description: 'Espresso machine with built-in grinder for fresh coffee.',
      price: 599,
    },
    {
      id: 60,
      name: 'Sony SRS-XB43',
      description:
        'Portable Bluetooth speaker with extra bass and party lights.',
      price: 229,
    },
    {
      id: 61,
      name: 'Google Nest Hub',
      description: 'Smart display with Google Assistant and touch screen.',
      price: 99,
    },
    {
      id: 62,
      name: 'Razer Naga X',
      description: 'Gaming mouse with 16 programmable buttons for MMO games.',
      price: 79,
    },
    {
      id: 63,
      name: 'iRobot Roomba 981',
      description: 'Robot vacuum with smart mapping and powerful suction.',
      price: 499,
    },
    {
      id: 64,
      name: 'Yeti Rambler',
      description: 'Insulated tumbler to keep drinks hot or cold for hours.',
      price: 29,
    },
    {
      id: 65,
      name: 'Marshall Stanmore II',
      description: 'Bluetooth speaker with classic design and powerful sound.',
      price: 349,
    },
    {
      id: 66,
      name: 'Sony WH-CH710N',
      description:
        'Wireless noise-canceling headphones with long battery life.',
      price: 199,
    },
    {
      id: 67,
      name: 'LG Gram 17',
      description:
        'Lightweight laptop with large 17-inch display and long battery life.',
      price: 1599,
    },
    {
      id: 68,
      name: 'Canon Vixia HF R800',
      description: 'Camcorder with full HD recording and powerful zoom.',
      price: 249,
    },
    {
      id: 69,
      name: 'HyperX Alloy FPS Pro',
      description: 'Compact mechanical keyboard designed for FPS gaming.',
      price: 79,
    },
    {
      id: 70,
      name: 'Wacom Intuos Pro',
      description: 'Professional drawing tablet with pressure sensitivity.',
      price: 379,
    },
    {
      id: 71,
      name: 'Philips Norelco Shaver 9700',
      description:
        'Electric shaver with contour detection and V-Track precision blades.',
      price: 249,
    },
    {
      id: 72,
      name: 'TP-Link Archer A7',
      description: 'Wi-Fi router with fast speeds and wide coverage.',
      price: 79,
    },
    {
      id: 73,
      name: 'Garmin Fenix 6',
      description: 'Premium multisport GPS watch with advanced metrics.',
      price: 599,
    },
    {
      id: 74,
      name: 'Ninja Foodi Grill',
      description:
        'Indoor grill and air fryer with multiple cooking functions.',
      price: 229,
    },
    {
      id: 75,
      name: 'SteelSeries Arctis 7',
      description:
        'Wireless gaming headset with high-quality sound and comfort.',
      price: 149,
    },
    {
      id: 76,
      name: 'BenQ HT2050A',
      description:
        'Home theater projector with high brightness and low input lag.',
      price: 749,
    },
    {
      id: 77,
      name: 'Seagate Backup Plus',
      description: 'Portable external hard drive with large storage capacity.',
      price: 89,
    },
    {
      id: 78,
      name: 'Roku Ultra',
      description:
        'Premium streaming player with powerful features and voice remote.',
      price: 99,
    },
    {
      id: 79,
      name: 'Arlo Pro 3',
      description: 'Wireless security camera system with 2K HDR video.',
      price: 499,
    },
    {
      id: 80,
      name: 'Elgato Stream Deck',
      description:
        'Live content creation controller with customizable buttons.',
      price: 149,
    },
    {
      id: 81,
      name: 'Blue Yeti USB Mic',
      description: 'Professional USB microphone for recording and streaming.',
      price: 129,
    },
    {
      id: 82,
      name: 'Skullcandy Crusher Evo',
      description: 'Wireless headphones with adjustable sensory bass.',
      price: 199,
    },
    {
      id: 83,
      name: 'Apple Watch Series 6',
      description: 'Smartwatch with blood oxygen sensor and ECG app.',
      price: 399,
    },
    {
      id: 84,
      name: 'Amazon Kindle Paperwhite',
      description: 'Waterproof e-reader with high-resolution display.',
      price: 129,
    },
    {
      id: 85,
      name: 'OnePlus 9',
      description:
        'Flagship Android phone with Snapdragon 888 and 120Hz display.',
      price: 729,
    },
    {
      id: 86,
      name: 'Theragun Pro',
      description: 'Powerful percussive therapy device for muscle recovery.',
      price: 599,
    },
    {
      id: 87,
      name: 'Sony WH-H910N',
      description:
        'Wireless noise-canceling headphones with long battery life.',
      price: 249,
    },
    {
      id: 88,
      name: 'TCL 6-Series',
      description: '4K QLED TV with mini-LED technology and HDR support.',
      price: 699,
    },
    {
      id: 89,
      name: 'Mophie Powerstation',
      description: 'Portable power bank with high capacity and multiple ports.',
      price: 99,
    },
    {
      id: 90,
      name: 'GoPro Max',
      description: '360-degree action camera with HyperSmooth stabilization.',
      price: 499,
    },
    {
      id: 91,
      name: 'Samsung Galaxy Buds Pro',
      description: 'True wireless earbuds with active noise canceling.',
      price: 199,
    },
    {
      id: 92,
      name: 'Logitech G502 Hero',
      description: 'High-performance gaming mouse with customizable weights.',
      price: 79,
    },
    {
      id: 93,
      name: 'Fitbit Inspire 2',
      description:
        'Fitness tracker with heart rate monitoring and sleep tracking.',
      price: 99,
    },
    {
      id: 94,
      name: 'Google Nest WiFi',
      description: 'Mesh Wi-Fi system with reliable coverage and easy setup.',
      price: 169,
    },
    {
      id: 95,
      name: 'Anker Soundcore Liberty Air 2',
      description: 'True wireless earbuds with great sound and call quality.',
      price: 99,
    },
    {
      id: 96,
      name: 'Oculus Rift S',
      description: 'VR headset with sharp optics and tracking.',
      price: 399,
    },
    {
      id: 97,
      name: 'DJI Osmo Pocket',
      description: 'Compact gimbal camera with 4K video recording.',
      price: 349,
    },
    {
      id: 98,
      name: 'Sony X900H',
      description: '4K HDR TV with stunning picture quality and Android TV.',
      price: 999,
    },
    {
      id: 99,
      name: 'Razer BlackWidow Elite',
      description: 'Mechanical gaming keyboard with customizable RGB lighting.',
      price: 169,
    },
    {
      id: 100,
      name: 'Herman Miller Aeron',
      description: 'Ergonomic office chair with superior comfort and support.',
      price: 1399,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  searchProducts(keyword: string): Product[] {
    return this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.description.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
