export type TProduct = {
  name: string;
  description: string;
  price: 999;
  category: "Electronics";
  tags: ["smartphone", "Apple", "iOS"];
  variants: [
    {
      type: "Color";
      value: "Midnight Blue";
    },
    {
      type: "Storage Capacity";
      value: "256GB";
    }
  ];
  inventory: {
    quantity: 50;
    inStock: true;
  };
};
