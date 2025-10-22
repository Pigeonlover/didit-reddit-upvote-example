## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Change the name of the `.env.example` file to `.env.local` in the root directory, then add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers))
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [x] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair

---

---

---

## Dev Logs

1. Familiarised myself with the app and looked over the folders/code.

2. I watched the YouTube video and worked along to create a GitHub App for OAuth. I added the strings needed to my `.env.local` file.

3. Ran the SQL schema on Supabase's SQL Editor. I grabbed the database link and added it to the `.env.local` file.

4) Rebooted the server and the app finally showed for the first time without any errors! As shown in the video, I clicked on Log In, and authorised the app through GitHub. I will now push everything to GitHub and add the env variables to Vercel, and hopefully everything will work there too.

5) Deployment on Vercel now works! Next: I will look into adding post title metadata.

6) Added dynamic metadata for individual posts' titles.

7) To make it so when a user is not logged-in, they cannot vote: the logic is split between the `Vote` component and the `VoteButtons` component. I had to make sure the `userId` was being passed from the former to the latter (and `VoteButtons` had it in the params to accept it).

8) Looking into now adding user profile pages.

9) Added a direct link to own profile on the username at the top (in the header). However, link is not working. Looking into fixing it.

10) Direct link to profile fixed. Adding better styling to profile.

11) Added user's posts to profile. Fixing some more styling.

---

---

## What did I achieve?

- I successfully forked another project to make a copy for me to edit.
- I familiarised myself with someone else's code and learned to work with it. Looked over the structure, folders, components, etc... To see what there is already and roughly how everything is working together.
- I learned about Next Auth and how to implement it with GitHub. I successfully deployed the app on Vercel by correctly editing the environment variables.
- I added metadata in the `layout` and dynamically generated metadata for individual posts.
- Added an error message that shows on the page if you're not logged-in instead of the upvote and downvote buttons, so you cannot do those actions accidentally.
- Added a profile page that shows a cute avatar (just a simple circle with the user's initial in it), their username, and id number. Then, underneath, a list of their posts. Later on, I plan to add a list for comments, too.

---

## What wasn't I happy with?

Not much. I actually thought this assignment would go much worse than it actually has. I was worried from the beginning (being able to deploy it on Vercel and make it workable), but once I actually got stuck in there, it all went surprisingly smoothly (the YouTube video was a massive help).

I guess a negative is that I didn't manage to do any other additions to the app after the profile page. But that's mainly from the time finishing, rather than thinking I am not able to.

---

## References

Curiously I didn't use many references for this, as it felt like I kinda knew everything needed already. I looked back at the demos from Manny for a revision on Metadata and such.

Also the YouTube video for the GitHub authorisation was essential. --> https://www.youtube.com/watch?v=H-1ozULYdyc

As always, Tailwind docs because there's just so much and one cannot possibly have it all memorised in their brain XD --> https://tailwindcss.com/docs/styling-with-utility-classes
