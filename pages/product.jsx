import React from 'react'

const Product = () => {
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
              {/*?php echo $subName ?*/}
            </h1>
          </div>
          <div className="breadcrumbs" style={{ color: "#fff" }}>
            <a href="index" style={{ color: "#fff" }}>
              Home
            </a>
            <span className="delimiter" />
            <a href="product.php" style={{ color: "#fff" }}>
              Shop
            </a>
            <span className="delimiter" />
            {/*?php echo $subName ?*/}
          </div>
        </div>
      </div>
      <div id="content" className="site-content" role="main">
        <div className="section-padding">
          <div className="section-container p-l-r">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50 p-t-10">
                {/* Block Product Categories */}
                <div className="block block-product-cats">
                  <div className="block-title">
                    <h2>Categories</h2>
                  </div>
                  <div className="block-content">
                    <div className="product-cats-list">
                      <ul>
                        {/*?php
                                                          $sql=mysqli_query($con,"SELECT sub_cat_id, sub_cat_name FROM sub_category_tbl where category_id = '$cId' && sub_cat_sta");
                                                          while($row= mysqli_fetch_assoc($sql)){
                                                              
                                                              $res1 = mysqli_query($con,"SELECT count(design_id) as TCOUNT FROM design_tbl 
                                                              where  design_sta='1' && design_sub_cat='".$row['sub_cat_id']."' ");
                                                              $row2 = mysqli_fetch_assoc($res1);
                                                              
                                                      ?*/}
                        <li className="current">
                          <a href="product.php?sId=<?php echo encrypt($row['sub_cat_id']) ?>">
                            {/*?php echo $row['sub_cat_name'] ?*/}{" "}
                            <span
                              className="count"
                              style={{ borderRadius: 0, width: 35 }}
                            >
                              {/*?php echo $row2['TCOUNT'] ?*/}
                            </span>
                          </a>
                        </li>
                        {/*?php } ?*/}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Block Product Filter */}
                {/*<div class="block block-product-filter">*/}
                {/*	<div class="block-title"><h2>Price</h2></div>*/}
                {/*	<div class="block-content">*/}
                {/*		<div id="slider-range" class="price-filter-wrap">*/}
                {/*			<div class="filter-item price-filter">*/}
                {/*				<div class="layout-slider">*/}
                {/*					<input id="price-filter" name="price" value="0;100" />*/}
                {/*				</div>*/}
                {/*				<div class="layout-slider-settings"></div>*/}
                {/*			</div>*/}
                {/*		</div>*/}
                {/*	</div>*/}
                {/*</div>*/}
                {/* Block Product Filter */}
                {/*<div class="block block-product-filter clearfix">*/}
                {/*	<div class="block-title"><h2>Size</h2></div>*/}
                {/*	<div class="block-content">*/}
                {/*		<ul class="filter-items text">*/}
                {/*			<li><a href="#"><span>L</span></a></li>*/}
                {/*			<li><a href="#"><span>M</span></a></li>*/}
                {/*			<li><a href="#"><span>S</span></a></li>*/}
                {/*		</ul>*/}
                {/*	</div>*/}
                {/*</div>*/}
                {/* Block Product Filter */}
                {/*<div class="block block-product-filter clearfix">*/}
                {/*	<div class="block-title"><h2>Brands</h2></div>*/}
                {/*	<div class="block-content">*/}
                {/*		<ul class="filter-items image">*/}
                {/*			<li><a href="#"><span><img src="media/brand/1.jpg" alt="Brand"></span></a></li>*/}
                {/*			<li><a href="#"><span><img src="media/brand/2.jpg" alt="Brand"></span></a></li>*/}
                {/*			<li><a href="#"><span><img src="media/brand/3.jpg" alt="Brand"></span></a></li>*/}
                {/*			<li><a href="#"><span><img src="media/brand/4.jpg" alt="Brand"></span></a></li>*/}
                {/*			<li><a href="#"><span><img src="media/brand/5.jpg" alt="Brand"></span></a></li>*/}
                {/*		</ul>*/}
                {/*	</div>*/}
                {/*</div>*/}
                {/* Block Products */}
                <div className="block block-products">
                  <div className="block-title">
                    <h2>Feature Product</h2>
                  </div>
                  <div className="block-content">
                    <ul className="products-list">
                      {/*?php
                                                      $sql=mysqli_query($con,"select design_id, design_no, design_weight, design_image, design_weightfrom, design_weightto, design_from, design_to, design_act, design_jewel_cat  from 
                                                      design_tbl  where design_sta='1' && design_sub_cat='$subId' order by rand() limit 4");
                                                      while($row= mysqli_fetch_assoc($sql)){
                                                  ?*/}
                      <li className="product-item">
                        <a
                          href="productdetails.php?id=<?php echo encrypt($row['design_id']) ?>"
                          className="product-image"
                        >
                          <img
                            src="<?php echo DESIGN_SITE.$row['design_image'] ?>"
                            onerror="this.src='assets/images/No_Image_Available.jpg';"
                          />
                        </a>
                        <div className="product-content">
                          <h2 className="product-title">
                            <a href="productdetails.php?id=<?php echo encrypt($row['design_id']) ?>">
                              {/*?php echo $row['design_no'] ?*/}
                            </a>
                          </h2>
                          <div className="rating">
                            <div className="star star-5" />
                          </div>
                          <span className="price">
                            <ins>
                              <span>
                                Wgt: {/*?php echo $row['design_weight'] ?*/}
                              </span>
                            </ins>
                          </span>
                        </div>
                      </li>
                      {/*?php } ?*/}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                {/*<div class="products-topbar clearfix">*/}
                {/*	<div class="products-topbar-left">*/}
                {/*		<div class="products-count">*/}
                {/*			Showing all 24 results*/}
                {/*		</div>*/}
                {/*	</div>*/}
                {/*	<div class="products-topbar-right">*/}
                {/*		<div class="products-sort dropdown">*/}
                {/*			<span class="sort-toggle dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Default sorting</span>*/}
                {/*			<ul class="sort-list dropdown-menu" x-placement="bottom-start">*/}
                {/*				<li class="active"><a href="#">Default sorting</a></li>*/}
                {/*				<li><a href="#">Sort by popularity</a></li>*/}
                {/*				<li><a href="#">Sort by average rating</a></li>*/}
                {/*				<li><a href="#">Sort by latest</a></li>*/}
                {/*				<li><a href="#">Sort by price: low to high</a></li>*/}
                {/*				<li><a href="#">Sort by price: high to low</a></li>*/}
                {/*			</ul>*/}
                {/*		</div>*/}
                {/*		<ul class="layout-toggle nav nav-tabs">*/}
                {/*			<li class="nav-item">*/}
                {/*				<a class="layout-grid nav-link active" data-toggle="tab" href="#layout-grid" role="tab"><span class="icon-column"><span class="layer first"><span></span><span></span><span></span></span><span class="layer middle"><span></span><span></span><span></span></span><span class="layer last"><span></span><span></span><span></span></span></span></a>*/}
                {/*			</li>*/}
                {/*			<li class="nav-item">*/}
                {/*				<a class="layout-list nav-link" data-toggle="tab" href="#layout-list" role="tab"><span class="icon-column"><span class="layer first"><span></span><span></span></span><span class="layer middle"><span></span><span></span></span><span class="layer last"><span></span><span></span></span></span></a>*/}
                {/*			</li>*/}
                {/*		</ul>*/}
                {/*	</div>*/}
                {/*</div>*/}
                <div className="tab-content greybg ">
                  <div
                    className="tab-pane fade show active"
                    id="layout-grid"
                    role="tabpanel"
                  >
                    <div className="products-list grid ">
                      <div className="filter_data"></div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="layout-list"
                    role="tabpanel"
                  ></div>
                </div>
                <input
                  type="hidden"
                  id="category"
                  defaultValue="<?php echo $cId ?>"
                />
                <input
                  type="hidden"
                  id="subcategory"
                  defaultValue="<?php echo $subId ?>"
                />
                <input type="hidden" id="pagination" defaultValue={0} />
                <input
                  type="hidden"
                  id="maxpage"
                  defaultValue="<?php echo floor($row1['TCOUNT']/24)+1 ?>"
                />
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

export default Product