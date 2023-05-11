async function search() {
    const query = document.getElementById('query').value;                   // Reason #1why I had to give upo on React
    const subscriptionKey = 'bf34161d49544c0b9f4eaf431abf05cf';       // Should be on a .env, but ....reasons
    const endpoint = `https://api.bing.microsoft.com/v7.0/search?q=site:turners.co.nz ${encodeURIComponent(query)}`;  // This API key didn't  allow me to customize, so I had to manually change
    const headers = { 'Ocp-Apim-Subscription-Key': subscriptionKey }; // Needed to be sent this way to be recognized
    const response = await fetch(endpoint, { headers });                        // grab my grub
    const json = await response.json();                                                   // Jay! Son!
    const results = json.webPages.value;                                                // ▼Come on baby Map my fire
    const html = results.map(result => `                                                
      <div class="result">
        <a href="${result.url}">${result.name}</a>
        <p>${result.snippet}</p>
      </div>
    `).join('');                
    document.getElementById('results').innerHTML = html;                    // Still get PTSD when I think of refering to the DOM whilst using react...
  }
  