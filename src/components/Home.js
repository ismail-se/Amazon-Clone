import React from "react";
import "../style/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
          alt="Banner"
        />
      </div>

      <div className="home-row">
        <Product
          id="0"
          title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
          price={26.89}
          image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SX425_.jpg"
          rating={5}
        />
        <Product
          id="1"
          title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
          price={364.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
      <div className="home-row">
        <Product
          id="2"
          title="New Apple iPhone 12 (64GB, Black) [Locked] + Carrier Subscription"
          price={1299.99}
          image="https://m.media-amazon.com/images/I/71fVoqRC0wL.jpg"
          rating={5}
        />
        <Product
          id="3"
          title="SanDisk 32GB Ultra microSDHC UHS-I Memory Card with Adapter - 98MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUAR-032G-GN6MA"
          price={8.49}
          image="https://images-na.ssl-images-amazon.com/images/I/61wtfkbzUIL._AC_SL1093_.jpg"
          rating={3}
        />
        <Product
          id="4"
          title="SAMSUNG Q60T Series 50-inch Class QLED Smart TV | 4K, UHD Dual LED Quantum HDR | Alexa Built-in | QN50Q60TAFXZA, 2020 Model"
          price={699.99}
          image="https://images-na.ssl-images-amazon.com/images/I/61fKzrson-L._AC_SL1000_.jpg"
          rating={4}
        />
      </div>
      <div className="home-row">
        <Product
          id="5"
          title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR"
          price={829.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
