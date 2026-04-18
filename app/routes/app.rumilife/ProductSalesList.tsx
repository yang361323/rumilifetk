// components/ProductSalesList.tsx
import styles from './styles.module.css';

interface ProductItem {
  name: string;
  amount: string;
}

interface ProductSalesListProps {
  products: ProductItem[];
}

export default function ProductSalesList({ products }: ProductSalesListProps) {
  return (
    <div className={styles.productSalesList}>
      <h3>按产品统计的总销售额</h3>
      <ul className={styles.productList}>
        {products.map((product, idx) => (
          <li key={idx} className={styles.productItem}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productAmount}>{product.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}