// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for "Explore My Work" button
  const btn = document.querySelector('#hero .btn-primary');
  btn.addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
  });

  // Blog posts defined here
  const blogPosts = [
    {
      title: "Bharath's Highway Expansion - A Digital Analysis",
      date: "2024-02-10",
      content: `Bharath is rapidly expanding its national highways to connect rural and urban areas. This not only enhances trade but also empowers regional development. This blog explores the impact this expansion has on regional economies and the challenges faced during construction.`
    },
    {
      title: "Smart Cities Initiative Across Bharath",
      date: "2024-04-15",
      content: `The Smart Cities Mission in Bharath aims to integrate advanced technologies for sustainable urban living. This blog delves into key projects, focusing on waste management and renewable energy adoption in Tier 2 and 3 cities.`
    },
    {
      title: "Affordable Housing for Urban Poor - New Projects",
      date: "2024-06-01",
      content: `Urban poor communities in Bharath are getting new affordable housing projects designed with innovative materials and urban planning techniques. Here we discuss the social impact and design principles behind these projects.`
    }
  ];

  // Render blog posts in the blog-list container
  function renderBlogPosts() {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '';

    blogPosts.forEach(post => {
      const article = document.createElement('article');
      article.className = 'blog-post';
      article.tabIndex = 0;

      const title = document.createElement('h3');
      title.textContent = post.title;
      article.appendChild(title);

      const date = document.createElement('div');
      date.className = 'date';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      date.textContent = new Date(post.date).toLocaleDateString(undefined, options);
      article.appendChild(date);

      const content = document.createElement('p');
      content.textContent = post.content;
      article.appendChild(content);

      blogList.appendChild(article);
    });
  }

  renderBlogPosts();

  // Contact form submission behavior
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.style.color = '#ff6f6f';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = '#ff6f6f';
      return;
    }

    formMessage.textContent = 'Sending message...';
    formMessage.style.color = '#ccc';

    setTimeout(() => {
      formMessage.style.color = '#7f5af0';
      formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
      form.reset();
    }, 1500);
  });
});
