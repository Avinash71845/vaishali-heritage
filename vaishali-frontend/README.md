# Vaishali Heritage Travel Platform

A React + Vite frontend for exploring the heritage city of Vaishali, with AI trip planning, an AI tour guide chat, route planning, and an admin dashboard.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/components` - reusable UI components (Button, Input, Card, Sidebar, Navbar, Modal, Loader, DataTable)
- `src/pages` - route-level pages (Home, ExplorePlaces, PlaceDetails, AiTourGuide, TripPlanner, ItineraryResult, RoutePlanner, NearbyServices, Reviews, admin pages)
- `src/layouts` - MainLayout, AppLayout, AdminLayout
- `src/services` - axios-based API service modules (api, authService, placeService, tripService, aiService)
- `src/hooks` - custom hooks (useChat)
- `src/context` - AuthContext
- `src/utils` - mock data used until backend endpoints are connected

## API

All service files point to placeholder endpoints under `/api`. Set `VITE_API_BASE_URL` in a `.env` file to point to your backend.
