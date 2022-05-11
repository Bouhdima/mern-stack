import './App.css';
import data from './data';
function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Bouhdima</a>
      </header>
      <main>
        <h1>Featured product</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/products/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p><strong>${product.price}</strong></p>
              </div>
              <button className="btn btn-warning">Add to cart</button>
            </div>
          ))}{' '}
        </div>
      </main>
    </div>
  );
}

export default App;
