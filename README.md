# Space tourism multi page website - Php Version 

**WARNING**: This is a really Work In Progress version of the project.

Here are some notes about what I am doing:
- I setted up Php with Apache. Part of the work was to create a router (at the
  moment, it's located inside the index.php file at the root of the project).
- I then installed and configured Twig as my templating engine. All the views
  and partials are located inside the `views` directory.
- I added Docker for local and prod environement. At the moment, everything
  works (the node installation and the dependencies installation with composer
  and npm).
- I am now working on the main GitHub Actions pipeline and the multistagging
  build.

Once everything is setted up and I can pull and push the image from everywhere,
I'll start working on the code.

For now, the project uses:
- Docker
- Php/Apache (with docker) - version 8.3
- Node (with docker) - version 20

I don't use any kind of database here (I've no needs for that).

notes : 
- https://www.freecodecamp.org/news/how-to-build-a-routing-system-in-php/
- https://stackoverflow.com/questions/19118482/deny-access-to-one-specific-folder-in-htaccess
- https://steampixel.de/simple-and-elegant-url-routing-with-php/
