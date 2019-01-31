const loadScript = (function () {
  const promises = {};

  return function (url, id) {
    if (promises[id]) {
      return promises[id];
    }

    promises[id] = new Promise((resolve, reject) => {
      const existingElement = document.querySelector(`#${id}`);
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');

      script.type = 'text/javascript';
      script.id = id;
      script.src = url;
      script.onreadystatechange = resolve;
      script.onload = resolve;
      script.onerror = reject;

      if (existingElement) {
        existingElement.remove();
      }

      head.appendChild(script);
    });

    promises[id].then(() => {
      promises[id] = null;
    }).catch(() => {
      promises[id] = null;
    });

    return promises[id];
  };
}());

export {
  loadScript,
};
