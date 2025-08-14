# Interface Monitoring Dashboard

## 📝 Assignment Overview
A web-based dashboard to monitor HR integration interfaces between SAP SuccessFactors and downstream systems, visualizing execution health and history.

## ✨ Features
- Real-time interface status monitoring
- Time-based filtering (Last Hour, 24 Hours, Week, Month)
- Summary metrics visualization
- Responsive design
- Mock data generation
- Loading states for better UX

## 🛠 Tech Stack
- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Charts**: Chart.js
- **Tables**: TanStack Table
- **Icons**: Lucide React
- **Build Tool**: Vite
  
## Project Structure
src/
├── components/
│   ├── Dashboard.jsx       # Main dashboard layout
│   ├── LogsTable.jsx      # Interface logs table
│   ├── SummaryCards.jsx   # Metrics summary cards
│   └── TimeFilter.jsx     # Time range selector
├── utils/
│   ├── api.js             # Mock API client
│   └── mockData.js        # Mock data generator
├── App.jsx                # Root component
└── main.jsx               # Application entry point


