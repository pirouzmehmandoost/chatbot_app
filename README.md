This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is a function AI assistant with a barebones UI. Please read the TO-DO list below to review limitations!

## Deloyed with Vercel

Visit: https://ama-app-nu.vercel.app/

## Running locally

To run locally the development server, you must provide your own OpenAI API key in a .env file. Add your key to .env as OPENAI_API_KEY="..."

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tools Used

- Frameworks

  - [Next.js v16](https://nextjs.org/docs) + App Router
  - [React v19](https://react.dev/blog/2024/12/05/react-19)

- AI
  - [Vercel AI SDK](https://sdk.vercel.ai/docs) - Extensive toolkit for supporting various AI SDK Providers.
  - [OpenAI](https://platform.openai.com/docs/overview) - Provider, language model support for OpenAI API's (completion, responses, chat, embeddings).
    - Current language model in use: GPT-4o-mini

- Styling
  - [Tailwind CSS v4](https://tailwindcss.com)
  - [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font)

- Database/object storage
  - [Vercel Postgres](https://vercel.com/storage/postgres) - for storing chat metadata
  - [Neon](https://neon.tech) + [pgvector] (https://neon.tech/docs/extensions/pgvector) - for Vector embedding storage/persistence. 

## Notes:

## State of the app within 72 hours of creation
- General chatbot functionality implemented.
- General UX/styling implemented.
- Simple tool calls enabled - a simple, first-round implementation for simple tool calling is enabled, not too useful at the moment (fetches weather data, performs math conversions and formats output).
- Enabled multi-step tool calls.
- Set up Postgres database, Neon + pgvector extensions, set up a Vercel Blob store for raw object storage, installed necessary packages.

## To-dos:

## implement data pipelines for:

1: User file management - uploading:
  - pipeline trigger: _user uploads a file_
    -> client-side data validation -> server-side data validation -> metadata generation -> db lookup -> db transaction -> blob storage -> response generation -> response processing -> app state update.

2: New file data ingestion:
 - pipeline trigger: _user selects file, taps button to trigger ingestion_
  -> db/blob store validation (db metadata entry lookup + blob store lookup )  
  -> blob store fetch
  -> file processing (server-side  data validation -> nlp -> tool calls (not in 1st proto) -> chunking -> embedding generation -> metadata generation -> db transation -> response generation -> response processing -> app state update. 


## Postgres business logic 
## Blob Store interaction logic
## file upload UI/UX

<!-- ## Generate environmental report-

The asistant should prompt the user to either define the following list items, such as the title, or to generate based on uploaded content.

1.) Define the Purpose: Determine the specific focus of the report (e.g., climate change, pollution, biodiversity).

2.) Gather Data: Collect relevant data and statistics from credible sources. This may include scientific studies, government reports, and environmental organizations.

3.) Outline the Report- provide a chat message or file upload from which to generate the following:

- Title
- Introduction: Brief introduction of the topic, its significance.
- Background Information: Provide context and relevant background data.
- Current Situation: Discuss the current state of the environment related to title.
- Impact Analysis: Analyze the effects of the current situation on ecosystems, human health, etc.
- Recommendations: Suggest actionable steps to address the issues.
- Conclusion: Summarize the key points and emphasize the importance of action.
- Bibliography -->


