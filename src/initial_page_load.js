const initialLoad = () => {
  let content = `
    <div>
      <img src="restaurant_inside.jpg" alt="Restaurant Inside"/>
      <h1>A Restaurant</h1>
    </div>

    <div class="tabsy">
      <input type="radio" id="tab1" name="tab" checked="">
      <label class="tabButton" for="tab1">Tab One</label>
      
      <div class="tab">
          <div class="content">
              <h3>Heading 1</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
      </div>

      <input type="radio" id="tab2" name="tab">
      <label class="tabButton" for="tab2">Tab Two</label>
      
      <div class="tab">
        <div class="content">
            <h3>Heading 2</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>

      <input type="radio" id="tab3" name="tab">
      <label class="tabButton" for="tab3">Tab Three</label>
      
      <div class="tab">
          <div class="content">
              <h3>Heading 3</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
      </div>

    </div>
  `;
  document.getElementById('content').innerHTML = content;
}

export {
  initialLoad
}