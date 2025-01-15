# Sanggar Nusantara Website

It is a project Sanggar Nusantara Website.<br>

For the production Website : [click here!](https://alope.site)
<br>
For the production CMS : [click here!](https://competition-itc-cms-sanggar-nusantara.vercel.app/)

<br><br>
If you need the CMS Project, you can visit my github [in here!](https://github.com/Alope-Community/Competition_ITC_CMS-SanggarNusantara)


## Getting Started

Clone this Project to your storage using git:
```bash
git clone https://github.com/Alope-Community/Competition_ITC_SanggarNusantara.git
```

Open the project, and install using command
```bash
composer install
```
And run 
```bash
npm install
```

Copy the .env.example file and rename it to .env using command
```bash
cp .env.example .env
```

Generate key app using command
```bash
php artisan key:generate
```

Make database "sanggar-nusantara", and run the migration after it
```bash
php artisan migrate:fresh --seed
```

And now, run the development server:
```bash
npm run dev
```

Open new Terminal and please run
```bash
php artisan serve
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) with your browser to see the result.

## Credential in .env
```bash
GOOGLE_MAPS_API_KEY=YOUR_API_KEY

MIDTRANS_SERVER_KEY=YOUR_MIDTRANS_SERVER_KEY
MIDTRANS_CLIENT_KEY=YOUR_MIDTRANS_CLIENT_KEY
```

for this credential, you can register midtrans and google map developer for make your api key google map. <br>
but if you need help please contact me : <br>
Instagram : xxhamz_ <br>
WA : 083871352030

