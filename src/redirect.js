if (process.env.NODE_ENV !== 'development' && window.location.protocol != 'https:') {
  location.href = location.href.replace("http://", "https://");
} 