import Image from "next/image";

export default function Home() {
  return (
   <div className="container-dash">
    
      <div className="title-info">
        <h2 className="title-dash">Dashboard</h2>
        <i className="fa-solid fa-chart-bar"></i>
      </div>
      <div className="content">
        <div className="list1">
        <div> 
          <i className="fa-solid fa-user"></i>
        </div>
          <div className="content-info">
            <p>users</p>
            <span>100</span>
          </div>
        </div>
        <div className="list1">
        <div> 
          <i className="fa-solid fa-pen"></i>
        </div>
          <div className="content-info">
            <p>Posts</p>
            <span>34</span>
          </div>
        </div>
        <div className="list1">
        <div> 
          <i className="fa-solid fa-newspaper"></i>
        </div>
          <div className="content-info">
            <p>Products</p>
            <span>654</span>
          </div>
        </div>
        <div className="list1">
        <div> 
        <i className="fa-solid fa-dollar-sign"></i>
        </div>
          <div className="content-info">
            <p>revenue</p>
            <span>143$</span>
          </div>
        </div>
        
      </div>
    <div>
       <div className="title-info title-info2">
        <h2 className="title-dash">Products</h2>
        <i className="fa-solid fa-newspaper"></i>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>count</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>tv</span></td>
              <td><span className="price">887$</span></td>
              <td><span className="count">123</span></td>
            </tr>
            <tr>
              <td><span>laptop</span></td>
              <td><span  className="price">1267$</span></td>
              <td><span className="count">23</span></td>
            </tr>
            <tr>
              <td><span>Phone</span></td>
              <td><span  className="price">267$</span></td>
              <td><span className="count">21</span></td>
            </tr>
            <tr>
              <td><span>wash machine</span></td>
              <td><span  className="price">236$</span></td>
              <td><span className="count">4</span></td>
            </tr>
            <tr>
              <td><span>Keyboard</span></td>
              <td><span  className="price">12$</span></td>
              <td><span className="count">3556</span></td>
            </tr>
            <tr>
              <td><span>tv</span></td>
              <td><span  className="price">887$</span></td>
              <td><span className="count">123</span></td>
            </tr>
            <tr>
              <td><span>Phone</span></td>
              <td><span  className="price">1276$</span></td>
              <td><span className="count">298</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </div>
  );
}
