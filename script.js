let cartCount = 0;
let totalPrice = 0;

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        totalPrice += parseFloat(button.getAttribute('data-price'));
        
        document.getElementById('cart-count').innerText = cartCount;
        document.getElementById('total-price').innerText = `$${totalPrice.toFixed(2)}`;
        
        alert("Item added to cart!");
    });
});

// Modal functionality for product description
document.querySelectorAll('.view-description').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const title = product.querySelector('h3').innerText;
        const description = product.getAttribute('data-description');

        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = description;
        
        document.getElementById('modal').style.display = 'block';
    });
});

// Close the modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Close the modal when clicking anywhere outside of it
window.onclick = (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
