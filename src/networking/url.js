class URL {
    constructor(route) {
        this.route = route;
        this.searchParameter = '';
        this.isFirstParameter = true;
    }

    appendSearchParameter(key, value) {
        if (this.isFirstParameter) {
            this.searchParameter += `?${key}=${value}`;
            this.isFirstParameter = false;
        } else {
            this.searchParameter += `&${key}=${value}`;
        }
    }

    toString() {
        return this.route + this.searchParameter;
    }
}

export default URL;
