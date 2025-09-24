import fetch from 'node-fetch';

fetch('https://jersjyhoqgkzgdxfamua.supabase.co')
  .then(res => res.text())
  .then(console.log)
  .catch(err => console.error('Fetch failed:', err));