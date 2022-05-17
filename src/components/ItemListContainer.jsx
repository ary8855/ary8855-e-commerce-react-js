import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { Typography } from "@mui/material";

//import products from "../Utils/products";
//import { getProducts } from "../Utils/customFetch";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productCategory } = useParams();
  const [invalidCategory, setInvalidCategory] = useState(false);

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    const db = getFirestore();

    getDocs(
      productCategory ? query(collection(db, "productos"), where("category", "==", productCategory))
        : collection(db, "productos")
    )
      .then((snapshot) => {
        if (snapshot.size === 0) {
          productCategory ? setInvalidCategory(true) : console.log("No items found"); // do this better
        } else {
          if (isMounted) {
            const productsToSet = snapshot.docs.map((item) => {
              return {
                id: item.id,
                ...item.data(),
              };
            });
            setProducts(productsToSet);
          }
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    return () => {
      isMounted = false;
      setInvalidCategory(false);
    };
  }, [productCategory]);

  return invalidCategory ? (
    <Typography variant="h4">404 category not found</Typography>
  ) : (
    <ItemList products={products} loading={loading} />
  );
}