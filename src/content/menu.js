const menuLoad = () => {
  let content = `
    <h3>Menu</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
  `;

  document.getElementById("tab-content").innerHTML = content;
}

export {
  menuLoad
};