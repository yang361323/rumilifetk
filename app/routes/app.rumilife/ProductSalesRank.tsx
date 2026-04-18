// app/routes/app.rumilife/ProductSalesRank.tsx
import React from "react";

interface ProductSalesItem {
  name: string;
  amount: number;
}

const ProductSalesRank: React.FC = () => {
  const productSales: ProductSalesItem[] = [
    { name: "Baby Three Doll Face Replacement...", amount: 567890.45 },
    { name: 'Samuel "Puppy,Be Good" Series Blind Box', amount: 489234.67 },
    {
      name: "Maymei-Mai I Love You Series Plush Doll Blind Box",
      amount: 423567.89,
    },
    { name: "Mr. Fox Plush Toy 25.6 Inches", amount: 398765.23 },
    {
      name: "Lila's Lucky Cat Honeyland Enchantment Plush Blind Box",
      amount: 372624.78,
    },
  ];

  // 获取最大金额（用于计算进度条百分比）
  const maxAmount = Math.max(...productSales.map((item) => item.amount));

  return (
    <div className="card-wrapper">
      <h3>按产品统计的总销售额</h3>
      <ul className="product-sales-rank">
        {productSales.map((item, index) => {
          const value = item.amount;
          const percentTage = (value / maxAmount) * 100;
          return (
            <li key={index}>
              <div className="product-name">{item.name}</div>
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${percentTage}%` }}
                ></div>
                <span className="amount">$US {item.amount}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductSalesRank;
