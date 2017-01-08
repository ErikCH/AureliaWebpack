export function configure(aurelia) {
    aurelia.use
        .basicConfiguration()
        .developmentLogging();

    aurelia.start().then(a => {
        a.setRoot('app/app', document.body);
    });
}

