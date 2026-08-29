const target = document.querySelector('#target');

const dateOptions = {
  day: 'numeric',
  year: 'numeric',
  month: 'long',
};

target.innerHTML = `
<p>
Browser: ${window.navigator.userAgent}<br />
Browser: ${window.navigator.userAgentData.brands[1].brand} ${window.navigator.userAgentData.brands[1].version}<br />
OS: ${window.navigator.userAgentData.platform}<br />
Window width: ${window.innerWidth}px, height: ${window.innerHeight}px<br />
Available screen width: ${window.screen.availWidth}px, height: ${window.screen.availHeight}px<br />


Current date: ${new Date().toLocaleDateString('fi-fi', dateOptions)}
</p>
`;
