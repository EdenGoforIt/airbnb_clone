This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run image in the docker container in lcoal host

`docker-compose up -d` detached mode in the background
`docker logs mongo` check if running 
now you can check in the .env if the connection is right such as `mongodb://localhost:27017`

## Getting Started

Create a `.env` file and add a `DATABASE_URL` with a mongodb connection
[cluster name can be different]
`DATABASE_URL="mongodb+srv://[id]:[password]@cluster0.eoitbl0.mongodb.net/[db]"`

if locally
`DATABASE_URL="mongodb://localhost:27017/local?authSource=admin&retryWrites=false"`

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
``` 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## install mongodb locally

- [Install mongodb locally](https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database)
- `DATABASE_URL="mongodb+srv://[username]:[password]@[address]/myVirtualDatabase"`

## push prisma db

`npx prisma db push`

## known errors

- mongodb needs replica to work with but locally, mongodb doesn't do the transaction. There is a workaround.
-

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
