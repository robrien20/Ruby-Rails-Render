// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// get the city and country of the user's ip address    
console.log(fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('city').value = data.city
        document.getElementById('country').value = data.country
    })
)

