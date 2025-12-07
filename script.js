// Product Data (30 items)
const products = [
  {
    id: 1,
    name: "Poco F7",
    brand: "Xiaomi",
    price: 5800000,
    image:
      "images/poco_f7.png",
  },
  {
    id: 2,
    name: "Poco X6 Pro",
    brand: "Xiaomi",
    price: 5300000,
    image:
      "images/poco_x6pro.png",
  },
  {
    id: 3,
    name: "Redmi Note 14 Pro",
    brand: "Xiaomi",
    price: 3800000,
    image: "images/redmi_note14pro.png",
  },
  {
    id: 4,
    name: "Vivo V30",
    brand: "Vivo",
    price: 5800000,
    image:
      "images/vivo_v30.png",
  },
  {
    id: 5,
    name: "Redmi Note 14",
    brand: "Xiaomi",
    price: 2600000,
    image: "images/redmi_note14.png",
  },
  {
    id: 6,
    name: "Redmi Note 14 Pro+",
    brand: "Xiaomi",
    price: 4900000,
    image:
      "images/redmi_note14proplus.png",
  },
  {
    id: 7,
    name: "Samsung Galaxy A15",
    brand: "Samsung",
    price: 2700000,
    image:
      "images/samsung_a15.png",
  },
  {
    id: 8,
    name: "Samsung Galaxy A25",
    brand: "Samsung",
    price: 3800000,
    image: "images/samsung_a25.png",
  },
  {
    id: 9,
    name: "Samsung Galaxy A35",
    brand: "Samsung",
    price: 4800000,
    image:
      "images/samsung_a35.png",
  },
  {
    id: 10,
    name: "Samsung Galaxy A05",
    brand: "Samsung",
    price: 1500000,
    image: "images/samsung_a05.png",
  },
  {
    id: 11,
    name: "Samsung Galaxy A05s",
    brand: "Samsung",
    price: 2200000,
    image:
      "images/samsung_a05s.png",
  },
  {
    id: 12,
    name: "Samsung Galaxy S23 FE",
    brand: "Samsung",
    price: 8600000,
    image:
      "images/samsung_s23fe.png",
  },
  {
    id: 13,
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    price: 19200000,
    image: "images/samsung_s23ultra.png",
  },
  {
    id: 14,
    name: "Samsung Galaxy Z Fold 7",
    brand: "Samsung",
    price: 25000000,
    image: "images/samsung_zfold7.png",
  },
  {
    id: 15,
    name: "Vivo V30e",
    brand: "Vivo",
    price: 4300000,
    image: "images/vivo_v30e.png",
  },
  {
    id: 16,
    name: "Vivo Y100",
    brand: "Vivo",
    price: 3800000,
    image:
      "images/vivo_y100.png",
  },
  {
    id: 17,
    name: "Vivo Y17s",
    brand: "Vivo",
    price: 2100000,
    image:
      "images/vivo_y17s.png",
  },
  {
    id: 18,
    name: "Vivo Y27s",
    brand: "Vivo",
    price: 3000000,
    image: "images/vivo_y27s.png",
  },
  {
    id: 19,
    name: "Oppo Reno 11",
    brand: "Oppo",
    price: 4200000,
    image:
      "images/oppo_reno11.png",
  },
  {
    id: 20,
    name: "Oppo Reno11 F",
    brand: "Oppo",
    price: 4400000,
    image: "images/oppo_reno11f.png",
  },
  {
    id: 21,
    name: "Oppo A79",
    brand: "Oppo",
    price: 3900000,
    image:
      "images/oppo_a79.png",
  },
  {
    id: 22,
    name: "Oppo A38",
    brand: "Oppo",
    price: 2200000,
    image:
      "images/oppo_a38.png",
  },
  {
    id: 23,
    name: "Realme C53",
    brand: "Realme",
    price: 2300000,
    image: "images/realme_c53.png",
  },
  {
    id: 24,
    name: "Realme C55",
    brand: "Realme",
    price: 2600000,
    image:
      "images/realme_c55.png",
  },
  {
    id: 25,
    name: "Redmi A5",
    brand: "Xiaomi",
    price: 1200000,
    image: "images/redmi_a5.png",
  },
  {
    id: 26,
    name: "Realme GT Neo 6",
    brand: "Realme",
    price: 5800000,
    image:
      "images/realme_gtneo6.png",
  },
  {
    id: 27,
    name: "Infinix Hot 40i",
    brand: "Infinix",
    price: 1900000,
    image:
      "images/infinix_hote40i.png",
  },
  {
    id: 28,
    name: "Infinix Note 40",
    brand: "Infinix",
    price: 2900000,
    image: "images/infinix_note40.png",
  },
  {
    id: 29,
    name: "Infinix Zero 30",
    brand: "Infinix",
    price: 4300000,
    image: "images/infinix_zero30.png",
  },
  {
    id: 30,
    name: "Tecno Spark 40 Pro+",
    brand: "Tecno",
    price: 2400000,
    image: "images/tecno_spark40proplus.png",
  },
]

