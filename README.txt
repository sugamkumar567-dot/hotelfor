HOTEL WEBSITE STARTER — READ BEFORE PUBLISHING

Included:
- index.html: responsive hotel website with rooms, amenities, gallery, contact links, and booking enquiry form
- style.css: layout and styling
- script.js: date validation and mailto booking enquiry
- hotel-hero.png: generated illustrative hero image (if included)

IMPORTANT: This is a starter/demo website. Replace every placeholder before publishing:
- Sugam Hotels and Stays (update if your registered business name differs)
- +91 XXXXX XXXXX and +91XXXXXXXXXX
- hotel@example.com in index.html and script.js
- Hotel address, city, maps link, WhatsApp number
- Room names, real prices, guest capacities, facilities, photos
- Privacy and terms pages with your real policies

Booking form limitations:
- Opens the visitor's email app; it does not store requests on a server, verify live availability, or confirm bookings.
- For online bookings without email-app dependence, add a backend/database or connect a hotel booking provider.
- For online payments, integrate a trusted payment provider securely; never collect card details in a static form.

Run with Docker:
1. Build the image: `docker build -t hotel-website:local .`
2. Start the website: `docker run --rm -d --name hotel-website -p 8085:80 hotel-website:local`
3. Open http://localhost:8085/
4. Stop the container: `docker stop hotel-website`

Deploy on AWS:
1. Create a unique S3 bucket.
2. For a production setup, keep the bucket private and use CloudFront with Origin Access Control.
3. Upload the site files to the bucket.
4. Create a CloudFront distribution with the S3 bucket as origin and default root object `index.html`.
5. For a custom domain, configure DNS and an ACM certificate in the required CloudFront region.
6. Test mobile layout, all contact links, form email destination, policy pages and HTTPS before sharing.

# GitHub Practice Project

This project demonstrates the Git and GitHub workflow.

## Features
- Git version control
- Feature branch development
- Pull Request code review
- Merge changes into main
