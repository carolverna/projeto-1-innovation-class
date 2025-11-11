document.addEventListener("DOMContentLoaded", () => {

  // CÓDIGO DE BUSCA
  const searchButton = document.getElementById("searchButton")
  const searchInput = document.getElementById("searchInput")
  const searchResult = document.getElementById("searchResult")

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim()

    if (searchTerm) {
      searchResult.textContent = `Você buscou por: '${searchTerm}'`
      searchResult.classList.add("active")

      searchResult.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  })

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchButton.click()
    }
  })

  // CÓDIGO DO MEGA-MENU
  const categoriesButton = document.getElementById("categoriesButton")
  const megaMenu = document.getElementById("megaMenu")
  const mainNav = document.querySelector(".main-nav")

  function positionMegaMenu(menu) {
    if (mainNav && menu) {
      const navRect = mainNav.getBoundingClientRect()
      menu.style.top = (navRect.bottom) + "px"
    }
  }

  if (categoriesButton && megaMenu) {
    categoriesButton.addEventListener("mouseenter", () => {
      closeAllDepartmentMenus()
      positionMegaMenu(megaMenu)
      megaMenu.classList.add("active")
      categoriesButton.classList.add("active")
    })

    megaMenu.addEventListener("mouseenter", () => {
      megaMenu.classList.add("active")
      categoriesButton.classList.add("active")
    })

    categoriesButton.addEventListener("mouseleave", (e) => {
      setTimeout(() => {
        if (!megaMenu.matches(":hover")) {
          megaMenu.classList.remove("active")
          categoriesButton.classList.remove("active")
        }
      }, 100)
    })

    megaMenu.addEventListener("mouseleave", () => {
      megaMenu.classList.remove("active")
      categoriesButton.classList.remove("active")
    })
  }

  function closeAllDepartmentMenus() {
    const allDepartmentMenus = document.querySelectorAll(".department-mega-menu")
    allDepartmentMenus.forEach((menu) => {
      menu.classList.remove("active")
    })
  }

  const departmentItems = document.querySelectorAll(".has-mega-menu")

  departmentItems.forEach((item, index) => {
    const departmentLink = item.querySelector("a")
    const departmentMegaMenu = item.querySelector(".department-mega-menu")

    if (departmentLink && departmentMegaMenu) {
      departmentLink.addEventListener("mouseenter", () => {
        megaMenu.classList.remove("active")
        closeAllDepartmentMenus()
        removeAllMenuOpenClasses()
        positionMegaMenu(departmentMegaMenu)
        departmentMegaMenu.classList.add("active")
        item.classList.add("menu-open")
      })

      item.addEventListener("mouseenter", () => {
        removeAllMenuOpenClasses()
        positionMegaMenu(departmentMegaMenu)
        departmentMegaMenu.classList.add("active")
        item.classList.add("menu-open")
      })

      departmentMegaMenu.addEventListener("mouseenter", () => {
        departmentMegaMenu.classList.add("active")
        item.classList.add("menu-open")
      })

      item.addEventListener("mouseleave", (e) => {
        const relatedTarget = e.relatedTarget
        if (!departmentMegaMenu.contains(relatedTarget)) {
          setTimeout(() => {
            if (!item.matches(":hover") && !departmentMegaMenu.matches(":hover")) {
              departmentMegaMenu.classList.remove("active")
              item.classList.remove("menu-open")
            }
          }, 100)
        }
      })

      departmentMegaMenu.addEventListener("mouseleave", (e) => {
        const relatedTarget = e.relatedTarget
        if (!item.contains(relatedTarget)) {
          departmentMegaMenu.classList.remove("active")
          item.classList.remove("menu-open")
        }
      })
    }
  })

  function removeAllMenuOpenClasses() {
    departmentItems.forEach((item) => {
      item.classList.remove("menu-open")
    })
  }

  window.addEventListener("scroll", () => {
    if (megaMenu && megaMenu.classList.contains("active")) {
      positionMegaMenu(megaMenu)
    }
    departmentItems.forEach((item) => {
      const departmentMegaMenu = item.querySelector(".department-mega-menu")
      if (departmentMegaMenu && departmentMegaMenu.classList.contains("active")) {
        positionMegaMenu(departmentMegaMenu)
      }
    })
  })


  const Swiper = window.Swiper
  
  // Variáveis para guardar as instâncias dos carrosséis
  let swiper1
  let swiper2

  // Função para inicializar os carrosséis
  function handleSwiper() {
    // Inicializa o Swiper 1 se ele ainda não foi inicializado
    if (!swiper1 && Swiper) {
      swiper1 = new Swiper(".productsSwiper1", {
        slidesPerView: 2,
        spaceBetween: 32,
        navigation: {
          nextEl: ".productsSwiper1 .swiper-button-next",
          prevEl: ".productsSwiper1 .swiper-button-prev",
        },
        pagination: {
          el: ".productsSwiper1 .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      })
    }

    // Inicializa o Swiper 2
    if (!swiper2 && Swiper) {
      swiper2 = new Swiper(".productsSwiper2", {
        slidesPerView: 2,
        spaceBetween: 32,
        navigation: {
          nextEl: ".productsSwiper2 .swiper-button-next",
          prevEl: ".productsSwiper2 .swiper-button-prev",
        },
        pagination: {
          el: ".productsSwiper2 .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      })
    }
  }

  handleSwiper()
  const footerColumns = document.querySelectorAll('.footer-column')

  footerColumns.forEach(column => {
    const heading = column.querySelector('h4')
    if (heading && window.innerWidth <= 768) {
      heading.addEventListener('click', () => {
        column.classList.toggle('active')
      })
    }
  })

  // Handle resize for footer accordion
  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768
    footerColumns.forEach(column => {
      const heading = column.querySelector('h4')
      if (heading && !isMobile) {
        column.classList.remove('active')
      }
    })
  })

}) 
