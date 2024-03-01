# Anime Wiki project using PERN stack and Vite
# Server can be run from folder and client in seperate command console windows using npm run / npm start OR concurrently with npm run dev
# Additionally, a database must be set up and connected to on Postgres before the project can be initialized to run locally. There is a DB file to demonstrate the SQL needed to generate all three tables currently (anime, genres, users)
# Once the initial setup is done, the project can be run and interacted with from that point without issue. 
# Currently the app has all basic CRUD functionality. Add Anime, Add Genres, Edit Anime, Edit Genres, Add User, Login, Delete Anime, Delete Genres, as well as Detail Pages for individual anime and a search bar for anime.
# The app has conditional rendering for a logged in user and not logged in user that shows/hides the CRUD functionality depending upon that.

# Planned future updates include: 
# -More robust detail page (linking to related anime, product database, tags)
# -Improved CSS (Smoother loading screens, smoother UX, improved design, animations for loading)
# -Trailer integration to link Youtube video trailers in page
# -Addition of a Products Database and a Shop tab that will feature e-commerce database