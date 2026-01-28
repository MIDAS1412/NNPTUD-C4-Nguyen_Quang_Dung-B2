function getProductImage(item) {
  if (item.images && item.images.length > 0 && item.images[0]) {
    return item.images[0];
  }
  return item.category?.image;
}

const container = document.getElementById("products");

container.innerHTML = data.map(item => `
  <div class="product">
    <img class="main-img"
         src="${getProductImage(item)}"
         alt="${item.title}"
         onerror="this.src='${item.category.image}'">

    <div class="product-body">
      <h3>${item.title}</h3>
      <div class="price">$${item.price}</div>

      <div class="category">
        <img src="${item.category.image}" alt="${item.category.name}">
        <span>${item.category.name}</span>
      </div>

      <div class="desc">${item.description}</div>
    </div>

    <div class="meta">
      <div>ID: ${item.id}</div>
      <div>Slug: ${item.slug}</div>
      <div>Created: ${new Date(item.creationAt).toLocaleString()}</div>
      <div>Updated: ${new Date(item.updatedAt).toLocaleString()}</div>
    </div>
  </div>
`).join("");
