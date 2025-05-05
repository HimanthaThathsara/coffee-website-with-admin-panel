document.addEventListener("DOMContentLoaded", () => {
    const BlogListNew = document.querySelector('.blog-list');
  
    const Blog = [
        { "id": 1,
          "name": "Brown Sugar Cream Cold Brew", 
          "Date": "Jun 20", 
          "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/img/blog/blog-1.jpg" },
  
        { "id": 2, 
          "name": "Mocha Frappuccino", 
          "Date": "Jun 21", 
          "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/img/blog/blog-2.jpg" },
  
        { "id": 3,
          "name": "Cold Brew",
          "Date": "Jun 22",
          "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/img/blog/blog-3.png" },
  
        { "id": 4, 
          "name": "Cold Brew with Milk",
          "Date": "Jun 23",
          "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/img/blog/blog-4.png" },
  
        { "id": 5, 
          "name": "Dark Mocha Frappuccino",
          "Date": "Jun 24",
          "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/img/blog/blog-5.png" },
  
        { "id": 6,
          "name": "Espresso Frappuccino",
          "Date": "Jun 25",
          "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "image": "assets/img/blog/blog-6.png" }
                    
      ];

    Blog.forEach(Blog => {
      const BlogHTML = `
          <div class="col-12 col-md-6">
            <div class="card mb-7">
              <div class="badge bg-white text-body card-badge">
                <time class="text-uppercase">${Blog.Date}</time>
              </div>
              <img class="card-img-top" src=${Blog.image} alt="...">
              <div class="card-body px-0">
                <h5>${Blog.name}</h5>
                <p class="mb-0 text-gray-500">
                  ${Blog.Text}
                </p>
                <a class="btn btn-link stretched-link px-0 text-reset" href="blog-post.html">
                  Read More <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
      `;
      BlogListNew.innerHTML += BlogHTML;
    });


  });

