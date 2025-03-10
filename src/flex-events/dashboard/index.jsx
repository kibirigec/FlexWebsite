import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

// Import icons
import {
    CalendarIcon,
    ChartBarIcon,
    Cog6ToothIcon as CogIcon, // Changed from CogIcon
    HomeIcon,
    InboxIcon,
    MapIcon,
    Bars3Icon as MenuIcon, // Changed from MenuIcon
    MagnifyingGlassIcon as SearchIcon, // Changed from SearchIcon
    UserCircleIcon,
    XMarkIcon as XIcon, // Changed from XIcon
    BellIcon,
    ChevronDownIcon,
    FunnelIcon as FilterIcon, // Changed from FilterIcon
    EyeIcon,
    EllipsisHorizontalIcon as DotsHorizontalIcon, // Changed from DotsHorizontalIcon
    PlusIcon
  } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [stats, setStats] = useState({
    total: 0,
    upcoming: 0,
    completed: 0,
    cancelled: 0
  });

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const fetchedBookings = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          status: doc.data().status || "confirmed", // Default status
        }));
        
        setBookings(fetchedBookings);
        setFilteredBookings(fetchedBookings);
        
        // Calculate statistics
        setStats({
          total: fetchedBookings.length,
          upcoming: fetchedBookings.filter(b => new Date(b.date) > new Date()).length,
          completed: fetchedBookings.filter(b => b.status === "completed").length,
          cancelled: fetchedBookings.filter(b => b.status === "cancelled").length
        });
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    // Filter bookings based on search query and active filter
    let result = [...bookings];
    
    if (searchQuery) {
      result = result.filter(booking => 
        booking.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.eventType?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (activeFilter !== 'all') {
      result = result.filter(booking => booking.status === activeFilter);
    }
    
    setFilteredBookings(result);
  }, [searchQuery, activeFilter, bookings]);

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Get today's date for the greeting
  const today = new Date();
  const hours = today.getHours();
  let greeting = "Good morning";
  if (hours >= 12 && hours < 17) greeting = "Good afternoon";
  if (hours >= 17) greeting = "Good evening";

  return (
    <div className=" py-30 flex h-screen bg-gray-50">
       
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          fixed inset-y-0 left-0 z-50 w-64 transition duration-300 transform bg-white border-r border-gray-200 md:translate-x-0 md:static md:h-screen
        `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center">
              <span className="h-8 w-8 rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center">
                <CalendarIcon className="h-5 w-5 text-white" />
              </span>
              <span className="ml-2 text-lg font-semibold text-gray-800">FlexEvents Dashboard</span>
            </div>
            <button 
              className="md:hidden" 
              onClick={() => setSidebarOpen(false)}
            >
              <XIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Sidebar content */}
          <div className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
            {/* Main navigation */}
            <nav className="space-y-1">
              <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-green-50 text-green-700">
                <HomeIcon className="h-5 w-5 mr-3" />
                Dashboard
              </a>
              <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <CalendarIcon className="h-5 w-5 mr-3 text-gray-500" />
                Events
              </a>
              <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <InboxIcon className="h-5 w-5 mr-3 text-gray-500" />
                Bookings
              </a>
              <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <UserCircleIcon className="h-5 w-5 mr-3 text-gray-500" />
                Clients
              </a>
              <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <ChartBarIcon className="h-5 w-5 mr-3 text-gray-500" />
                Analytics
              </a>
              <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                <MapIcon className="h-5 w-5 mr-3 text-gray-500" />
                Locations
              </a>
            </nav>

            {/* Secondary navigation */}
            {/* <div>
              <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Settings
              </h3>
              <nav className="mt-2 space-y-1">
                <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100">
                  <CogIcon className="h-5 w-5 mr-3 text-gray-500" />
                  Account
                </a>
              </nav>
            </div> */}
            <div>
                i will add more features if necessary
            </div>
          </div>

          {/* User profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="h-9 w-9 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Charles lwanga</p>
                <p className="text-xs text-gray-500">admin@eventflow.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Left side */}
              <div className="flex items-center">
                {/* Mobile menu button */}
                <button 
                  className="md:hidden -ml-1 mr-2 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none"
                  onClick={() => setSidebarOpen(true)}
                >
                  <MenuIcon className="h-6 w-6 text-gray-500" />
                </button>
                   
                <div className="hidden md:block">
                  <h1 className="text-lg font-semibold text-gray-800">{greeting}, Charles</h1>
                  <p className="text-sm text-gray-500">{today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="hidden md:block relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    className="py-2 pl-10 pr-4 block w-full border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Notifications */}
                <button className="bg-white p-1.5 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none">
                  <BellIcon className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <div className="relative inline-block text-left">
                  <button className="bg-white rounded-full text-gray-500 hover:text-gray-600 focus:outline-none flex">
                    <UserCircleIcon className="h-8 w-8" />
                    <ChevronDownIcon className="h-4 w-4 mt-2 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Search for mobile */}
        <div className="md:hidden px-4 sm:px-6 py-4 bg-white border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search bookings..."
              className="py-2 pl-10 pr-4 block w-full border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCard
              title="Total Bookings"
              value={stats.total}
              icon={<CalendarIcon className="h-6 w-6 text-green-600" />}
              change="+12% from last month"
              positive={true}
            />
            <StatsCard
              title="Upcoming Events"
              value={stats.upcoming}
              icon={<InboxIcon className="h-6 w-6 text-green-600" />}
              change="+5% from last month"
              positive={true}
            />
            <StatsCard
              title="Completed"
              value={stats.completed}
              icon={<ChartBarIcon className="h-6 w-6 text-green-600" />}
              change="Same as last month"
              positive={null}
            />
            <StatsCard
              title="Cancelled"
              value={stats.cancelled}
              icon={<XIcon className="h-6 w-6 text-red-600" />}
              change="-3% from last month"
              positive={true}
            />
          </div>
        </div>

        {/* Main content area with filters and booking list */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none p-4 sm:p-6 lg:p-8 bg-gray-50">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Event Bookings</h2>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-3">
                {/* Filters */}
                <div className="flex items-center space-x-2">
                  <FilterIcon className="h-5 w-5 text-gray-500" />
                  <button 
                    className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeFilter === 'all' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => handleFilterChange('all')}
                  >
                    All
                  </button>
                  <button 
                    className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeFilter === 'confirmed' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => handleFilterChange('confirmed')}
                  >
                    Confirmed
                  </button>
                  <button 
                    className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeFilter === 'completed' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => handleFilterChange('completed')}
                  >
                    Completed
                  </button>
                  <button 
                    className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeFilter === 'cancelled' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => handleFilterChange('cancelled')}
                  >
                    Cancelled
                  </button>
                </div>
                
                {/* View toggle */}
                <div className="flex border border-gray-300 rounded-md overflow-hidden">
                  <button 
                    className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : 'bg-white'}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button 
                    className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : 'bg-white'}`}
                    onClick={() => setViewMode('list')}
                  >
                    <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                {/* Add booking button */}
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <PlusIcon className="h-5 w-5 mr-1.5" />
                  Add Manual Booking
                </button>
              </div>
            </div>
          </div>

          {/* Loading state */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchQuery ? "Try adjusting your search criteria." : "Start by adding a new booking."}
              </p>
            </div>
          ) : (
            <>
              {/* Grid view */}
              {viewMode === 'grid' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              )}

              {/* List view */}
              {viewMode === 'list' && (
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    {filteredBookings.map((booking) => (
                      <BookingListItem key={booking.id} booking={booking} />
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

// Stats Card Component
function StatsCard({ title, value, icon, change, positive }) {
  return (
    <div className="bg-white overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-gray-50 rounded-md p-3">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-semibold text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {change && (
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm">
            <span 
              className={`font-medium ${
                positive === true ? 'text-green-600' : 
                positive === false ? 'text-red-600' : 'text-gray-500'
              }`}
            >
              {change}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// Booking Card Component
function BookingCard({ booking }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300">
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
              {booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1)}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">{booking.eventType}</h3>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <DotsHorizontalIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-white">
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <UserCircleIcon className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-700">{booking.name}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-700">{booking.email}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-700">{formatDate(booking.date, 'medium')}</span>
          </div>
          
          {booking.phone && (
            <div className="flex items-center text-sm">
              <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-700">{booking.phone}</span>
            </div>
          )}
          
          {booking.message && (
            <div className="pt-2 border-t border-gray-100">
              <p className="text-sm text-gray-600 line-clamp-2">{booking.message}</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="border-t border-gray-200 bg-gray-50 px-6 py-3">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Booking ID: {booking.id.substring(0, 8)}...</span>
          <button className="flex items-center text-sm font-medium text-green-600 hover:text-green-500">
            <EyeIcon className="h-4 w-4 mr-1" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

// Booking List Item Component
function BookingListItem({ booking }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <li>
      <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors duration-150">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center">
                  <p className="text-sm font-medium text-indigo-600 truncate">{booking.eventType}</p>
                  <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                    {booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1)}
                  </span>
                </div>
                <div className="mt-2 flex">
                  <div className="flex items-center text-sm text-gray-500 mr-6">
                    <UserCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    <span>{booking.name}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    <span>{formatDate(booking.date, 'short')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0 flex items-center space-x-4">
            <button className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <DotsHorizontalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

// Date Formatting Function (Enhanced)
function formatDate(dateString, format = 'full') {
  try {
    const date = new Date(dateString);
    
    switch(format) {
      case 'short':
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      case 'medium':
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      case 'full':
      default:
        return date.toLocaleString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        });
    }
  } catch {
    return dateString; // Fallback for incorrect formats
  }
}