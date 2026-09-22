const USD_TO_BHD = 0.376;

const observer = new MutationObserver(() => {
  convertPrices();
});

function convertPrices() {
  observer.disconnect();

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parentTag = node.parentElement && node.parentElement.tagName;
        if (parentTag === 'SCRIPT' || parentTag === 'STYLE') {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );


  const priceRegex = /\$\s*(\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?)(\s*USD\b)?/g;
  const oldConversionRegex = /\s*\(\d+(?:\.\d{2})?\s*BHD\)/g;

  let node;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue;
    if (!text.includes('$')) continue;

    const cleanText = text.replace(oldConversionRegex, '');

    const newText = cleanText.replace(priceRegex, (match, p1) => {
      const usd = parseFloat(p1.replace(/,/g, ''));
      const bhd = (usd * USD_TO_BHD).toFixed(2);
      return `${match} (${bhd} BHD)`;
    });

    if (newText !== text) {
      node.nodeValue = newText;
    }
  }

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
}

convertPrices();
