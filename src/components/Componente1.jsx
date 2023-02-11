// const Componente1 = () => {
//   const productos = [
//     {
//       id: "1",
//       name: "producto1",
//       descrition: "Descricion del producto1 ",
//       stock: 100,
//     },
//     {
//       id: "2",
//       name: "producto2",
//       description: "Descripcion del producto2",
//       stock: 50,
//     },
//     {
//       id: "3",
//       name: "producto3",
//       description: "Descripcion del producto3",
//       stock: 20,
//     },
//   ];

//   const mostrarProductos = new Promise((resolve, reject) => {
//     if (productos.length > 0) {
//       setTimeout(() => {
//         resolve(productos);
//       }, 3000)
//     } else {
//       reject("No hay productos");
//     }
//   });

//   mostrarProductos
//     .then((resultado) => {
//       console.log(resultado);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return (
//     <>
//       {productos.map((item) => {
//         return (
//           <div key={item.id}>
//             <h1>{item.name}</h1>
//             <h1>{item.description}</h1>
//             <h3>{item.stock}</h3>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Componente1;
