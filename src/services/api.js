const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:9000';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) throw new Error(await res.text().catch(()=> `Request failed ${res.status}`));
  const ct = res.headers.get('content-type') || '';
  return ct.includes('application/json') ? res.json() : res.text();
}

export default {
  // public shows
  listShows: () => request('/api/shows'),
  // auth
  login: (email, name) => request('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, name }) }),
  register: (email, name) => request('/api/auth/register', { method: 'POST', body: JSON.stringify({ email, name }) }),
  // bookings
  createBooking: (payload) => request('/api/bookings/postBook', { method: 'POST', body: JSON.stringify(payload) }),
  listBookings: () => request('/api/bookings/getBook'),
  // 360 Videos
  getAllVideos360: () => request('/api/videos360/all'),
};
