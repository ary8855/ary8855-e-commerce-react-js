import React, { useEffect, useState } from 'react';
import {doc, getDoc, getFirestore } from 'firebaese/firestone'

export default function FBGetProd() {
    //H5RVym4xL9jCz1ATL6ba
    //productos

    const db = getFirestore();

    const perritoRef = doc(db, 'productos', 'H5RVym4xL9jCz1ATL6ba');

    useEffect(() => {
        getDoc(perritoRef).then((res) => {
            console.log()
        });
    },[])

    return<></>;
}