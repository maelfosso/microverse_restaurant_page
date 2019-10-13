import { homeLoad } from './content/home';
import { menuLoad } from './content/menu';
import { contactLoad } from './content/contact';

const initialLoad = () => {
  let content = `
    <div>
      <img src="restaurant_inside.jpg" alt="Restaurant Inside"/>
      <h1>A Restaurant</h1>
    </div>

    <div class="tabsy">
      <input type="radio" id="home" name="tab" checked="">
      <label class="tabButton" for="home">Home</label>
      
      <input type="radio" id="menu" name="tab">
      <label class="tabButton" for="menu">Menu</label>
      

      <input type="radio" id="contact" name="tab">
      <label class="tabButton" for="contact">Contact</label>
      

      <div class="tab">
          <div class="content" id="tab-content">
              
          </div>
      </div>

    </div>
  `;
  document.getElementById('content').innerHTML = content;
  homeLoad();

  addListener();
}


const addListener = () => {
  document.getElementById("content").addEventListener('click', function(e) {
    switch (e.target.innerHTML) {
      case 'Home':
        homeLoad();

        break;
      case 'Menu':
        menuLoad();

        break;
      case 'Contact':
        contactLoad();

        break;
      default:

    }
  });
};

export {
  initialLoad
}