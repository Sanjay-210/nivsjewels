import React from 'react'

const Productdetails = () => {
  return (
    <div id="site-main" className="site-main">
  <div id="main-content" className="main-content">
    <div id="primary" className="content-area">
      <div id="title" className="page-title">
        <div className="section-container" style={{ paddingTop: 30 }}>
          <div className="content-title-heading">
            <h1
              className="text-title-heading"
              style={{ fontFamily: "serif", color: "#fff" }}
            >
              {/*?php echo $row['design_no'] ?*/}
            </h1>
          </div>
          <div className="breadcrumbs" style={{ color: "#fff" }}>
            <a href="index.php" style={{ color: "#fff" }}>
              Home
            </a>
            <span className="delimiter" />
            <a href="javascript:void(0)" style={{ color: "#fff" }}>
              {/*?php echo $catName ?*/}
            </a>
            <span className="delimiter" />
            <a href="javascript:void(0)" style={{ color: "#fff" }}>
              {/*?php echo $subName ?*/}
            </a>
            <span className="delimiter" />
            {/*?php echo $row['design_no'] ?*/}
          </div>
        </div>
      </div>
      <div id="content" className="site-content" role="main">
        <div
          className="shop-details zoom"
          data-product_layout_thumb="scroll"
          data-zoom_scroll="true"
          data-zoom_contain_lens="true"
          data-zoomtype="inner"
          data-lenssize={200}
          data-lensshape="square"
          data-lensborder=""
          data-bordersize={2}
          data-bordercolour="#f9b61e"
          data-popup="false"
        >
          <div className="product-top-info">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="row">
                  <div className="product-images col-lg-7 col-md-12 col-12">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="content-thumbnail-scroll">
                          <div
                            className="image-thumbnail slick-carousel slick-vertical"
                            data-asnavfor=".image-additional"
                            data-centermode="true"
                            data-focusonselect="true"
                            data-columns4={5}
                            data-columns3={4}
                            data-columns2={4}
                            data-columns1={4}
                            data-columns={4}
                            data-nav="true"
                            data-vertical='"true"'
                            data-verticalswiping='"true"'
                          >
                            <div className="img-item ">
                              <span className="img-thumbnail-scroll">
                                <img
                                  width={600}
                                  height={600}
                                  src="<?php echo DESIGN_SITE.$row['design_image'] ?>"
                                  onerror="this.src='assets/images/No_Image_Available.jpg';"
                                  alt=""
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="scroll-image main-image">
                          <div
                            className="image-additional slick-carousel"
                            data-asnavfor=".image-thumbnail"
                            data-fade="true"
                            data-columns4={1}
                            data-columns3={1}
                            data-columns2={1}
                            data-columns1={1}
                            data-columns={1}
                            data-nav="true"
                          >
                            <div className="img-item">
                              <img
                                width={900}
                                height={900}
                                src="<?php echo DESIGN_SITE.$row['design_image'] ?>"
                                onerror="this.src='assets/images/No_Image_Available.jpg';"
                                alt=""
                                title=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-info col-lg-5 col-md-12 col-12 ">
                    <h1 className="title">{/*?php echo $subName ?*/}</h1>
                    <span className="price">
                      <ins>
                        <span>{/*?php echo $row['design_no'] ?*/}</span>
                      </ins>
                    </span>
                    <div className="rating">
                      <div className="star star-5" />
                      <div className="review-count">
                        (3<span> reviews</span>)
                      </div>
                    </div>
                    <div
                      className="description"
                      style={{ textAlign: "justify" }}
                    >
                      <p>
                        {/*?php
                                              if($subName=='Bangle'){
                                              ?*/}
                        Introducing our exquisite Gold Bangle Collection:
                        Elevate your style and add a touch of timeless elegance
                        with our stunning Gold Bangles. Crafted with precision
                        and attention to detail, each piece in our collection is
                        a testament to exquisite craftsmanship and unparalleled
                        beauty. Whether you're looking for a statement piece or
                        a delicate accessory, our gold bangles are designed to
                        complement any occasion and suit every taste. Material:
                        Our Gold Bangles are meticulously crafted using
                        high-quality, 18-karat gold. This premium material
                        ensures a luxurious finish, durability, and a lustrous
                        shine that will last for generations. We carefully
                        select our gold to provide you with a piece of jewelry
                        that exudes brilliance and sophistication.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Bracelet'){
                                              ?*/}
                        Introducing our exquisite gold bracelet, a true symbol
                        of elegance and timeless beauty. Crafted with utmost
                        precision and attention to detail, this bracelet is
                        designed to adorn your wrist with unparalleled grace.
                        Material: Made from the finest 22K solid gold, this
                        bracelet combines durability with a luxurious appeal.
                        The radiant yellow gold glimmers in the light, adding a
                        touch of opulence to any ensemble.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Chain'){
                                              ?*/}
                        Introducing our Exquisite Gold Chain Collection: Indulge
                        in the timeless allure of our stunning gold chains,
                        meticulously crafted to elevate your style and make a
                        statement. Each piece showcases the perfect blend of
                        luxury, sophistication, and unparalleled craftsmanship.
                        Whether you're looking to enhance your everyday elegance
                        or adorn yourself for a special occasion, our gold
                        chains are designed to captivate and endure. Classic
                        Gold Chain: Unleash the allure of simplicity with our
                        Classic Gold Chain. Crafted with the utmost precision,
                        this chain boasts a seamless blend of understated
                        elegance and enduring style. Its sleek and polished
                        surface reflects light effortlessly, creating a
                        captivating glow. Perfect for any occasion, it
                        effortlessly complements both casual and formal attire.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Charms'){
                                              ?*/}
                        Introducing our exquisite collection of Gold Charms that
                        are designed to add a touch of elegance and
                        personalization to your jewelry collection. Crafted with
                        meticulous attention to detail, our gold charms are the
                        perfect way to express your unique style and commemorate
                        special moments. Timeless Heart Charm: Capture the
                        essence of love with our Timeless Heart Charm. Crafted
                        in gleaming 14K gold, this delicate charm features a
                        classic heart shape, symbolizing affection and devotion.
                        Whether worn on a bracelet or necklace, this timeless
                        piece is a perfect gift for someone special or a
                        beautiful addition to your own collection.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Jhummiki'){
                                              ?*/}
                        Introducing the Exquisite Gold Jhummiki: Welcome to our
                        website, where we proudly present the stunning Gold
                        Jhummiki collection. Our Gold Jhummikis are intricately
                        crafted and beautifully designed pieces of jewelry that
                        celebrate the rich heritage and elegance of Indian
                        culture. With their timeless charm and exquisite
                        craftsmanship, these Jhummikis are perfect for adding a
                        touch of grace and glamour to any occasion. Our Gold
                        Jhummikis are meticulously crafted from high-quality
                        22-karat gold, ensuring a lustrous shine and durability
                        that will last for generations.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Mugappu'){
                                              ?*/}
                        Introducing our exquisite gold Mugappu collection, where
                        traditional charm meets contemporary elegance. Crafted
                        with meticulous attention to detail, our Mugappu designs
                        showcase the timeless beauty of gold, accentuating the
                        grace of every individual who adorns them. Intricate
                        Artistry: Each Mugappu is a testament to the
                        craftsmanship of our skilled artisans. Every stroke and
                        curve is meticulously etched, resulting in intricate
                        patterns and designs that are a delight to behold. Our
                        Mugappu pieces are created with a perfect blend of
                        traditional techniques and modern aesthetics, making
                        them truly unique.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Plain Charms'){
                                              ?*/}
                        Introducing our exquisite collection of Gold Plain
                        Charms, crafted with meticulous attention to detail and
                        designed to add a touch of elegance to any jewelry
                        piece. These timeless charms are perfect for creating
                        personalized bracelets, necklaces, or anklets that
                        reflect your unique style and personality. Each Gold
                        Plain Charm is expertly crafted using high-quality 14K
                        or 18K gold, ensuring durability and a stunning luster
                        that will stand the test of time. The charms feature a
                        sleek and minimalistic design, making them versatile and
                        suitable for any occasion, whether you prefer a casual
                        everyday look or a sophisticated evening ensemble.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Ring'){
                                              ?*/}
                        Introducing the "Eternal Radiance" Gold Ring: Embrace
                        timeless elegance and grace with our exquisite "Eternal
                        Radiance" Gold Ring. Meticulously crafted to perfection,
                        this stunning piece embodies sophistication and beauty,
                        making it an ideal accessory for any occasion. The band
                        of the ring is meticulously handcrafted from 18-carat
                        yellow gold, chosen for its exquisite luster and
                        exceptional durability. Its smooth and polished surface
                        glimmers with a captivating radiance, reflecting the
                        light with every movement.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Stone Charms'){
                                              ?*/}
                        Introducing our exquisite Gold Stone Charms, a
                        collection of enchanting accessories that will add a
                        touch of elegance and charm to your jewelry collection.
                        Crafted with meticulous attention to detail, these
                        stunning charms are the perfect choice to elevate your
                        style and make a statement. Each Gold Stone Charm is
                        meticulously crafted from high-quality 14K gold,
                        ensuring durability and a luxurious shine that will
                        endure for years to come. The captivating centerpiece of
                        each charm is a carefully selected gemstone, known for
                        its beauty and inherent metaphysical properties.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Stud'){
                                              ?*/}
                        Introducing our exquisite gold stud collection, where
                        elegance meets sophistication. Crafted with meticulous
                        attention to detail, these timeless pieces are designed
                        to add a touch of glamour to any ensemble. Let's delve
                        into the captivating description of our gold studs:
                        Material: Each stud is meticulously crafted from
                        high-quality 14-karat or 18-karat gold, ensuring
                        durability and lasting beauty. The lustrous gold
                        captures the essence of luxury, making these studs a
                        perfect investment for your jewelry collection.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Wedding Ring'){
                                              ?*/}
                        Introducing our exquisite collection of gold wedding
                        rings, designed to symbolize the eternal bond of love
                        and commitment. Handcrafted with utmost precision and
                        adorned with timeless elegance, each ring is a testament
                        to exceptional craftsmanship and enduring beauty.
                        Material: Our gold wedding rings are meticulously
                        crafted from the finest quality gold, ensuring both
                        exceptional durability and a luxurious aesthetic. We
                        offer a range of gold options to suit every preference,
                        including classic yellow gold, romantic rose gold, and
                        contemporary white gold.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Necklace'){
                                              ?*/}
                        Introducing the "Eternal Luminescence" Gold Necklace:
                        Add a touch of timeless elegance to your style with our
                        exquisite "Eternal Luminescence" Gold Necklace. This
                        finely crafted piece is designed to embody
                        sophistication and grace. The necklace features a
                        delicate chain made from 18-carat yellow gold, chosen
                        for its beautiful shine and lasting quality.
                        {/*?php   
                                              }
                                              ?*/}
                      </p>
                    </div>
                    <div className="variations">
                      <table cellSpacing={0}>
                        <tbody>
                          {/*<tr>*/}
                          {/*	<td class="label">Size</td>*/}
                          {/*	<td class="attributes">*/}
                          {/*		<ul class="text">*/}
                          {/*			<li><span>L</span></li>*/}
                          {/*			<li><span>M</span></li>*/}
                          {/*			<li><span>S</span></li>*/}
                          {/*		</ul>*/}
                          {/*	</td>*/}
                          {/*</tr>*/}
                          {/*<tr>*/}
                          {/*	<td class="label">Color</td>*/}
                          {/*	<td class="attributes">*/}
                          {/*		<ul class="colors">*/}
                          {/*			<li><span class="color-1"></span></li>*/}
                          {/*			<li><span class="color-2"></span></li>*/}
                          {/*			<li><span class="color-3"></span></li>*/}
                          {/*		</ul>*/}
                          {/*	</td>*/}
                          {/*</tr>*/}
                        </tbody>
                      </table>
                    </div>
                    <div className="buttons">
                      <div className="add-to-cart-wrap">
                        <div className="quantity">
                          <button
                            type="button"
                            className="plus"
                            onclick="addQty()"
                          >
                            +
                          </button>
                          <input
                            type="number"
                            className="qty"
                            id="qty"
                            step={1}
                            min={0}
                            max=""
                            name="quantity"
                            defaultValue={1}
                            title="Qty"
                            size={4}
                            placeholder=""
                            inputMode="numeric"
                            autoComplete="off"
                          />
                          <button
                            type="button"
                            className="minus"
                            onclick="minusQty()"
                          >
                            -
                          </button>
                        </div>
                        <div className="btn-add-to-cart">
                          <a
                            href="javascript:void(0)"
                            tabIndex={0}
                            onclick="addCart('<?php echo $pId ?>')"
                          >
                            Add to cart
                          </a>
                          {/*<button type="button" class="addToCart btn" onclick="addCart('<?php echo $pId ?>')">Add to cart</button>*/}
                        </div>
                      </div>
                      <div className="btn-quick-buy" data-title="Wishlist">
                        <button className="product-btn">Buy It Now</button>
                      </div>
                      <div className="btn-wishlist" data-title="Wishlist">
                        <button
                          className="product-btn"
                          onclick="addWishlist('<?php echo $pId ?>')"
                        >
                          Add to wishlist
                        </button>
                      </div>
                      <div className="btn-compare" data-title="Compare">
                        <button className="product-btn">Compare</button>
                      </div>
                    </div>
                    <div className="product-meta">
                      {/*<span class="sku-wrapper">SKU: <span class="sku">D2300-3-2-2</span></span>*/}
                      <span className="posted-in">
                        Category:{" "}
                        <a href="javascript:void(0)" rel="tag">
                          {/*?php echo $subName ?*/}
                        </a>
                      </span>
                      <span className="tagged-as">
                        No:{" "}
                        <a href="javascript:void(0)" rel="tag">
                          {/*?php echo $row['design_no'] ?*/}
                        </a>
                      </span>
                    </div>
                    {/*<div class="social-share">*/}
                    {/*	<a href="#" title="Facebook" class="share-facebook" target="_blank"><i class="fa fa-facebook"></i>Facebook</a>*/}
                    {/*	<a href="#" title="Twitter" class="share-twitter"><i class="fa fa-twitter"></i>Twitter</a>*/}
                    {/*	<a href="#" title="Pinterest" class="share-pinterest"><i class="fa fa-pinterest"></i>Pinterest</a>*/}
                    {/*</div>					*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-tabs">
            <div className="section-padding" style={{ paddingBottom: 90 }}>
              <div className="section-container p-l-r">
                <div className="product-tabs-wrap">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#description"
                        role="tab"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#additional-information"
                        role="tab"
                      >
                        Additional information
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#reviews"
                        role="tab"
                      >
                        Reviews (1)
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                    >
                      <p style={{ textAlign: "justify" }}>
                        {/*?php
                                              if($subName=='Bangle'){
                                              ?*/}
                        Introducing our exquisite Gold Bangle Collection:
                        Elevate your style and add a touch of timeless elegance
                        with our stunning Gold Bangles. Crafted with precision
                        and attention to detail, each piece in our collection is
                        a testament to exquisite craftsmanship and unparalleled
                        beauty. Whether you're looking for a statement piece or
                        a delicate accessory, our gold bangles are designed to
                        complement any occasion and suit every taste. Material:
                        Our Gold Bangles are meticulously crafted using
                        high-quality, 18-karat gold. This premium material
                        ensures a luxurious finish, durability, and a lustrous
                        shine that will last for generations. We carefully
                        select our gold to provide you with a piece of jewelry
                        that exudes brilliance and sophistication.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Bracelet'){
                                              ?*/}
                        Introducing our exquisite gold bracelet, a true symbol
                        of elegance and timeless beauty. Crafted with utmost
                        precision and attention to detail, this bracelet is
                        designed to adorn your wrist with unparalleled grace.
                        Material: Made from the finest 22K solid gold, this
                        bracelet combines durability with a luxurious appeal.
                        The radiant yellow gold glimmers in the light, adding a
                        touch of opulence to any ensemble.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Chain'){
                                              ?*/}
                        Introducing our Exquisite Gold Chain Collection: Indulge
                        in the timeless allure of our stunning gold chains,
                        meticulously crafted to elevate your style and make a
                        statement. Each piece showcases the perfect blend of
                        luxury, sophistication, and unparalleled craftsmanship.
                        Whether you're looking to enhance your everyday elegance
                        or adorn yourself for a special occasion, our gold
                        chains are designed to captivate and endure. Classic
                        Gold Chain: Unleash the allure of simplicity with our
                        Classic Gold Chain. Crafted with the utmost precision,
                        this chain boasts a seamless blend of understated
                        elegance and enduring style. Its sleek and polished
                        surface reflects light effortlessly, creating a
                        captivating glow. Perfect for any occasion, it
                        effortlessly complements both casual and formal attire.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Charms'){
                                              ?*/}
                        Introducing our exquisite collection of Gold Charms that
                        are designed to add a touch of elegance and
                        personalization to your jewelry collection. Crafted with
                        meticulous attention to detail, our gold charms are the
                        perfect way to express your unique style and commemorate
                        special moments. Timeless Heart Charm: Capture the
                        essence of love with our Timeless Heart Charm. Crafted
                        in gleaming 14K gold, this delicate charm features a
                        classic heart shape, symbolizing affection and devotion.
                        Whether worn on a bracelet or necklace, this timeless
                        piece is a perfect gift for someone special or a
                        beautiful addition to your own collection.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Jhummiki'){
                                              ?*/}
                        Introducing the Exquisite Gold Jhummiki: Welcome to our
                        website, where we proudly present the stunning Gold
                        Jhummiki collection. Our Gold Jhummikis are intricately
                        crafted and beautifully designed pieces of jewelry that
                        celebrate the rich heritage and elegance of Indian
                        culture. With their timeless charm and exquisite
                        craftsmanship, these Jhummikis are perfect for adding a
                        touch of grace and glamour to any occasion. Our Gold
                        Jhummikis are meticulously crafted from high-quality
                        22-karat gold, ensuring a lustrous shine and durability
                        that will last for generations.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Mugappu'){
                                              ?*/}
                        Introducing our exquisite gold Mugappu collection, where
                        traditional charm meets contemporary elegance. Crafted
                        with meticulous attention to detail, our Mugappu designs
                        showcase the timeless beauty of gold, accentuating the
                        grace of every individual who adorns them. Intricate
                        Artistry: Each Mugappu is a testament to the
                        craftsmanship of our skilled artisans. Every stroke and
                        curve is meticulously etched, resulting in intricate
                        patterns and designs that are a delight to behold. Our
                        Mugappu pieces are created with a perfect blend of
                        traditional techniques and modern aesthetics, making
                        them truly unique.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Plain Charms'){
                                              ?*/}
                        Introducing our exquisite collection of Gold Plain
                        Charms, crafted with meticulous attention to detail and
                        designed to add a touch of elegance to any jewelry
                        piece. These timeless charms are perfect for creating
                        personalized bracelets, necklaces, or anklets that
                        reflect your unique style and personality. Each Gold
                        Plain Charm is expertly crafted using high-quality 14K
                        or 18K gold, ensuring durability and a stunning luster
                        that will stand the test of time. The charms feature a
                        sleek and minimalistic design, making them versatile and
                        suitable for any occasion, whether you prefer a casual
                        everyday look or a sophisticated evening ensemble.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Ring'){
                                              ?*/}
                        Introducing the "Eternal Radiance" Gold Ring: Embrace
                        timeless elegance and grace with our exquisite "Eternal
                        Radiance" Gold Ring. Meticulously crafted to perfection,
                        this stunning piece embodies sophistication and beauty,
                        making it an ideal accessory for any occasion. The band
                        of the ring is meticulously handcrafted from 18-carat
                        yellow gold, chosen for its exquisite luster and
                        exceptional durability. Its smooth and polished surface
                        glimmers with a captivating radiance, reflecting the
                        light with every movement.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Stone Charms'){
                                              ?*/}
                        Introducing our exquisite Gold Stone Charms, a
                        collection of enchanting accessories that will add a
                        touch of elegance and charm to your jewelry collection.
                        Crafted with meticulous attention to detail, these
                        stunning charms are the perfect choice to elevate your
                        style and make a statement. Each Gold Stone Charm is
                        meticulously crafted from high-quality 14K gold,
                        ensuring durability and a luxurious shine that will
                        endure for years to come. The captivating centerpiece of
                        each charm is a carefully selected gemstone, known for
                        its beauty and inherent metaphysical properties.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Stud'){
                                              ?*/}
                        Introducing our exquisite gold stud collection, where
                        elegance meets sophistication. Crafted with meticulous
                        attention to detail, these timeless pieces are designed
                        to add a touch of glamour to any ensemble. Let's delve
                        into the captivating description of our gold studs:
                        Material: Each stud is meticulously crafted from
                        high-quality 14-karat or 18-karat gold, ensuring
                        durability and lasting beauty. The lustrous gold
                        captures the essence of luxury, making these studs a
                        perfect investment for your jewelry collection.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Wedding Ring'){
                                              ?*/}
                        Introducing our exquisite collection of gold wedding
                        rings, designed to symbolize the eternal bond of love
                        and commitment. Handcrafted with utmost precision and
                        adorned with timeless elegance, each ring is a testament
                        to exceptional craftsmanship and enduring beauty.
                        Material: Our gold wedding rings are meticulously
                        crafted from the finest quality gold, ensuring both
                        exceptional durability and a luxurious aesthetic. We
                        offer a range of gold options to suit every preference,
                        including classic yellow gold, romantic rose gold, and
                        contemporary white gold.
                        {/*?php   
                                              }
                                              ?*/}
                        {/*?php
                                              if($subName=='Necklace'){
                                              ?*/}
                        Introducing the "Eternal Luminescence" Gold Necklace:
                        Add a touch of timeless elegance to your style with our
                        exquisite "Eternal Luminescence" Gold Necklace. This
                        finely crafted piece is designed to embody
                        sophistication and grace. The necklace features a
                        delicate chain made from 18-carat yellow gold, chosen
                        for its beautiful shine and lasting quality.
                        <br />
                        The design of the pendant is thoughtfully balanced,
                        merging classic and modern elements seamlessly. The
                        result is a piece that effortlessly complements your
                        individual style, whether you're dressing up for a night
                        out or adding a touch of sophistication to your everyday
                        look.
                        <br />
                        Each "Eternal Luminescence" Gold Necklace comes with a
                        certificate of authenticity, ensuring that you're not
                        just buying a piece of jewelry but a genuine work of
                        art. This certificate provides peace of mind, assuring
                        you that the materials and craftsmanship are of the
                        highest quality.
                        {/*?php   
                                              }
                                              ?*/}
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="additional-information"
                      role="tabpanel"
                    >
                      <table className="product-attributes">
                        <tbody>
                          <tr className="attribute-item">
                            <th className="attribute-label">Color</th>
                            <td className="attribute-value">
                              Antique, Chestnut, Grullo
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel">
                      <div id="reviews" className="product-reviews">
                        <div id="comments">
                          <h2 className="reviews-title">
                            1 review for <span>{/*?php echo $subName ?*/}</span>
                          </h2>
                          <ol className="comment-list">
                            <li className="review">
                              <div className="content-comment-container">
                                <div className="comment-container">
                                  <img
                                    src="media/user.jpg"
                                    className="avatar"
                                    height={60}
                                    width={60}
                                    alt=""
                                  />
                                  <div className="comment-text">
                                    <div className="rating small">
                                      <div className="star star-5" />
                                    </div>
                                    <div className="review-author">
                                      Peter Capidal
                                    </div>
                                    <div className="review-time">
                                      January 12, 2023
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nam fringilla augue nec est
                                    tristique auctor. Donec non est at libero
                                    vulputate rutrum. Morbi ornare lectus quis
                                    justo gravida semper. Nulla tellus mi,
                                    vulputate adipiscing cursus eu, suscipit id
                                    nulla.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                        <div id="review-form">
                          <div id="respond" className="comment-respond">
                            <span
                              id="reply-title"
                              className="comment-reply-title"
                            >
                              Add a review
                            </span>
                            <form
                              action="#"
                              method="post"
                              id="comment-form"
                              className="comment-form"
                            >
                              <p className="comment-notes">
                                <span id="email-notes">
                                  Your email address will not be published.
                                </span>{" "}
                                Required fields are marked{" "}
                                <span className="required">*</span>
                              </p>
                              <div className="comment-form-rating">
                                <label htmlFor="rating">Your rating</label>
                                <p className="stars">
                                  <span>
                                    <a className="star-1" href="#">
                                      1
                                    </a>
                                    <a className="star-2" href="#">
                                      2
                                    </a>
                                    <a className="star-3" href="#">
                                      3
                                    </a>
                                    <a className="star-4" href="#">
                                      4
                                    </a>
                                    <a className="star-5" href="#">
                                      5
                                    </a>
                                  </span>
                                </p>
                              </div>
                              <p className="comment-form-comment">
                                <textarea
                                  id="comment"
                                  name="comment"
                                  placeholder="Your Reviews *"
                                  cols={45}
                                  rows={8}
                                  aria-required="true"
                                  required=""
                                  defaultValue={""}
                                />
                              </p>
                              <div className="content-info-reviews">
                                <p className="comment-form-author">
                                  <input
                                    id="author"
                                    name="author"
                                    placeholder="Name *"
                                    type="text"
                                    defaultValue=""
                                    size={30}
                                    aria-required="true"
                                    required=""
                                  />
                                </p>
                                <p className="comment-form-email">
                                  <input
                                    id="email"
                                    name="email"
                                    placeholder="Email *"
                                    type="email"
                                    defaultValue=""
                                    size={30}
                                    aria-required="true"
                                    required=""
                                  />
                                </p>
                                <p className="form-submit">
                                  <input
                                    name="submit"
                                    type="submit"
                                    id="submit"
                                    className="submit"
                                    defaultValue="Submit"
                                  />
                                </p>
                              </div>
                            </form>
                            {/* #respond */}
                          </div>
                        </div>
                        <div className="clear" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-related">
            <div className="section-padding">
              <div className="section-container p-l-r">
                <div className="block block-products slider">
                  <div className="block-title">
                    <h2>Related Products</h2>
                  </div>
                  <div className="block-content">
                    <div className="content-product-list slick-wrap">
                      <div
                        className="slick-sliders products-list grid"
                        data-slidestoscroll="true"
                        data-dots="false"
                        data-nav={1}
                        data-columns4={1}
                        data-columns3={2}
                        data-columns2={3}
                        data-columns1={3}
                        data-columns1440={4}
                        data-columns={4}
                      >
                        {/*?php
                                              $sql=mysqli_query($con,"select design_id, design_no, design_weight, design_image, design_weightfrom, design_weightto, design_from, design_to, design_act, design_jewel_cat  from 
                                              design_tbl  where design_sta='1' && design_sub_cat='$subId' order by rand() limit 4");
                                              while($row= mysqli_fetch_assoc($sql)){
                                          ?*/}
                        <div className="item-product slick-slide">
                          <div className="items">
                            <div className="products-entry clearfix product-wapper">
                              <div className="products-thumb">
                                <div className="product-lable">
                                  <div className="hot">Hot</div>
                                </div>
                                <div className="product-thumb-hover">
                                  <a href="productdetails.php?id=<?php echo encrypt($row['design_id']) ?>">
                                    <img
                                      width={600}
                                      height={600}
                                      src="<?php echo DESIGN_SITE.$row['design_image'] ?>"
                                      onerror="this.src='assets/images/No_Image_Available.jpg';"
                                      className="post-image"
                                      alt=""
                                    />
                                    <img
                                      width={600}
                                      height={600}
                                      src="<?php echo DESIGN_SITE.$row['design_image'] ?>"
                                      onerror="this.src='assets/images/No_Image_Available.jpg';"
                                      className="hover-image back"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="product-button">
                                  <div
                                    className="btn-add-to-cart"
                                    data-title="Add to cart"
                                  >
                                    <a
                                      rel="nofollow"
                                      href="#"
                                      className="product-btn button"
                                      onclick="addCart('<?php echo $pId ?>')"
                                    >
                                      Add to cart
                                    </a>
                                  </div>
                                  <div
                                    className="btn-wishlist"
                                    data-title="Wishlist"
                                  >
                                    <button className="product-btn">
                                      Add to wishlist
                                    </button>
                                  </div>
                                  <div
                                    className="btn-compare"
                                    data-title="Compare"
                                  >
                                    <button className="product-btn">
                                      Compare
                                    </button>
                                  </div>
                                  <span
                                    className="product-quickview"
                                    data-title="Quick View"
                                  >
                                    <a
                                      href="#"
                                      className="quickview quickview-button"
                                    >
                                      Quick View <i className="icon-search" />
                                    </a>
                                  </span>
                                </div>
                              </div>
                              <div className="products-content">
                                <div className="contents text-center">
                                  <h3 className="product-title">
                                    <a href="productdetails.php?id=<?php echo encrypt($row['design_id']) ?>">
                                      {/*?php echo $row['design_no'] ?*/}
                                    </a>
                                  </h3>
                                  <div className="rating">
                                    <div className="star star-5" />
                                  </div>
                                  <span className="price">
                                    Wgt: {/*?php echo $row['design_weight'] ?*/}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*?php } ?*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* #content */}
    </div>
    {/* #primary */}
  </div>
  {/* #main-content */}
</div>

  )
}

export default Productdetails