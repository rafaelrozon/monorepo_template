const getConfig = (configure, folder = '../src') => {

    const req = require.context(folder, true, /\.stor(y|ies)\.tsx$/);

    function loadStories() {
        req.keys().forEach(filename => req(filename));
    }

    configure(loadStories, module);

}
