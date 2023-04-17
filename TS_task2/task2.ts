const totalPrice = (data: { price: number; discount: number; isInstallment: boolean; months: number }): number => {
  const { price, discount, isInstallment, months } = data;

  return (price * (1 - discount / 100)) / months;
};

const result = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(result);

// 6250
