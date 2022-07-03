import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7ce0c50c0a0b4ee4a1f4978866052a45', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
