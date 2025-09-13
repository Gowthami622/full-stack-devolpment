document.getElementById('loadNewsBtn').addEventListener('click', () => {
  const apiKey = '5529ea051c742eaa88d6e1a86c6d788';
  const topic = 'testa';  // fixed topic as query
  const url = `https://newsapi.org/v2/everything?q=${topic}&from=2025-08-12&sortBy=publishedAt&apiKey=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const newsContainer = document.getElementById('newsContainer');
      newsContainer.innerHTML = '';

      if (data.articles.length === 0) {
        newsContainer.innerHTML = '<p>No articles found.</p>';
        return;
      }

      data.articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        articleDiv.innerHTML = `
          <h3><a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a></h3>
          <p class="meta">
            <strong>Author:</strong> ${article.author || 'Unknown'} | 
            <strong>Source:</strong> ${article.source.name} | 
            <strong>Published At:</strong> ${new Date(article.publishedAt).toLocaleString()} | 
            <strong>Topic:</strong> ${topic}
          </p>
          <p>${article.description || ''}</p>
        `;

        newsContainer.appendChild(articleDiv);
      });
    })
    .catch(err => {
      document.getElementById('newsContainer').innerHTML = `<p>Error fetching news: ${err.message}</p>`;
    });
});
