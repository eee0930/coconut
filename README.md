# Coconut Music


## How to run?

- Open this folder on VSCode.
- Click on `View` -> `Terminal`.
- Run `npm i`.
- Run `npm start`.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Planning Routes

#### `global` routes
- / -> Home
- /join -> Join
- /login -> Login
- /search -> Search

#### `member` rooutes
- /member/:id -> See Member
- /member/logout -> Log Out
- /member/edit -> Edit My Profile
- /member/mypage -> My Page
- /member/delete -> Delete My Profile
- /member/archive -> Play List Archive

#### `music` routes
- /music/:theme/list -> Music List By Theme
- /music/:id -> Play Music
- /music/:id/edit -> Edit Video
- /music/:id/delete -> Delete Video
- /music/upload -> Upload Video
- /music/comments -> Comments on a Video
- /music/comments/delete -> Delete A Comments of a Video

#### `artist` routes
- /artist/:id -> View Artist Info

#### `album` routes
- /album/:id -> View Album Info

#### `admin` routes
- /admin/music/ -> Admin Music Index
- /admin/music/theme -> Music Lists
- /admin/music/theme/add -> Add Music Lists Theme
- /admin/music/theme/list -> Music List By Theme
- /admin/music/theme/list/add -> Add Music
- /admin/music/theme/list/edit -> Edit Music
- /admin/music/theme/list/delete -> Delete Music
- /admin/user/ -> Admin User Index