// State
let cart = []
let currentFilter = "all"

// DOM Elements
const productGrid = document.getElementById("productGrid")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const cartBtn = document.getElementById("cartBtn")
const cartModal = document.getElementById("cartModal")
const closeCart = document.getElementById("closeCart")
const overlay = document.getElementById("overlay")
const cartItemsContainer = document.getElementById("cartItems")
const cartTotalElement = document.getElementById("cartTotal")
const cartCountElement = document.getElementById("cartCount")
const checkoutBtn = document.getElementById("checkoutBtn")
const filterBtns = document.querySelectorAll(".filter-btn")

// Format Currency
const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number)
}

// Render Products
const renderProducts = (productsToRender) => {
  productGrid.innerHTML = ""

  if (productsToRender.length === 0) {
    productGrid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: var(--text-secondary);">Produk tidak ditemukan.</p>'
    return
  }

  productsToRender.forEach((product) => {
    const card = document.createElement("div")
    card.className = "product-card"
    card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x300?text=No+Image'">
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatRupiah(product.price)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
                </button>
            </div>
        `
    productGrid.appendChild(card)
  })
}

// Filter Products
const filterProducts = (category) => {
  currentFilter = category
  if (category === "all") {
    renderProducts(products)
  } else {
    const filtered = products.filter((p) => p.brand === category)
    renderProducts(filtered)
  }
}

// Search Products
const searchProducts = () => {
  const query = searchInput.value.toLowerCase()
  const filtered = products.filter((p) => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query))
  renderProducts(filtered)

  // Reset filter buttons visual state
  filterBtns.forEach((btn) => btn.classList.remove("active"))
}

// Cart Functions
const addToCart = (productId) => {
  const product = products.find((p) => p.id === productId)
  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  updateCartUI()
  openCart()
}

const removeFromCart = (productId) => {
  cart = cart.filter((item) => item.id !== productId)
  updateCartUI()
}

const updateQuantity = (productId, change) => {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeFromCart(productId)
    } else {
      updateCartUI()
    }
  }
}

const updateCartUI = () => {
  // Update Count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCountElement.textContent = totalItems

  // Update Total Price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotalElement.textContent = formatRupiah(totalPrice)

  // Render Items
  cartItemsContainer.innerHTML = ""

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Keranjang masih kosong</div>'
    return
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"
    cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://via.placeholder.com/70x70?text=No+Image'">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatRupiah(item.price)}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <i class="fas fa-trash remove-item" onclick="removeFromCart(${item.id})"></i>
                </div>
            </div>
        `
    cartItemsContainer.appendChild(cartItem)
  })
}

const openCart = () => {
  cartModal.classList.add("active")
  overlay.classList.add("active")
}

const closeCartModal = () => {
  cartModal.classList.remove("active")
  overlay.classList.remove("active")
}

// WhatsApp Checkout
const checkout = () => {
  if (cart.length === 0) {
    alert("Keranjang belanja Anda kosong!")
    return
  }

  let message = "Halo, saya ingin memesan HP berikut:\n\n"
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (${item.quantity}x) - ${formatRupiah(item.price * item.quantity)}\n`
  })

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  message += `\nTotal: ${formatRupiah(totalPrice)}`
  message += "\n\nMohon info ketersediaannya. Terima kasih!"

  const encodedMessage = encodeURIComponent(message)
  const whatsappNumber = "6282298840732"
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products)
})

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((b) => b.classList.remove("active"))
    e.target.classList.add("active")
    filterProducts(e.target.dataset.filter)
  })
})

searchBtn.addEventListener("click", searchProducts)
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchProducts()
  }
})

cartBtn.addEventListener("click", openCart)
closeCart.addEventListener("click", closeCartModal)
overlay.addEventListener("click", closeCartModal)
checkoutBtn.addEventListener("click", checkout)
