




fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
      return response.json()
  })
  .then((data) => {

    console.log(data)

    const blogs = data.map((item,index) =>{

        if(index % 2) {
            return `          
            <article class="blogs">
                <div>
                    <h5 class="blog-subject blue">Design</h5>
                    <h1 class="blog-title">${item.title}</h1>
                    <h5 class="blog-data">${item.id}</h5>
                    <p class="blog-info">${item.body}</p>
                    <a href="" class="blog--link-readMore">Continue reading</a>
                </div>
            </article>`
        }

        else{
            return `            
            <article class="blogs">
                <div>
                    <h5 class="blog-subject blue">World</h5>
                    <h1 class="blog-title">${item.title}</h1>
                    <h5 class="blog-data">${item.id}</h5>
                    <p class="blog-info">${item.body}</p>
                    <a href="" class="blog--link-readMore">Continue reading</a>
                </div>
            </article>`
            
        }
    })
    document.querySelector('.blog-container').innerHTML = blogs.join('')
  })

