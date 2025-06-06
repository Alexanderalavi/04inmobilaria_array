function renderPropiedades(propiedades, contenedorID, max =3){
    const contenedor = document.querySelector(contenedorID)
    contenedor.innerHTML = ""

    for(let i = 0; i < Math.min(max, propiedades.length); i++){
        const propiedad = propiedades[i];
        contenedor.innerHTML += `
        <div class="card ${propiedad.tipo}">
        <h3> ${propiedad.nombre}</h3>
        <img src="${propiedad.src}" alt="">
        <p> ${propiedad.descripcion}</p>
         <p> 📍 ${propiedad.ubicacion}</p>
          <p> 🛏️${propiedad.habitaciones} habitaciones | 🚽 ${propiedad.banos} baño</p>
          <p> $ git${propiedad.costo}</p>
        <p class = "${propiedad.smoke}">${propiedad.smoke=== "true" ? "🚬Permitido Fumar" : "🚭 Prohibido Fumar"}</p>
         <p class = "${propiedad.pets}">${propiedad.pets === "true" ? "🐈‍Mascotas Permitidas" : "🚫No se permiten mascotas"}</>
        </div>
        `
    }
}

renderPropiedades(propiedadesVenta, "#destacadosVenta")

renderPropiedades(propiedadesAlquiler, "#destacadosAlquiler")


