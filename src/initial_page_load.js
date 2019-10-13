const initialLoad = () => {
  let content = `
  <div>
    <img src="restaurant_inside.jpg" alt="Restaurant Inside"/>
    <h1>A Restaurant</h1>
  </div>
  `;
  document.getElementById('content').innerHTML = content;
}

export {
  initialLoad
}