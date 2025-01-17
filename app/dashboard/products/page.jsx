import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/search/Search'
import { fetchProducts } from '@/app/lib/data'


const ProductsPage = async ({searchParams}) => {

  const q = searchParams?.q || ""
  const page = searchParams?.page || 1
  const {products, count} = await fetchProducts(q, page)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for product...."} />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>CreatedAt</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>
              <div className={styles.product}>
                <Image 
                src={product.img || "/noproduct.jpg"}
                alt="image" 
                width={40} 
                height={40} 
                className={styles.productImage}
                />
                {product.title}
              </div>
            </td>
            <td>{product.desc}</td>
            <td>${product.price}</td>
            <td>{product.createdAt?.toString().splice(4,16)}</td>
            <td>{product.stock}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/${product._id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
        <Pagination count={count} />
    </div>
  )
}

export default ProductsPage