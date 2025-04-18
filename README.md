# CookUp - AI-Powered Meal Planning App

CookUp is a subscription-based meal planning app that helps users find budget-friendly recipes based on their preferences and available ingredients. The app uses AI to suggest cost-effective ingredient alternatives and provides detailed cost breakdowns for each recipe.

## Features

- Budget-based recipe suggestions
- Serving size customization
- Cost-effective ingredient alternatives
- Detailed recipe cards with cost breakdowns
- Full recipe instructions with high-quality images
- Subscription-based access (3 free views, then $10/month)

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- React Query
- Next Themes (dark mode support)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cookup.git
cd cookup
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
cookup/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── recipes/           # Recipe pages
│   ├── pricing/           # Pricing page
│   └── signup/            # Signup page
├── components/            # Reusable components
├── public/               # Static assets
└── styles/               # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [Next Themes](https://github.com/pacocoursey/next-themes)
