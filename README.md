# fitofan-test-task

This project is demo for Google login using Supabase authentication.
And built with Vite and deployed on Vercel.

---

Vercel Website Live Demo  
https://fitofan-test-task-klfq.vercel.app

---

Features:
Google sign-in via Supabase
Display user email after login
Works in both local and production environments

---

How to Run Locally:

1.Clone the project
    git clone https://github.com/VincentGuoW/fitofan-test-task.git .

2.Install dependenciesL
    npm install

3.Creat .env file under project file:

    VITE_SUPABASE_URL=https://dhklrtiksalgepspmcsr.supabase.co
    VITE_SUPABASE_ANON_KEY= (I will share this key separately if needed)

4.npm run dev

---

1. Local Setup
Tested project on localhost.
Installed all dependencies via npm install and confirmed the app runs properly.

2. Project Refactoring
Moved mock job data from App.tsx to data/mockJobs.ts

Moved job filtering logic to utils/filterJobs.ts

Centralized API logic in the services/ folder
(More structure improvements can be done later)

3. Supabase Setup
Created a new Supabase project

Configured .env with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY

Created authService.ts to handle login and user session
(Next: test inserting and retrieving real job data from Supabase DB)

4. Google Login Integration
Replaced login button with user's email upon successful login
(Next: add other login providers and a logout option)

5. Local Testing
Google OAuth and Supabase Auth tested successfully on localhost

6. Deployment
Deployed the project to Vercel

Pushed the code to a public GitHub repository

Confirmed login flow works on the live site