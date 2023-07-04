var totalPrice = function (data) {
    var price = data.price, discount = data.discount, isInstallment = data.isInstallment, months = data.months;
    return (price * (1 - discount / 100)) / months;
};
var result = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(result);
// 6250
