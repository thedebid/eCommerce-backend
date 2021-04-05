import React from "react";
import { Link } from "react-router-dom";
// import { Donut } from "react-dial-knob";
// import { Sparklines, SparklinesBars } from 'react-sparklines';
// import DonutChart from "./donutChart";
// import SalesChart from "./salesChart";
// import Sparklinechart from "./sparklinechart";
// import Sparklinecustomchart from "./sparklinecustomchart";
import SparkLineBoxChart from "./sparkLineBoxChart";
// import FinancialChart from "./financialChart";
// import BarChart from "./barChart";

const Dashboard11 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="block-header">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12">
              <h1>eCommerce Analytics</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Oculux</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">My page</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    eCommerce Analytics
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="w_summary">
                  <div className="s_chart">
                    <span className="chart">
                      <SparkLineBoxChart />
                    </span>
                  </div>
                  <div className="s_detail">
                    <h2 className="font700 mb-0">$15K</h2>
                    <span>
                      67% <i className="fa fa-level-up text-success"></i> Total
                      income
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="w_summary">
                  <div className="s_chart">
                    <span className="chart">
                      <SparkLineBoxChart />
                    </span>
                  </div>
                  <div className="s_detail">
                    <h2 className="font700 mb-0">$1258</h2>
                    <span>
                      15% <i className="fa fa-level-up text-success"></i> Total
                      Expense
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="w_summary">
                  <div className="s_chart">
                    <span className="chart">
                      <SparkLineBoxChart />
                    </span>
                  </div>
                  <div className="s_detail">
                    <h2 className="font700 mb-0">$2315</h2>
                    <span>
                      23% <i className="fa fa-level-up text-success"></i> Total
                      Growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="body">
                <div className="w_summary">
                  <div className="s_chart">
                    <span className="chart">
                      <SparkLineBoxChart />
                    </span>
                  </div>
                  <div className="s_detail">
                    <h2 className="font700 mb-0">$1025</h2>
                    <span>
                      52% <i className="fa fa-level-up text-success"></i> Bounce
                      Rate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Page Views(Avg)</h2>
              </div>
              <div className="body text-center">
                <h4>6.25</h4>
                <p className="mb-2">
                  <span>
                    <i className="fa fa-caret-up text-success ml-1"></i> +1.12
                  </span>{" "}
                  vs last month (4.0)
                </p>
                <div id="Page_Views" style={{ height: "140px" }}>
                  <BarChart />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="body">
                <div className="card-value float-right text-muted">
                  <i className="icon-bubbles"></i>
                </div>
                <h3 className="mb-1">2,54,021</h3>
                <div>Total Clicks</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Order status</h2>
              </div>
              <div className="body text-center">
                <div id="Order_status" style={{ height: "268px" }}>
                  <DonutChart />
                </div>
                <hr />
                <div className="row clearfix">
                  <div className="col-6">
                    <h6 className="mb-0">$3,095</h6>
                    <small className="text-muted">Last Month</small>
                  </div>
                  <div className="col-6">
                    <h6 className="mb-0">$2,763</h6>
                    <small className="text-muted">This Month</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Sales Reports</h2>
              </div>
              <div className="body">
                <small className="text-muted">
                  Sales Performance for Online and Offline Revenue
                </small>
                <SalesChart />
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="header">
                <h2>Product Valuation</h2>
              </div>
              <div className="body">
                <div id="chart-bar" style={{ height: "350px" }}>
                  <FinancialChart />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="header">
                <h2>Sales Revenue</h2>
              </div>
              <div className="body text-center">
                <div className="mt-4">
                  <Donut
                    className="knob"
                    diameter={147}
                    min={0}
                    max={100}
                    step={1}
                    value={34}
                    theme={{
                      donutThickness: 5,
                      donutColor: "#ffd861",
                      centerColor: "#282B2F",
                      bgrColor: "#383b40",
                    }}
                  />
                </div>
                <h3 className="mb-0 mt-3 font300">
                  24,301 <span className="text-green font-15">+3.7%</span>
                </h3>
                <small>
                  Lorem Ipsum is simply dummy text <br />{" "}
                  <a href="/">Read more</a>{" "}
                </small>
                <div className="mt-4">
                  <span className="chart_3">
                    <Sparklinechart />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="header">
                <h2>My Balance</h2>
              </div>
              <div className="body">
                <div className="card-value float-right text-blue">+15%</div>
                <h4 className="mb-0 mt-2">$5,021.00</h4>
              </div>
              <div className="card-chart-bg">
                <span id="linecustom">
                  <Sparklinecustomchart />
                </span>
              </div>
            </div>
            <div className="card">
              <div className="body top_counter">
                <div className="icon bg-success text-white">
                  <i className="fa fa-area-chart"></i>{" "}
                </div>
                <div className="content">
                  <span>Growth</span>
                  <h5 className="number mb-0">62%</h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="body top_counter">
                <div className="icon bg-warning text-white">
                  <i className="fa fa-building"></i>{" "}
                </div>
                <div className="content">
                  <span>Properties</span>
                  <h5 className="number mb-0">53,251</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix"> */}
        <div className="col-12 col-sm-12">
          <div className="card">
            <div className="header">
              <h2>Product Summary</h2>
            </div>
            <div className="table-responsive">
              <table className="table table-custom spacing5 mb-0">
                <thead>
                  <tr>
                    <th>#No</th>
                    <th>Client Name</th>
                    <th>Product ID</th>
                    <th>Product</th>
                    <th>Product Cost</th>
                    <th>Payment Mode</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#01</td>
                    <td>Sean Black</td>
                    <td>PRO12345</td>
                    <td>Mi LED Smart TV 4A 80</td>
                    <td>$14,500</td>
                    <td>Online Payment</td>
                    <td>
                      <span className="badge badge-success">Delivered</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#02</td>
                    <td>Evan Rees</td>
                    <td>PRO8765</td>
                    <td>Thomson R9 122cm (48 inch) Full HD LED TV </td>
                    <td>$30,000</td>
                    <td>Cash on delivered</td>
                    <td>
                      <span className="badge badge-primary">Add Cart</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#03</td>
                    <td>David Wallace</td>
                    <td>PRO54321</td>
                    <td>Vu 80cm (32 inch) HD Ready LED TV</td>
                    <td>$13,200</td>
                    <td>Online Payment</td>
                    <td>
                      <span className="badge badge-warning">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#04</td>
                    <td>Julia Bower</td>
                    <td>PRO97654</td>
                    <td>Micromax 81cm (32 inch) HD Ready LED TV</td>
                    <td>$15,100</td>
                    <td>Cash on delivered</td>
                    <td>
                      <span className="badge badge-secondary">Delivering</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#05</td>
                    <td>Kevin James</td>
                    <td>PRO4532</td>
                    <td>HP 200 Mouse &amp; Wireless Laptop Keyboard </td>
                    <td>$5,987</td>
                    <td>Online Payment</td>
                    <td>
                      <span className="badge badge-danger">Shipped</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#06</td>
                    <td>Theresa Wright</td>
                    <td>PRO6789</td>
                    <td>Digisol DG-HR3400 Router </td>
                    <td>$11,987</td>
                    <td>Cash on delivered</td>
                    <td>
                      <span className="badge badge-success">Delivering</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#07</td>
                    <td>Sebastian Black</td>
                    <td>PRO4567</td>
                    <td>Dell WM118 Wireless Optical Mouse</td>
                    <td>$4,700</td>
                    <td>Online Payment</td>
                    <td>
                      <span className="badge badge-secondary">Add to Cart</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#08</td>
                    <td>Kevin Glover</td>
                    <td>PRO32156</td>
                    <td>Dell 16 inch Laptop Backpack </td>
                    <td>$678</td>
                    <td>Cash On delivered</td>
                    <td>
                      <span className="badge badge-cyan">Delivered</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard11;
