// === PRICING TOGGLE ===
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Inject logic to swap pricing card data here
  });
});

// === SECURITY NOTICE MODAL ===
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('security-modal').classList.add('active');
  }, 1500);
});
document.querySelector('.modal-close')?.addEventListener('click', () => {
  document.getElementById('security-modal').classList.remove('active');
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});

// === DYNAMIC TRANSACTIONS FEED ===
// Fetch from YOUR backend (Supabase, Firebase, your own API)
async function loadTransactions() {
  const tbody = document.getElementById('transactions-body');
  // Example shape — replace with your real fetch
  const sample = [
    { user: 'U001', type: 'Verified', provider: 'Provider A', country: 'IN', ref: '****1234', amount: '₹50,000' },
  ];
  tbody.innerHTML = sample.map(t => `
    <tr>
      <td>${t.user}</td>
      <td>${t.type}</td>
      <td>${t.provider}</td>
      <td>${t.country}</td>
      <td>${t.ref}</td>
      <td>${t.amount}</td>
    </tr>
  `).join('');
}
loadTransactions();
