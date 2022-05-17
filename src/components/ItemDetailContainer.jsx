import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore"




export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const [invalidId, setInvalidId] = useState(false);

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    if (productId) {
      const db = getFirestore();

      const productRef = doc(db, "productos", productId);
      getDoc(productRef).then((snapshot) => {
        if (snapshot.exists()) {
          if (isMounted) { // quizas usar esto afuera de if product id
            const productToSet = { id: snapshot.id, ...snapshot.data() }
            setProduct(productToSet)
          }
        } else {
          setInvalidId(true)
        }
      })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))

    } else {
      setInvalidId(true) // agregar un estado mas representativo luego
      // no es lo mismo que no haya nada a que este mal
    }

    return () => {
      isMounted = false;
      setInvalidId(false);
    };

  }, [productId]);

  /*
useEffect(() => {
  getProducts(2000, products)
    .then((result) => {
      result.find((item) => item.id === productId)
        ? setProduct(result.find((item) => item.id === productId))
        : setInvalidId(true);
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  return () => {
    setInvalidId(false);
  };
}, [productId]); */

  return invalidId ? (
    <h3>404 item not found</h3>
  ) : (
    <ItemDetail key={productId} product={product} loading={loading} />
  );
}