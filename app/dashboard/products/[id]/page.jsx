import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt=""  fill />
            </div>
            Iphone
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <label>Title</label>
                <input type="text" name="title" placeholder='John doe'  />
                <label>price</label>
                <input type="number" name="price" placeholder='price'  />
                <label>Stock</label>
                <input type="number" name="stock" placeholder='stock'  />
                <label>Color</label>
                <input type="text" name="color" placeholder='color'  />
                <label>Size</label>
                <input type="text" name="size" placeholder='size'  />
                <label>Category</label>
                <select name="cat" id="cat">
                    <option value={"kitchen"}>Kitchen</option>
                    <option value={"computer"}>Computer</option>
                </select>
                <label>Description</label>
                <textarea name="desc" id="desc" placeholder='Description.......'></textarea>
                <button>Update</button>
            </form>
        </div>
    </div>
  ) 
}

export default SingleProductPage