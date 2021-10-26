const Product = require('../entities/Product');

module.exports = {
    calulator(consumption){
        let productList = [this.productA(consumption), this.productB(consumption)];
        return productList.sort(function(a, b){return a.annualCost-b.annualCost});
    },

    productA(consumption){
        const name = 'basic electricity tariff';
        const cost = (consumption*0.22) + 60;
        return new Product(name, cost);
    },

    productB(consumption){
        const name = 'Packaged tariff';
        let cost = 0;
        if (consumption <= 4000) cost = 800;
        else cost = 800 + ((consumption - 4000) * 0.30);
        return new Product(name, cost);
    }
}