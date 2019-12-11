export const measure = () => {
  return new Promise((resolve) => {
    const blob = new Blob([`
            self.onmessage = function(e) {
              var start = Date.now();
              var a=10e6;

              while (a) {a -=1 };

              postMessage(Date.now() - start);
            }
        `]);

    // create blob url from blob
    const blobURL = window.URL.createObjectURL(blob);

    // create web worker from blob url
    const worker = new Worker(blobURL);

    // send event to web worker
    worker.postMessage(null);

    // listen to message event from web worker
    worker.onmessage = function (event) {
      resolve(event.data);
    };
  });
};
