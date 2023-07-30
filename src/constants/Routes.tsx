export const HOME = '/';
export const PRODUCTS = '/products';
export const PUBLICATIONS = '/publications';
export const CONTACTS = '/contacts';

export const LASERS = '/0';
export const LASERMODULES = '/1';
export const IPM = '/2';
export const PCS = '/3';
export const INFO= '/info';

export const ANY = '/*';

class RouteFactory {
    private tmp_path: string[];

    constructor() {
        this.tmp_path = [];
    }

    get ROOT() {
        return this;
    }

    get HOME() {
        this.tmp_path.push('');
        return this;
    }

    get PRODUCTS() {
        this.tmp_path.push('products');
        return this;
    }

    get PUBLICATIONS() {
        this.tmp_path.push('publications');
        return this;
    }

    get CONTACTS() {
        this.tmp_path.push('contacts');
        return this;
    }

    get LASERS() {
        this.tmp_path.push('0');
        return this;
    }

    get LASERMODULES() {
        this.tmp_path.push('1');
        return this;
    }

    get IPM() {
        this.tmp_path.push('2');
        return this;
    }

    get PCS() {
        this.tmp_path.push('3');
        return this;
    }

    get INFO() {
        this.tmp_path.push('info');
        return this;
    }

    $(value?: string) {
        this.tmp_path.push(value ?? 'undefined');
        return this;
    }

    ID(id: string) {
        this.tmp_path.push(id);
    }

    toString() {
        const path = '/' + this.tmp_path.join('/');
        this.tmp_path = [];
        return path;
    }

    get ANY() {
        this.tmp_path.push('*');
        return this;
    }

    get END(): string {
        const path = '/' + this.tmp_path.join('/');
        this.tmp_path = [];

        return path;
    }
}

export const ROUTES = new RouteFactory();
