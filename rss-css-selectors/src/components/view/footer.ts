export default function createFooter(footer: HTMLElement): void {
  const footerContainer: HTMLElement = document.createElement('div');
  footerContainer.className = 'footer__container';
  const giHub: HTMLElement = document.createElement('div');
  giHub.className = 'footer__git-hub';
  const giHubLink: HTMLElement = document.createElement('a');
  giHubLink.className = 'footer__git-hub_link footer__link';
  giHubLink.setAttribute('href', 'https://github.com/a-reznikov');
  giHubLink.setAttribute('target', '_blank');
  const footerInfo: HTMLElement = document.createElement('div');
  footerInfo.className = 'footer__info';
  const footerYear: HTMLElement = document.createElement('p');
  footerYear.className = 'footer__year';
  footerYear.textContent = '2023';
  const copyright: HTMLElement = document.createElement('p');
  copyright.className = 'copyright';
  copyright.textContent = 'a-reznikov';
  const rss: HTMLElement = document.createElement('div');
  rss.className = 'footer__rss';
  const rssLink: HTMLElement = document.createElement('a');
  rssLink.className = 'footer__rss_link footer__link';
  rssLink.setAttribute('href', 'https://rs.school/js/');
  rssLink.setAttribute('target', '_blank');

  if (footer) {
    giHub.append(giHubLink);
    footerInfo.append(footerYear);
    footerInfo.append(copyright);
    rss.append(rssLink);
    footerContainer.append(giHub);
    footerContainer.append(footerInfo);
    footerContainer.append(rss);
    footer.append(footerContainer);
  }
}
