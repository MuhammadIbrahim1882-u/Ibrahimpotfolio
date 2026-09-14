// Small helpers: set year and handle contact form via mailto (frontend only)
document.addEventListener('DOMContentLoaded',function(){
  const y = new Date().getFullYear();document.getElementById('year').textContent=y;
  const form = document.getElementById('contactForm');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const gmail = document.getElementById('gmail').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent('Portfolio contact from ' + name);
    const bodyLines = [];
    if(gmail) bodyLines.push('Gmail: '+ gmail);
    if(message) bodyLines.push('\nMessage:\n' + message);
    const body = encodeURIComponent(bodyLines.join('\n'));
    // Use the portfolio owner's email. Adjust if needed.
    const mailto = 'mailto:samiibrahim1882@gmail.com?subject=' + subject + '&body=' + body;
    window.location.href = mailto;
  });
});
