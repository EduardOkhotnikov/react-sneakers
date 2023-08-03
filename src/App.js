
import './App.css';

function App() {
  return (
    <div className="wrapper clear">
           <div className="overlay">
            <div className="drawer">
              <h2>Cart</h2>
              

              <div className="cartItem d-flex align-center">
                <img className="mr-20" src="/img/1.jpg" width={70} height={70} alt="Sneakers"/>
                <div className="mr-20">
                  <p className="mb-5">Sneakers Paris low men - white and grey</p>
                  <b>130 $</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
           </div>
           </div>
           

     <header className="d-flex justify-between align-center p-40">
      
      <div className='d-flex align-center'><img src="img/icon-logo.png" width={40} height={40} alt="icon"></img>
      <div>
        <h3 className="text-uppercase">React Sneakers</h3>
        <p className="opacity-5">The best sneakers in the store</p></div>
      </div>
      <ul className="d-flex">
        <li className="mr-30"><img src="img/cart.png" width={18} height={18} alt="cart"></img>
        <span>110 $</span></li>
        <li>
        <img src="img/profile.png" width={18} height={18} alt="profile"></img>
        </li>
      </ul>
     </header>
     <div className='content p-40'>
      <div className="d-flex align-center justify-between mb-40">
        <h1>All Sneakers</h1>
        <div className="search-block d-flex p-15">
          <img src="/img/search.png" width={20} height={20} alt="Search"/>
          <input placeholder="Search..."></input>
        </div>
      </div>
<div className="d-flex">
<div className="card">
  <div className="favorite">
  <img src="/img/unliked.svg" alt="Unliked" />
  </div>
      <img src="/img/1.jpg" width={133} height={112} alt="Sneakers"/>
        <h5>Sneakers Paris low men - white and grey</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Price:</span>
            <b>130 $</b>
          </div>
            <button className='button'>
              <img src="/img/plus.png" width={11} height={11} alt="Plus"/>
            </button>
            
          </div>
        </div>
        <div className="card">
      <img src="/img/2.jpg" width={133} height={112} alt="Sneakers"/>
        <h5>Philippe Model Sneakers montecarlo Women NTLDRS04</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Price:</span>
            <b>130 $</b>
          </div>
            <button className='button'>
              <img src="/img/plus.png" width={11} height={11} alt="Plus"/>
            </button>
            
          </div>
        </div>
        <div className="card">
      <img src="/img/3.jpg" width={133} height={112} alt="Sneakers"/>
        <h5>Possession Sneaker SILVER/WHITE – Steve Madden Europe</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Price:</span>
            <b>130 $</b>
          </div>
            <button className='button'>
              <img src="/img/plus.png" width={11} height={11} alt="Plus"/>
            </button>
            
          </div>
        </div>
        <div className="card">
      <img src="/img/4.jpg" width={133} height={112} alt="Sneakers"/>
        <h5>Lacoste Men's Sneakers Powercourt 745SMA0041</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Price:</span>
            <b>130 $</b>
          </div>
            <button className='button'>
              <img src="/img/plus.png" width={11} height={11} alt="Plus"/>
            </button>
            
          </div>
        </div>

</div>
     </div>
    </div>
  );
}

export default App;
